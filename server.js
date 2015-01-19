
var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



// POST /saveNewUser
app.post('/saveNewUser', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  //send back the new user
    console.log("here is what you send:",req.body);
  res.send('Responsed Saved User From Server:', req.body);
    
    //set up NodeEmailer to send email-----
    var mailOpts, smtpTrans;
    
    //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
      smtpTrans = nodemailer.createTransport('SMTP', {
          service: 'Gmail',
          auth: {
              user: "webformServer@gmail.com",
              pass: "webformServer2014" 
          }
      });
        console.log('SMTP Configured');
    
      //Mail options
      mailOpts = {
          from: req.body.firstname + ' &lt;' + req.body.email + '&gt;', //grab form data from the request body object
          to: 'thong_tech@yahoo.com',
          subject: 'Webform contact email',
          text: "Hello to Receiver",
          html: "<h1>New User Contact Information</h1>"+
                "<ul><li>FirstName: "+req.body.firstname+"</li>"+
                     "<li>LastName: "+req.body.lastname+"</li>"+
                     "<li>Phone: "+req.body.phone+"</li>"+
                     "<li>email: "+req.body.email+"</li>"+
                     "<li>Gender: "+req.body.gender+"</li>"+
                     "<li>Birthday: "+req.body.birthday+"</li>"+
                     "<li>Location: "+req.body.location+"</li>"+
                "</ul>"
      };
    
      smtpTrans.sendMail(mailOpts, function (error, info) {
          //Email not sent
          if (error) {
              console.log("Error occurred");
              console.log(error.message);
          }
          //Yay!! Email sent
          else {
             console.log("Message sent successfully");
          }
      });
});


app.listen(3000);
console.log("server are running at 3000");