import React from 'react';
import { useState, useEffect } from 'react';
import DataComponent from './DataComponent';
const images = require.context('../images', true);
const imageList = images.keys().map(image => images(image));

function ImageGallery() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      // .then((data)=> data.forEach((element) => {
      //   setData(data.title += element.title)
      // }))
      .then((data) => setData(data))
  }, []);
  console.log(data) ;
  return (
    <div id='imageDiv'>
      {imageList.map((image, index) => (
        <img key={index} src={imageList[index]} className={`images image${index+1}`} alt={`image-${index}`} />
      ))}
    </div>
  );
}

export default ImageGallery;