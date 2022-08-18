import {
  ADD_TODO_FAILURE,
  ADD_TODO_PENDING,
  ADD_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_PENDING,
  DELETE_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  FETCH_TODO_PENDING,
  FETCH_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_PENDING,
  UPDATE_TODO_SUCCESS,
} from "../actionType/todo";

const initialState = {
  error: null,
  todo: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO_PENDING:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case FETCH_TODO_SUCCESS:
      const todo = action?.response;
      return {
        ...state,
        todo: todo && Object.keys(todo).length !== 0 && Object.values(todo),
        error: null,
        isLoading: false,
      };
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        error: action.response,
        isLoading: false,
      };
    case ADD_TODO_PENDING:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case ADD_TODO_SUCCESS:
      const todoItem = action?.response.todoItem;
      return {
        ...state,
        response: action.response,
        todo: [...state.todo, todoItem],
        isLoading: false,
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        error: action.response.error,
        isLoading: false,
      };

    case DELETE_TODO_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todo: state.todo?.filter((task) => task.id !== action.id),
        isLoading: false,
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case UPDATE_TODO_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        todo: state.todo.map((task) => {
          // eslint-disable-next-line eqeqeq
          if (task.id != action.id) {
            return task;
          }
          return {
            ...task,
            ...action.task,
          };
        }),
        isLoading: false,
      };
    case UPDATE_TODO_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}
