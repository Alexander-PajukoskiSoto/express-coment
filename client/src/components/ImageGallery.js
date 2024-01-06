import React from 'react';
import { useState, useEffect } from 'react';
const images = require.context('../images', true);
const imageList = images.keys().map(image => images(image));

function ImageGallery({picCount,countDown,countUp,data}) {

  let showing = 0;
  return (
    <div>
      {data.map((element, index) => (
          <h1 key={index} className={`${(index+1)===picCount?'shown':'hidden'}`}>{element.title}</h1>
        ))}
        {data.map((element, index) => (
          <h1 key={index} className={`${(index+1)===picCount?'shown':'hidden'}`}>{element.title}</h1>
        ))}
      <div id='imageDiv'>
      <div className="countDownBTN" onClick={countDown}>Previous Image</div>
        {imageList.map((image, index) => (
          <img 
          key={index} 
          src={imageList[index]} 
          className={`images image${index+1} ${(index+1) === picCount ? 'shown':'hidden' }`} 
          alt={`image-${index+1}`} />
        ))}
        <div className="countUpBTN" onClick={countUp}>Next Image</div>

      </div>
    </div>
  );
}

export default ImageGallery;