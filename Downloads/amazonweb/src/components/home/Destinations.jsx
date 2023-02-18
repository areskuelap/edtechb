import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

const Destinations = () => {
  const images = [
    {
      original: 'https://www.peru.travel/Contenido/General/Imagen/es/396/1.1/kuelap-fortaleza.jpg',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://weatravelperu.com/wp-content/uploads/2021/03/CHACHAPOYAS02-min.jpg',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://mediaim.expedia.com/destination/2/32a336353329d8651e92339ca6324994.jpg',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (

    <div className='pb-10 sm:py-10 z-0'>
        <ImageGallery showFullscreenButton={false} showBullets={true} showPlayButton={false} showThumbnails={false} showNav={false}  className="w-full" items={images} autoPlay={true} />
    </div>
  );
};

export default Destinations;