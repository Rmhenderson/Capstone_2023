module.exports = (sequelize, Sequelize) => {
    const ShiftAssignment = sequelize.define("shiftAssignments", 
    {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      neededEmployees: {
        type: Sequelize.INTEGER
      }
    });
    return ShiftAssignment;
  };
  