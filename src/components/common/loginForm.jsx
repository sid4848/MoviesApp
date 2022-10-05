import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  state = {
    account: { username: "  ", password: " " },
    errors: {},
  };

  // handleChange = (e) => {
  //   const account = { ...this.state.account };
  //   account[e.currentTarget.name] = e.currentTarget.value;
  //   this.setState({ account: account });
  // };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account: account });
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "")
      return (errors.username = "Username is required.");

    if (account.password.trim() === "")
      return (errors.password = "Password is required.");

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const error = this.validate();
    this.setState({ errors: error });
    console.log(error);
    if (error) return;

    //call the server
    console.log("submitted");
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            lable="Username"
            onChange={this.handleChange}
          ></Input>
          <Input
            name="password"
            value={account.password}
            lable="Password"
            onChange={this.handleChange}
          ></Input>
          <button className="btn btn-primary m-2">login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
