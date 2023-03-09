const db = require("../models");
const config = require("../config/auth.config");
const kitchenAssignment = db.KitchenAssignment;

const Op = db.Sequelize.Op;
//const { default: kitchenAssignment } = require("../../vue-vuex-jwt-auth-master/src/models/kitchenAssignment");

exports.saveAssignment = async (req, res) => {
    try {
        const KitchenAssignment = await KitchenAssignment.create({
        kAName: req.body.kAName, 
        startTime: req.body.startTime, 
        endTime: req.body.endTime, 
        minRoleRequired: req.body.minRoleRequired
     });
        
    } catch (error) {
        res.status(500).send({ message: error.message });
      }

}

