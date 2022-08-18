import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODO,
  UPDATE_TODO,
} from "../actionType/todo";

export const getToDo = () => ({
  type: FETCH_TODO,
  apiPackage: {
    method: "GET",
    parameters: `todo`,
  },
});

export const addToDo = (todo) => ({
  type: ADD_TODO,
  apiPackage: {
    parameters: `todo/add`,
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  },
  todo,
});

export const deleteToDo = (id) => ({
  type: DELETE_TODO,
  apiPackage: {
    method: "DELETE",
    parameters: `todo/delete/${id}`,
  },
  id,
});

export const updateToDo = (task, id) => ({
  type: UPDATE_TODO,
  apiPackage: {
    method: "PUT",
    parameters: `todo/update/${id}`,
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  },
  task,
  id,
});
