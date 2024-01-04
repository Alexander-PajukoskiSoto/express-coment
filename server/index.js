const path = require('path');
const express = require("express");
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const multer = require('multer');

const prisma = new PrismaClient();

const PORT = process.env.PORT || 3001;

const app = express();

const day = 1000 * 60 * 60 * 24;

app.use(session({
  secret: 'some secret',
  cookie: {maxAge: day},
  saveUninitialized: false,
  resave: false
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname,'../client/build')));

app.get("/api", async(req, res) => {
  const posts = await prisma.Post.findMany()
  res.json(posts)
});
app.post('/login',async(req,res)=>{

  const user = await prisma.User.findFirst({
    where: {
      OR:[{
        name: req.body.username},
      ]

  }})
    if(req.body.username == '')
    {
      res.redirect('/')
    }else if(req.body.password ==  user.password ){
      console.log('successfully logged in')
      req.session.authenticated = true;
      res.redirect('/')
      console.log(req.session)
    }
    else{
      res.redirect('/')
    }
})

app.post('/comment', async(req, res)=>{
  console.log(req.body.content);
  res.redirect('/')
})
app.post('/createUser', async(req, res)=>{
  try {
    const user = await prisma.User.create({
      data: {
        name: req.body.createUsername,
        email: req.body.email,
        password: req.body.createPassword
      }
    })
    console.log('created user')
    res.redirect('/posts')
    } catch (error) {
      console.log(error);
    }
    
  })
app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'../client/build', 'index.html'));
})
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

