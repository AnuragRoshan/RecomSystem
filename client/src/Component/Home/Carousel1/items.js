import React from 'react';
const handleDragStart = (e) => e.preventDefault();
const  imag = [
   <img src="https://cdn.wallpapersafari.com/69/85/TW7oM9.jpg" 
    onDragStart={handleDragStart} role="presentation"
     width="100%" height="648" 
      alt='hello'
      background-blend-mode=" luminosity"
      name="fifa"
      />
      ,
    <img src="https://images7.alphacoders.com/111/1117602.jpg" onDragStart={handleDragStart} role="presentation" width="100%" height="648"  alt='hello'
    name="fifas"
    />,
    <img src="https://cdn.99images.com/photos/wallpapers/games/4k-gta-5%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-lnvjs.jpg" alt='hello' onDragStart={handleDragStart} role="presentation" width="100%" height="648" 
    name="fifad"
    />,
  ]
  export default imag;