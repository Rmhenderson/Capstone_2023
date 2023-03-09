const bodyParser = require ('body-parser');
const db = require("../models");
const kitchenAssignment = db.kitchenAssignment; 

// display 
module.exports = function(app) {
    app.use(bodyParser.json()); 
    app.get('/api/assignmentList', async (req, res) => {
        kitchenAssignment.findAll().then(kitchenAssignments => {
            res.send(kitchenAssignments);
        })
    });

//id 
    app.get('/api/assignmentList/:id', async (req, res) => {
        kitchenAssignment.findByPk(req.params.id)
        .then(kitchenAssignment =>{
            res.json(kitchenAssignment)
        })
    });

//delete
    app.delete('/api/deleteAssignment/:id', async (req, res) => {
        const {id} = req.params; 
        await kitchenAssignment.destroy({where: { id } });
        res.send({ success: true });
    });
}