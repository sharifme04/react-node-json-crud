import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deleteToDo } from "../actions/todo";

const TableRow = ({ e }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{e?.id}</td>
      <td>{e?.title}</td>
      <td>{e?.description}</td>
      <td>{e?.date}</td>
      <td>
        <Link to={`/todo/edit/${e?.id}`}>
          <button type="button" className="btn btn-info">
            Edit
          </button>
        </Link>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(deleteToDo(e?.id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  e: PropTypes.object,
};

export default TableRow;
