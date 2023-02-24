import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import {Link} from "react-router-dom";

const Destinations = () => {
  const images = [
    {
      original: 'https://drive.google.com/uc?export=view&id=1tQzmi1wTJgr7lRnvPlTfanXnb7OL9_V5',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://weatravelperu.com/wp-content/uploads/2021/03/CHACHAPOYAS02-min.jpg',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1PCI9HYe9s1Hrzg_6K1I1JEtjCvL-dUlU',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=171gCRCgTCLQeRqkgHADDWO_KvIlbZVg1',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=12Khk3ZP3Pf1fRgLs55Qm3zVc9g0uuNUI',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1CYH9zssDxg6TJgZyEpiUbsi-4OWM-9mC',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1-T8xgngh6WKsNF6A8sOFcaKf0PT2E84b',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1w-N8L3eP6p3Knbza4S7g9bCOdoEEZ4Pk',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1w-N8L3eP6p3Knbza4S7g9bCOdoEEZ4Pk',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <div className='pt-5 bg-gray-200 z-0'>
        <ImageGallery showFullscreenButton={false} showBullets={true} showPlayButton={false} showThumbnails={false} showNav={false}  className="w-full" items={images} autoPlay={true} />
        <div className="bg-gray-200 flex justify-center">
          <Link to="/covid"><p className='px-8 text-sm sm:text-lg underline text-red-500 py-5 cursor-pointer'>COVID-19: Practical Information for Traveling to Amazonas</p></Link>
        </div>
    </div>
  );
};

export default Destinations;