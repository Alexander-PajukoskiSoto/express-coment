import React, { useState, useEffect } from 'react';
import './App.css';
import './Style.js';
import ImageGallery from './ImageGallery';
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
        <form method='post' action='/createUser'>
            <input type='text' id='createUsername' name='createUsername' placeholder='Username'>
            </input>
            <input type='text' id='email' name='email' placeholder='email'>
            </input>
            <input type='password' id='createPassword' name='createPassword' placeholder='password'>
            </input>
            <input type='submit' value='Create user'/>
        </form>
        <form method='post' action='/login'>
            <input type='text' id='username' name='username' placeholder='Username'>
            </input>
            <input type='password' id='password' name='password' placeholder='password'>
            </input>
            <input type='submit' value='Login'/>
        </form>
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