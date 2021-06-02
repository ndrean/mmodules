const user = require("./person");
const { getLocation, zip } = require("./location");
console.log(user.getName(), user.dateOfBirth);
console.log(getLocation(), zip);
