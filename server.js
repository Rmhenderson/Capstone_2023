require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const path = __dirname + '/app/views/';


const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();


app.use(cors());
app.use(express.static(path));

// parse requests of content-type - application/json
app.use(express.json()); // might need to exit this out we'll see

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "cappy-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
);

// database
const db = require("./app/models");
const Role = db.role;
const User = db.user;
const User_Roles = db.user_roles;

db.sequelize.sync();

//force: true will drop the table if it already exists

/*db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Database with { force: true }');
  initial();
});*/

app.get('/', function (req, res) {
  res.sendFile(path + "index.html");
});


// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/kitchenAssignment.routes")(app);
require("./app/routes/displayAssignments.routes")(app);
require("./app/routes/shiftAssignment.route")(app);
require("./app/routes/acceptanceQueue.routes")(app);
require("./app/routes/employeeProfile.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); // test git ignore
// user mod & root are the default role levels
/// root = root 
/// root =
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "admin",
  });

  Role.create({
    id: 3,
    name: "root",
  });

  Role.create({
    id: 4,
    name: "employee"
  }); 

  Role.create({
    id: 5,
    name: "assistant"
  });

  User.findOne({ where: { username: 'Root'} })
  .then((rootUser) => {
    if (!rootUser) {
      User.create({
        username: 'Root',
        email: 'caeleshub@gmail.com',
        password: bcrypt.hashSync('password', 10),
        requestedUserType: 'Root',
        accepted: true
      });
      User_Roles.create({
        userId: 1, 
        roleId: 3
      })
    };
  });
}
