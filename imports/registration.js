import React, { Component } from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import { Accounts } from "meteor/accounts-base";

export class Registration extends Component {
  _handlRegister = () => {
    const userInfo = {
      username: document.getElementById("username").value,
      password: document.getElementById("pwd").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      apartment: document.getElementById("apartment").value
    };

    Accounts.createUser(userInfo, function(err) {
      if (err) {
        alert(err.message);
        return;
      }
      FlowRouter.go("/login");
    });
  };

  render() {
    return (
      <form className="login">
        Username: <input id="username" type="text" placeholder="enter name" />
        <p />
        Password:{" "}
        <input id="pwd" type="password" placeholder="enter password" />
        <p />
        <h4>User Profile</h4>
        Name: <input id="name" type="text" placeholder="enter name" />
        <p />
        Email: <input id="email" type="text" placeholder="enter email" />
        <p />
        Phone #: {" "}
        <input id="phone" type="text" placeholder="enter phone number" />
        <p />
        Apartment #: {" "}
        <input
          id="apartment"
          type="text"
          placeholder="enter apartment number"
        />
        <p />
        <button type="button" onClick={this._handlRegister}>
          Register
        </button>
      </form>
    );
  }
}
