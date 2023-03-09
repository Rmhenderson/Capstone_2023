module.exports = (sequelize, Sequelize) => {
    const UnavailableTime = sequelize.define("unavailableTime", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      weekDay: {
        type: Sequelize.STRING  
      },
      startTime: {
        type: Sequelize.TIME
      },
      endTime: {
        type: Sequelize.TIME
      },
      reason: {
        type: Sequelize.STRING
      }
    });
    return UnavailableTime;
  };
  