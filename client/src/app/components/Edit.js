import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { updateToDo } from "../actions/todo";

const Edit = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.todoReducer || {});
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  let { id } = useParams();
  // eslint-disable-next-line eqeqeq
  const currentObj = todo?.filter((e) => e.id == id)[0];

  useEffect(() => {
    setValues({
      title: currentObj?.title,
      description: currentObj?.description,
    });
  }, [currentObj]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {...values, date: currentObj.date, id: currentObj.id}
    dispatch(updateToDo(data, id));
    navigate("/");
  };

  return (
    <Form
      btnColor="btn btn-info"
      btnTitle="Update"
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Edit;
