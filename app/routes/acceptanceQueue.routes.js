const bodyParser = require ('body-parser');
const db = require("../models");
const User = db.user;
const User_Roles = db.user_roles;
const Employee = db.employee; 
const Role = db.role;
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({ 
    service: 'Gmail',
    auth: {
        user: 'caeleshub@gmail.com',
        pass: 'uwiqdvxqwcgerjlo'
    }
});

// display users & employees & roles

module.exports = function(app) {
    app.use(bodyParser.json()); 
    app.get('/api/userList', async (req, res) => {
        User.findAll().then(users => {
            res.json(users);
  });
});
    app.get('/api/unacceptedList', async (req, res) => {
        User.findAll({where: { accepted: false }}).then(users => {
            res.json(users);
    });
});

    app.get('/api/employeeList', async (req, res) => {
        Employee.findAll().then(employees => {
            res.json(employees);
    });
});

    app.get('/api/roleList', async (req, res) => {
        Role.findAll().then(roles => {
            res.json(roles);
    });
});
// update boolean value (accept or deny) & send confirmation/denial email 

   app.post('/api/userAccept/:id', async (req, res) => {
    const {id} = req.params; 
        const user = await User.findOne({ where: {id} });
        await User.update({ accepted: true }, {where: {id} });
        acceptedEmail(user);
        res.send({ success: true });
   });

   app.post('/api/userDeny/:id', async (req, res) => {
    const {id} = req.params; 
        await User.destroy({where: { id } });
        deniedEmail(user);
        res.send({ success: true });
   });

// send confirmation email !!!

 const acceptedEmail = (user) => {
       let mailOptions = {
        from: 'caeleshub@gmail.com',
        to: user.email,
        subject: `Back of House: Account confirmed.`,
        text: 'Your account has been confirmed; you can now login.'
       }
       transporter.sendMail(mailOptions, function(error, info) {
        if(error){
            console.log(error);
        } else {
            console.log(info, 'Email sent!');
        }
    });
   };

// send rejection email !!!

const deniedEmail = (user) => {
    let mailOptions = {
     from: 'caeleshub@gmail.com',
     to: user.email,
     subject: `Back of House: Account request rejected.`,
     text: 'Your account has been rejected. Reasons uncertain. Submit another request, and wait.'
    }
    transporter.sendMail(mailOptions, function(error, info) {
     if(error){
         console.log(error);
     } else {
         console.log(info, 'Email sent!');
     }
 });
};

// change user role 

app.post('/api/updateRoleId', async (req, res) => {
    const {selectedRoleId}  = req.body;
    const {userId}  = req.body;
    await User_Roles.update( 
        {roleId: selectedRoleId},
        {where: {userId}}
    )
});

// add user to employee 

    app.post('/api/createEmployee', async (req, res) => {
        Employee.create(req.body).then(employee =>{ 
            res.json(employee);
        });
    });

    // grab roles 
    app.get('/api/roles', async (req, res) => {
        Role.findAll().then(roles => {
            res.json(roles);
        })
    })
   
}


