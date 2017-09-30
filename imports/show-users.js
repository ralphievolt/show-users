import React, { Component } from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import { withAllUsers } from "/imports/container";

@withAllUsers
export class ShowUsers extends Component {
  _handlLogout = () => {
    Meteor.logout();
    FlowRouter.go("/login");
  };
  render() {
    if (this.props.isLoading) return <span>loading..</span>;

    return (
      <div>
        Currrent user = {this.props.currentUser}
        <p />
        <button type="button" onClick={this._handlLogout}>
          logout
        </button>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone #</th>
            <th>Apartment #</th>
          </tr>
          {this.props.allUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.apartment}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
