const BASE_URL = process.env.REACT_APP_BASE_URL;

const apiMiddleware = (store) => (next) => (action) => {
  if (!action.apiPackage) return next(action);

  const { headers, body, method, parameters } = action.apiPackage;
  const { type } = action;

  next({
    type: `${type}_PENDING`,
  });

  fetch(`${BASE_URL}/${parameters}`, {
    method: method,
    headers: {
      ...headers,
    },
    body: body || null,
  })
    .then((res) => {
      if (res.ok) {
        return Promise.resolve(res.json());
      }
      return Promise.resolve(res.json()).then((responseInJson) => {
        return Promise.reject(responseInJson);
      });
    })
    .then(
      //SUCCESS PART
      (res) => {
        if (res?.status === 1) {
          console.log(
            "False Positive. Actually an error happened at ActionType: ",
            action.type
          );
          throw res;
        }

        const { apiPackage, ...restAction } = action;
        store.dispatch({
          ...restAction,
          type: `${type}_SUCCESS`,
          response: res,
        });
      },
      (error) => {
        // ERROR part
        throw error;
      }
    )
    .catch((error) => {
      let res;
      if (error.status === 1) {
        res = {
          status: 1,
          error: error.status || 500,
          message: error.message,
          text: error.text,
          invalid_fields: error.invalid_fields,
        };
      } else {
        res = {
          status: 1,
          error: error.status || 500,
          message: error.status_msg,
          text: error.error_text,
        };
      }

      store.dispatch({
        type: `${type}_FAILURE`,
        response: res,
      });
    });
};

export default apiMiddleware;
