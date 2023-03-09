module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employees", {
      employeeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      employeeBrigadeTitle: {
        type: Sequelize.STRING
      },
      minHours: {
        type: Sequelize.INTEGER
      },
      maxHours: {
        type: Sequelize.INTEGER
      }
    });
    return Employee;
  };