module.exports = (sequelize, Sequelize) => {
    const KitchenAssignment = sequelize.define("kitchenAssignments", 
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      kAName: {
        type: Sequelize.STRING  
      },
      startTime: {
        type: Sequelize.TIME
      },
      endTime: {
        type: Sequelize.TIME
      },
      minRoleRequired: {
        //type: Sequelize.ENUM("Kitchen Leader", "Sous Chef", "Line Cook", "Junior Cook", "Dishwasher")
        type: Sequelize.STRING
      }
    });
    return KitchenAssignment;
  };
  