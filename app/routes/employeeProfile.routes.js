const bodyParser = require ('body-parser');
const db = require("../models");
const UnavailableTime = db.unavailable;
const Employee = db.employee; 

// find employee Id

module.exports = function(app) {
    app.use(bodyParser.json()); 

    app.get('/api/getEmployeeId/:id', async (req, res) => {
        const {id} = req.params;
            const employee = await Employee.findOne({ 
            where: {userId: id}
    });
        res.json({employee});
});

// add unavailable time

    app.post('/api/addNewTime', async (req, res) => { 
        UnavailableTime.create(req.body).then(unavailable =>{
            res.json(unavailable);
        })
});

// view unavailable times

    app.get('/api/getUnavailableTime:id', async (req, res) => {
        const {employeeId} = req.params; 
        UnavailableTime.findAll({where: { employeeId: employeeId }}).then(unavailable => {
            res.json(unavailable);
        });
    });


// delete 

    app.delete('/api/deleteSAssignment/:id', async (req, res) => {
        const {id} = req.params; 
        await shiftAssignment.destroy({where: { id } });
            res.send({ success: true });
    });

}

