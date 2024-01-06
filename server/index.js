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
app.get("/userApi", async(req, res) => {
  const users = await prisma.User.findMany()
  res.json(users)
});
app.get("/commentApi", async(req, res) => {
  const comments = await prisma.Comment.findMany()
  res.json(comments)
});
app.get("/sessionApi", async(req, res) => {
  const session = req.session
  res.json(session)
});
app.post('/login',async(req,res)=>{

  const user = await prisma.User.findFirst({
    where: {
      OR:[
        {name: req.body.username},
      ]

  }})
  if(req.body.password ==  user.password ){
      console.log('successfully logged in')
      req.session.authenticated = true;
      req.session.userId=user.id;
      req.session.user = user.name;
      res.redirect('/')
      console.log(req.session)
    }
    else{
      res.redirect('/')
    }
})

app.post('/comment', async(req, res)=>{
  console.log(req.body);
  const comment = await prisma.Comment.create({
    data:{
      content: req.body.content,
      postId: Number(req.body.postId),
      author: req.session.user,
      authorId: req.session.userId
    }
  })
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

