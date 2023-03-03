import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import {Link} from "react-router-dom";

const Destinations = () => {
  const images = [
    {
      original: 'https://drive.google.com/uc?export=view&id=1uxLehNNaPPDbX3_99Ex2GLIu4tNn6EgY',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=18pQ78EbnNS_6SRfK5hjbSdYLGwb5UvoA',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1GsRv79JY_gexDbEi_Ga8FEJgBKDZ6x9o',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1OxH0cGcVrX_bqClVDYLKkg9ZunI2FlXQ',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1Hb4-Yr3EiGpmJ_NqulcG07aOpjzipA-k/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1Y4MvsjaEWvTFYaB6CPhlJLmI7o_wa68h',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1uSJ2z4-B1dQuJPtp1pOHRyVeM-rMPnJd',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://drive.google.com/uc?export=view&id=1c8Y89zi9_MGSAYFNgKYj492LL-zgWCvM',
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
          <Link to="/covid"><p className='px-8 text-sm sm:text-lg underline text-red-500 py-5 cursor-pointer'>COVID-19: Información práctica para viajar a Amazonas</p></Link>
        </div>
    </div>
  );
};

export default Destinations;