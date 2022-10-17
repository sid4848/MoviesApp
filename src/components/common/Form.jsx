import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./Select";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validateProperty = (input) => {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
    // if (input.name === "username")
    //   if (input.value.trim() === "") return "Username is required";
    // if (input.name === "password")
    //   if (input.value.trim() === "") return "Password is required";
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    console.log(result);

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const error = this.validate();
    this.setState({ errors: error || {} });
    // console.log(error);
    if (error) return;

    this.doSubmit();
  };

  // handleChange = (e) => {
  //   const data = { ...this.state.data };
  //   data[e.currentTarget.name] = e.currentTarget.value;
  //   this.setState({ data: data });
  // };

  handleChange = ({ currentTarget: input }) => {
    const errors = this.state.errors;
    const errorMesssage = this.validateProperty(input);
    if (errorMesssage) errors[input.name] = errorMesssage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data: data });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary m-2">
        {label}
      </button>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, lable, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        lable={lable}
        onChange={this.handleChange}
        error={errors[name]}
      ></Input>
    );
  }
}

export default Form;
