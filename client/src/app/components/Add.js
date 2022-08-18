import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Form from "./Form";
import { addToDo } from "../actions/todo";

const Add = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addToDo(values));
    navigate("/");
  };

  return (
    <Form
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Add;
