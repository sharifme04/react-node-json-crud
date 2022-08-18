import React from 'react'
import PropTypes from 'prop-types'

const SearchField = ({value, handleChange}) => {
  return (
    <div className="search-field">
    <input
      type="text"
      className="form-control"
      placeholder="search by title"
      value={value}
      onChange={handleChange}
    />
  </div>
  )
}

SearchField.propTypes = {
    value: PropTypes.any,
    handleChange: PropTypes.func
}

export default SearchField