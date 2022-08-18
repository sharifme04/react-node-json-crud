import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TableRow from "./TableRow";
import SearchField from "./SearchField";

const Home = ({ todoList, value, handleChange, isLoading }) => {
  const filteredTodoList = todoList
    ?.filter(
      (k) => k?.title?.toLowerCase().indexOf(value?.toLowerCase()) !== -1
    )
    .map((e) => <TableRow key={e.id} e={e} />);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="input-group d-flex justify-content-between">
        <Link to={`/todo/addnew`}>
          <button type="button" className="btn btn-primary">
            Add New
          </button>
        </Link>
        <SearchField handleChange={handleChange} value={value} />
        <div></div>
      </div>
      <hr></hr>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{filteredTodoList}</tbody>
      </table>
    </div>
  );
};

Home.propTypes = {
  todoList: PropTypes.array,
  value: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

export default Home;
