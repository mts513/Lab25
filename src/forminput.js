import React from "react";
/**
 * FormInput a generic firm input
 * @function FormInput
 * @param {object} props
 */
function FormInput(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input
        className="form-control"
        type={props.type}
        id={props.username}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default FormInput;
