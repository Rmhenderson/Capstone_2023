const env = process.env.DB_ENV || "dev";
const config = require("../config/db.config.js")[env];

const { INTEGER } = require("sequelize");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    dialectOptions: config.dialectOptions,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.user_roles = require("./user_roles.js")(sequelize, Sequelize);
db.kitchenAssignment = require("./kitchenAssignment.model.js")(sequelize, Sequelize);
db.shiftAssignment = require("./shiftAssignment.model.js")(sequelize, Sequelize);
db.employee = require ("./employee.model.js")(sequelize, Sequelize);
db.unavailable = require ("./unavailableTime.model.js")(sequelize, Sequelize);
db.shift = require("./shift.model.js")(sequelize, Sequelize);

// roles 

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

// employees & unavailable times 

db.employee.hasMany(db.unavailable, { foreignKey: 'employeeId' });
db.unavailable.belongsTo(db.employee, { foreignKey: 'employeeId'});

// shift + kitchen assignments 

db.shiftAssignment.hasOne(db.kitchenAssignment, {
  foreignKey: {
    name: 'id',
    allowNull: false
  }
});
db.kitchenAssignment.hasOne(db.shiftAssignment, {
  foreignKey: {
    name: 'kitchenAssignmentId',
    allowNull: false,
    onDelete: 'CASCADE'
  }
});

// shifts + shift assignments 

db.shift.hasMany(db.shiftAssignment, { 
  foreignKey: 'id'
});
db.shiftAssignment.belongsTo(db.shift);

// user to employee pipeline 

db.employee.belongsTo(db.user, {
  foreignKey:'userId'
});
db.user.hasOne(db.employee, {
  foreignKey: 'userId'
});

db.ROLES = ["user", "root", "admin", "employee", "assistant"];

module.exports = db;
