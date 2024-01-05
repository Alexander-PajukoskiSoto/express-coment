import React, { useState, useEffect } from 'react';
import './App.css';
import './Style.js';
import ImageGallery from './components/ImageGallery.js';
import Login from './components/LoginComponent.js';
import CreateUser from './components/CreateUserComponent.js';
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
  return (
    <div className="App">
        <div>
          {data.map((element, index) => (
          <span key={index}>{element.title}</span>
        ))}
        </div>
        <ImageGallery/>
        <CreateUser />
        <Login />
        <form method='post' action='/comment'>
            <textarea id='content' name='content'>
            </textarea>
            <input type='number' min={1} max={data.length} defaultValue={1}></input>
            <input type='submit' value='Comment'/>
        </form>
    </div>
  );
}
export default App;