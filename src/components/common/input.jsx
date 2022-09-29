import { checkPropTypes } from "prop-types";
import React, { Component } from "react";

const Input = (props) => {
  return (
    <div className="from-group m-2">
      <label htmlFor={props.name}>{props.lable}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        id={props.name}
        name={props.name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
