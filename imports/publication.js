Meteor.publish("allUsers", function() {
  const data = Meteor.users.find({});
  if (data) return data;
  return this.ready();
});
