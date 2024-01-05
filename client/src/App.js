import React, { useState, useEffect } from 'react';
import './App.css';
import './Style.js';
import ImageGallery from './components/ImageGallery.js';
import Login from './components/LoginComponent.js';
import CreateUser from './components/CreateUserComponent.js';
import CommentComponent from './components/CommentComponent.js';
function App() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      // .then((data)=> data.forEach((element) => {
      //   setData(data.title += element.title)
      // }))
      .then((data) => setData(data))
  }, []);
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
        <div>
          {data.map((element, index) => (
          <span key={index}>{element.title}</span>
        ))}
        </div>
        <ImageGallery picCount={picCount} data = {data} countDown={countDown} countUp={countUp}  />
        <CreateUser />
        <Login />
        <CommentComponent picCount={picCount} countDown={countDown} countUp={countUp} />
    </div>
  );
}
export default App;