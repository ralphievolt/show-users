import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  import "/imports/publication";
  import "/imports/create-user";
});
