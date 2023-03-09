const bodyParser = require ('body-parser');
const { Router } = require('express');
const { shift } = require('../models');
const db = require("../models");
const shiftAssignment = db.shiftAssignment; 
const kitchenAssignment = db.kitchenAssignment; 

module.exports = function(app) {
   
    //add new 

    app.use(bodyParser.json()); 
    app.post('/api/addShiftAssignment', (req, res) => {
        shiftAssignment.create(req.body).then(shiftAssignment =>{ 
            res.json(shiftAssignment);
        })
    });

    // display 

    app.get('/api/sAssignmentList', async (req, res) => {
        shiftAssignment.findAll().then(shiftAssignment => {
            res.send(shiftAssignment);
    })
});

    // delete

    app.delete('/api/deleteSAssignment/:id', async (req, res) => {
        const {id} = req.params; 
        await shiftAssignment.destroy({where: { id } });
        res.send({ success: true });
    });
}
