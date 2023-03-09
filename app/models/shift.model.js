module.exports = (sequelize, Sequelize) => {
    const Shift = sequelize.define("shifts", {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      day: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      amOrPm: {
        type: Sequelize.STRING
      }
    });
    return Shift;
  };
  