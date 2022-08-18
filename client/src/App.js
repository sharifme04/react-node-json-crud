import React, { useEffect, useState } from "react";
//import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getToDo } from "./app/actions/todo";
import Home from "./app/components/Home";
import Add from "./app/components/Add";
import Edit from "./app/components/Edit";

function App() {
  const dispatch = useDispatch();
  const { todo, isLoading } = useSelector((state) => state.todoReducer || {});
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(getToDo());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
      <h2 className="app-title">Todo App</h2>
      <hr></hr>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              todoList={todo}
              isLoading={isLoading}
              handleChange={handleChange}
              value={value}
            />
          }
        />
        <Route path="/todo/edit/:id" element={<Edit />} />
        <Route path="/todo/addnew" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
