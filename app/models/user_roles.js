module.exports = (sequelize, Sequelize) => {
    const User_Roles = sequelize.define("user_roles", {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      roleId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
    return User_Roles;
  };
  