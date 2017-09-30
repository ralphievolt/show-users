import React, { Component } from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import { Accounts } from "meteor/accounts-base";

export class Login extends Component {
  _handleSignIn = () => {
    const uname = document.getElementById("username").value;
    const pwd = document.getElementById("pwd").value;

    Meteor.loginWithPassword(uname, pwd, err => {
      if (err) {
        alert(err.message);
        return;
      }
      if (Meteor.user()) {
        FlowRouter.go("/");
      }
    });
  };
  _handlRegister = () => {
    FlowRouter.go("/registration");
  };
  render() {
    return (
      <form className="login">
        username:{" "}
        <input id="username" type="text" placeholder="enter username" />
        <p />
        password: {" "}
        <input id="pwd" type="password" placeholder="enter password" />
        <p />
        <button type="button" onClick={this._handleSignIn}>
          Sign-in
        </button>
        <button type="button" onClick={this._handlRegister}>
          Register
        </button>
      </form>
    );
  }
}
