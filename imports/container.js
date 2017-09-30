import { Meteor } from "meteor/meteor";
import { withData } from "meteor/orionsoft:react-meteor-data";

export const withAllUsers = withData(() => {
  const handler = Meteor.subscribe("allUsers");
  const isLoading = !handler.ready();
  const allUsers = Meteor.users.find().fetch();
  return { isLoading, allUsers };
});
