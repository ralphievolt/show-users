import { Accounts } from "meteor/accounts-base";

Accounts.onCreateUser((options, user) => {
  user.name = options.name;
  user.email = options.email;
  user.phone = options.phone;
  user.apartment = options.apartment;
  return user;
});
