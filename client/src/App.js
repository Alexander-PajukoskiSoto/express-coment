import React, { useState, useEffect } from 'react';
import './App.css';
import './Style.js';
import ImageGallery from './components/ImageGallery.js';
import Login from './components/LoginComponent.js';
import CreateUser from './components/CreateUserComponent.js';
import CommentComponent from './components/CommentComponent.js';
import ShowComments from './components/ShowComments.js';
function App() {
  const [data, setData] = React.useState([]);//Posts (too far in to rename)
  const [userData, setUserData] = React.useState([]);
  const [commentData, setCommentData] = React.useState([]);
  const [sessionData, setSessionData] = React.useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, []);

  useEffect(() => {
    fetch("/userApi")
      .then((res) => res.json())
      .then((userData) => setUserData(userData))
  }, []);

  useEffect(() => {
    fetch("/commentApi")
      .then((res) => res.json())
      .then((commentData) => setCommentData(commentData))
  }, []);
  useEffect(() => {
    fetch("/sessionApi")
      .then((res) => res.json())
      .then((sessionData) => setSessionData(sessionData))
  }, []);
console.log(userData,commentData,data, sessionData)

  const [picCount, setPicCount] = useState(1);
  function countDown() {
      if(picCount > 1){
          setPicCount(picCount-1)
      }
      else {
          setPicCount(data.length)
      }
  }
  function countUp () {
      if(picCount < data.length){
          setPicCount(picCount+1)
      }
      else{
          setPicCount(1)
      }
  }
  return (
    <div className="App">
        <ImageGallery picCount={picCount} data = {data} countDown={countDown} countUp={countUp} commentData={commentData} />
        <ShowComments commentData={commentData} userData={userData} picCount={picCount}/>
        <CreateUser sessionData={sessionData}/>
        <Login sessionData={sessionData}/>
        <CommentComponent picCount={picCount} />
    </div>
  );
}
export default App;