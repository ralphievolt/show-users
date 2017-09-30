import React from "react";
import { mount } from "react-mounter";
import { FlowRouter } from "meteor/kadira:flow-router";
import { Meteor } from "meteor/meteor";

import { Layout, Login, Registration, ShowUsers } from "/imports/";

FlowRouter.route("/login", {
  action() {
    mount(Layout, {
      content: <Login />
    });
  }
});

FlowRouter.route("/registration", {
  action() {
    mount(Layout, {
      content: <Registration />
    });
  }
});

FlowRouter.route("/", {
  triggersEnter: [ifUserIsLogin],
  action() {
    mount(Layout, {
      content: <ShowUsers />
    });
  }
});

function ifUserIsLogin(context, redirect) {
  if (!(Meteor.loggingIn() || Meteor.userId())) redirect("/login");
}
