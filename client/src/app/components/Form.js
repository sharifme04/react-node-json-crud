import React from "react";
import PropTypes from "prop-types";

const Form = ({ handleChange, values, handleSubmit, btnColor, btnTitle }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="label"
          value={values?.title}
          onChange={handleChange}
          className="form-control"
          name="title"
          required
        />
      </div>
      <div className="form-group mt-3">
        <label>Description:</label>
        <input
          type="label"
          value={values?.description}
          onChange={handleChange}
          className="form-control"
          name="description"
          required
        />
      </div>
      <div className="mt-4"></div>
      <input
        type="submit"
        className={btnColor || "btn btn-primary"}
        value={btnTitle || "Add"}
      />
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
  value: PropTypes.any,
  handleChange: PropTypes.func,
  btnColor: PropTypes.any,
  btnTitle: PropTypes.string,
};

export default Form;
