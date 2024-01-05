import React from 'react';

const images = require.context('../images', true);
const imageList = images.keys().map(image => images(image));

function ImageGallery() {
  return (
    <div id='imageDiv'>
      {imageList.map((image, index) => (
        <img key={index} src={imageList[index]} className='images' alt={`image-${index}`} />
      ))}
    </div>
  );
}

export default ImageGallery;