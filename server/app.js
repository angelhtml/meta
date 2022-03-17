const express = require('express');
const DB = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const MongoDBStore = require('express-mongodb-session')(session);
const passport = require('passport');
const local_Strategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const mjml2html = require('mjml');
const cookieParser = require('cookie-parser')
const yup = require('yup');
const { default: next } = require('next');
const e = require('express');
//-----------------------------------
const app = express();
//-----------------------------------

const Schema = DB.Schema;

const URII = "mongodb://localhost:27017/meta"

DB.connect(URII).then(con => {
  console.log('yes🆗');
  console.log('db connected');
});




//-------------------------------------
app.use(cors())
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static('public'));

const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/connect_mongodb_session_test',
  collection: 'mySessions'
});
app.use(require('express-session')({
  secret: 'ahmad',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  resave: true,
  saveUninitialized: true
}));

app.use(cookieParser("ahmad"));
//-----------------------------------

const Users_schema = new Schema({
  Name: String,
  Image: String,
  Email: String,
  Password: String,
  Active: Boolean,
});
const Users = DB.model('Users', Users_schema);
//------------------------------
app.use(passport.initialize());
app.use(passport.session());


passport.use(
  new local_Strategy((username, password, done) => {

    User.findOne({
      Email: username
    }, (err, user) => {

      if (err) throw err;
      if (!user) return done(null, false);

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  User.findOne({
    _id: id
  }, (err, user) => {
    const userInformation = {
      username: user.username,
    };
    cb(err, userInformation);
  });
});
//----------------------------------------------------------------
const transporter = nodemailer.createTransport({
 
  
    host: 'smtp.mail.yahoo.com',
    port: 465,
    auth: { 
        user: 'angel.kh@yahoo.com', 
        pass: 'mdecdxooskjsayln' },
    secure: true
   

});



//------------------------------------------------------------------

const UserSchema = yup.object().shape({
  Username: yup.string().required('Username is required'),
  Email: yup.string().required('Username is required'),
  Password: yup.string().required('Username is required'),
  Passwordcomf: yup.string().required('Username is required').oneOf([yup.ref('Password')], 'Passwords does not match'),
});

const ActiveemailSchema = yup.object().shape({
  Email: yup.string().required('Username is required'),
});


const loginSchema = yup.object().shape({
  Email: yup.string().required('Username is required'),
  Password: yup.string().required('Username is required'),
});

const passwordcomf = yup.object().shape({
  Password: yup.string().required('Username is required'),
  Passwordcomf: yup.string().required('Username is required').oneOf([yup.ref('Password')], 'Passwords does not match'),
});


//---------------------------------------------------------------------

const signuplocal = async (req, res, next) => {




try {
  
    await UserSchema.validate({

    Username: req.body.Username,
    Email: req.body.Email,
    Password: req.body.Password,
    Passwordcomf: req.body.Password,
  })




  const hashedPassword = await bcrypt.hash(req.body.Password, 11);

  const token = await jwt.sign({
    Email: req.body.Email
  }, "ahmad", {
    expiresIn: 6000
  });

  const link = await `http://localhost:5000/Emailverification/${token}`;


  const newUser = new Users({
    Name: req.body.Username,
    Password: hashedPassword,
    Email: req.body.Email,
    Active: false
  });

  const options = {}

  const htmlOutput = await mjml2html(`
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>
          ${link}
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`, options)



    await transporter.sendMail({
    from: 'angel.kh@yahoo.com', 
    to: req.body.Email, 
    subject: "Email verification", 
    html: htmlOutput.html, 
  });


  await newUser.save();

  res.send("User Created");


} catch (error) {
  
  console.log(error)

res.send("500")

}

}
//-----------------------------------------------------------------

const EmailActive = async (req, res, next) => {

try {

  const {
  token
  } = req.params;


  const decodedEmail = await jwt.verify(token, 'ahmad');

await ActiveemailSchema.validate({

  Email:decodedEmail.Email

})


const user = await Users.findOneAndUpdate({Email:decodedEmail.Email},{Active:true})

if (user === null) {
  res.send("Email not exist")
} else {
  res.send("Active")
}
  

} catch (error) {
  
  console.log(error)

res.send("500")

}
}
//----------------------------------------------------------------


const loginlocal = async (req, res, next) => {

 try {
  loginSchema.validate({
    Email: req.body.Email,
    Password: req.body.Password,
  })


    passport.authenticate("local", (err, user, info) => {

      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
  
          res.send("Successfully Authenticated");
        });
      }
    })(req, res, next);




} catch (error) {
  
    console.log(error)
  
  res.send("500")
  
  }
  }
//----------------------------------------------------------------

const forgetpasswordrequest = async (req, res, next) => {

  try {

    await ActiveemailSchema.validate({

      Email:req.body.Email
    
    })


    const user = await Users.findOneAndUpdate({Email:req.body.Email})



    const tokenemail = await jwt.sign({
      Email: user.Email
    }, "ahmad", {
      expiresIn: 60000
    });


    const tokenpass = await jwt.sign({
      Password: user.Password
    }, "ahmad", {
      expiresIn: 60000
    });
  
    const link = await `http://localhost:5000/forgetpassword/${tokenemail}/${tokenpass}`;

    const options = {}

    const htmlOutput = await mjml2html(`
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
          <mj-form action="">

        </mj-form> 
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `, options)
  
  
  console.log(htmlOutput)
  
      await transporter.sendMail({
      from: 'angel.kh@yahoo.com', 
      to: req.body.Email, 
      subject: "Forgat password", 
      html: `         <form method="POST" action="${link}">
      <label for="Password">Password:</label><br>
      <input type="text" id="Password" name="Password" value="John"><br>
      <label for="comfairmpassword">Password comfairm:</label><br>
      <input type="text" id="comfairmpassword" name="comfairmpassword" value="Doe"><br><br>
      <input type="submit" value="Submit">
    </form>`, 
    });

    res.send("Password request sent")


  } catch (error) {
  
    console.log(error)
  
  res.send("500")
  
  }
  }
//----------------------------------------------------------------

const forgetpassword = async (req, res, next) => {

  try {

      const {
      tokenemail,
      tokenpass
      } = req.params;
    
    


      await passwordcomf.validate({
        Password: req.body.Password,
        Passwordcomf:  req.body.comfairmpassword,
      })





      const decodedEmail = await jwt.verify(tokenemail, 'ahmad');
      const decodedpass = await jwt.verify(tokenpass, 'ahmad');

      await  loginSchema.validate({
        Email: decodedEmail.Email,
        Password: decodedpass.Password,
      })


    const hashedPassword = await bcrypt.hash(req.body.Password, 11);



    const user = await Users.findOneAndUpdate({Email:decodedEmail.Email , Password:decodedpass.Password},{Password: hashedPassword})




    if (user === null) {
      res.send("Email not exist")
    } else {
      res.send("Active")
    }


  } catch (error) {
  
    console.log(error)
  
  res.send("500")
  
  }
  }
//---------------------------------------------------------------


//----------------------------------------------------------------


app.post("/singuplocal",signuplocal)

app.post("/Loginlocal",loginlocal)

app.get('/Emailverification/:token',EmailActive )

app.post("/forgetpasswordrequest",forgetpasswordrequest)

app.post("/forgetpassword/:tokenemail/:tokenpass",forgetpassword)


//-----------------------------------------------------------------


app.listen(5000, () => {
  console.log("Server Has Started");
});


