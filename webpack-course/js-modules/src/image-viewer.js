import '../styles/image-viewer.css';

const renderImage = () => {
  const image = document.createElement('img');
  
  image.src = 'http://lorempixel.com/400/400';
  
  document.body.appendChild(image);
};

export default renderImage;