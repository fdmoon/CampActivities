import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    userName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.userName` and `this.state.password`, clearing the inputs
    alert(`Hello ${this.state.userName} ${this.state.password}`);
    this.setState({
      userName: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.userName} {this.state.password}
        </p>
        <form className="form">
          <input
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="User Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
