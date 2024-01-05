import React from 'react';
import { useState, useEffect } from 'react';
const images = require.context('../images', true);
const imageList = images.keys().map(image => images(image));

function ImageGallery({picCount,countDown,countUp}) {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      // .then((data)=> data.forEach((element) => {
      //   setData(data.title += element.title)
      // }))
      .then((data) => setData(data))
  }, []);
  let showing = 0;
  return (
    <div>
      <div className='counterBTNs'>
      <div className="countDownBTN" onClick={countDown}>Previous Image</div>

        <div className="countUpBTN" onClick={countUp}>Next Image</div>
      </div>
      <div id='imageDiv'>
        {imageList.map((image, index) => (
          <img 
          key={index} 
          src={imageList[index]} 
          className={`images image${index+1} ${(index+1) === picCount ? 'shown':'hidden' }`} 
          alt={`image-${index+1}`} />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;