const bodyParser = require ('body-parser');
const db = require("../models");
const kitchenAssignment = db.kitchenAssignment; 

//kitchenAssignments aka createAssignments 

module.exports = function(app) {
app.use(bodyParser.json()); 
app.post('/api/kitchenAssignments', (req, res) => {
  kitchenAssignment.create(req.body).then(kitchenAssignment => {
    res.json(kitchenAssignment);
  });
});
}
