module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    requestedUserType: {
      type: Sequelize.STRING
    },
    accepted: {
      type: Sequelize.BOOLEAN,
      defaultValue: '0'
    }
  });
  return User;
};
