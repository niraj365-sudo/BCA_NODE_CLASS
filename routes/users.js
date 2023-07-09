var express = require('express');
var router = express.Router();
const {User} = require("../model");
const schemaValidation = require('../middleware/validation-middleware');
const { registrationSchema } = require('../schemas/auth-schemas');

const user = {username: "niraj", password:"password"}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', (req, res)=>{
  res.render('register',{title: 'register'})
})

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login',...req.query });
});

router.post('/register',schemaValidation(registrationSchema,"register"), async (req, res)=>{
  console.log(req.body);
  const{uname, email, password}=req.body
  await User.create(req.body)
  res.redirect("/users/login")
})

router.post('/login', async(req, res, next)=>{
  console.log(req.body);
  const {uname, psw} = req.body;
//const project = await Project.findOne({ where: { title: 'My Title' } });

  const existingUser = await User.findOne({where:{email:uname}});
  if(!existingUser)
      res.render('login',{errorMsg:"Username Password Doesn't Match"})
  if(existingUser.email === uname & existingUser.password === psw ){
    req.session.regenerate((error)=>{
      if(error) next(error)
      req.session.user = existingUser.email;
      req.session.userId = existingUser.id;
      
      req.session.save((error)=>{
        if(error) next(error)
        res.redirect('/users/home')
      })
    }
    )
  }else{
    res.render('login',{errorMsg:"Username Password Doesn't Match;"})
  }
})

router.get('/home', (req, res, next)=>{
  res.render("home", {username: req.session.user})
})

module.exports = router;
