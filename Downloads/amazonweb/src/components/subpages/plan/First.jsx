import React from 'react';
import ImageGallery from 'react-image-gallery';
import Footer from "../../home/Footer"

export default function First() {
  const images = [
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815129.jpg',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815133.jpg',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815134.jpg',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815131.jpg',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815132.jpg',
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
        <div>
                    <div className='py-10'>
        <ImageGallery showFullscreenButton={false} showBullets={true} showPlayButton={false} showThumbnails={false} showNav={false}  className="w-full" items={images} autoPlay={true} />
    </div>
        <div className="flex justify-center">
        <div className="w-10/12 sm:w-4/5 grid sm:grid-cols-2">
        <div>
          <p className='text-xl sm:text-3xl text-black font-semibold sm:font-bold'>Smooth your way with a little forward planning</p>
          <p className="pt-5 text-base sm:text-lg">It is easy to feel a little overwhelmed and disoriented when you visit Japan for the first time, so find out the basics before you fly and get acquainted with the country through our helping you plan guide.</p>
        </div>
        </div>
        </div>
        <div className='flex justify-center py-10'>
          <img className='w-10/12 sm:w-3/5 h-40 sm:h-80' src='https://tse3.mm.bing.net/th?id=OIP._CFWtuI0YYRGs5Gv72emlAHaC7&pid=Api'/>
        </div>
        <div className='flex justify-center'>
          <hr className='w-4/5 border sm:border-2'></hr>
          </div> 
        <div className="flex sm:hidden">
          <div>
          <div className='flex justify-center'>
            <div className='flex w-10/12 py-5'>
              <div className='flex justify-center w-1/3'>
                <img className='w-28 h-40 rounded' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
              </div>
              <div className='w-2/3 pl-2'>
                <p className='text-lg font-semibold'>Language</p>
                <p className='text-base text-gray-700'>This is a sample text to be used for extraordinary purposes while the website is being developed..</p>
                <div>
                  <p className="text-red-500 font-semibold text-base">Learn more</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
          <hr className='w-4/5 border sm:border-2'></hr>
          </div> 
          <div className='flex justify-center'>
            <div className='flex w-10/12 py-5'>
              <div className='flex justify-center w-1/3'>
                <img className='w-28 h-40 rounded' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
              </div>
              <div className='w-2/3 pl-2'>
                <p className='text-lg font-semibold'>Language</p>
                <p className='text-base text-gray-700'>This is a sample text to be used for extraordinary purposes while the website is being developed..</p>
                <div>
                  <p className="text-red-500 font-semibold text-base">Learn more</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
          <hr className='w-4/5 border sm:border-2'></hr>
          </div> 
          <div className='flex justify-center'>
            <div className='flex w-10/12 py-5'>
              <div className='flex justify-center w-1/3'>
                <img className='w-28 h-40 rounded' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
              </div>
              <div className='w-2/3 pl-2'>
                <p className='text-lg font-semibold'>Language</p>
                <p className='text-base text-gray-700'>This is a sample text to be used for extraordinary purposes while the website is being developed..</p>
                <div>
                  <p className="text-red-500 font-semibold text-base">Learn more</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
          <hr className='w-4/5 border sm:border-2'></hr>
          </div> 
          <div className='flex justify-center'>
            <div className='flex w-10/12 py-5'>
              <div className='flex justify-center w-1/3'>
                <img className='w-28 h-40 rounded' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
              </div>
              <div className='w-2/3 pl-2'>
                <p className='text-lg font-semibold'>Language</p>
                <p className='text-base text-gray-700'>This is a sample text to be used for extraordinary purposes while the website is being developed..</p>
                <div>
                  <p className="text-red-500 font-semibold text-base">Learn more</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
          <hr className='w-4/5 border sm:border-2'></hr>
          </div> 
          <div className='flex justify-center'>
            <div className='flex w-10/12 py-5'>
              <div className='flex justify-center w-1/3'>
                <img className='w-28 h-40 rounded' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
              </div>
              <div className='w-2/3 pl-2'>
                <p className='text-lg font-semibold'>Language</p>
                <p className='text-base text-gray-700'>This is a sample text to be used for extraordinary purposes while the website is being developed..</p>
                <div>
                  <p className="text-red-500 font-semibold text-base">Learn more</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
          <hr className='w-4/5 border sm:border-2'></hr>
          </div> 
          <div className='flex justify-center'>
            <div className='flex w-10/12 py-5'>
              <div className='flex justify-center w-1/3'>
                <img className='w-28 h-40 rounded' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
              </div>
              <div className='w-2/3 pl-2'>
                <p className='text-lg font-semibold'>Language</p>
                <p className='text-base text-gray-700'>This is a sample text to be used for extraordinary purposes while the website is being developed..</p>
                <div>
                  <p className="text-red-500 font-semibold text-base">Learn more</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
          <hr className='w-4/5 border sm:border-2'></hr>
          </div> 
          </div>
        </div>
        <div className="hidden sm:flex">
        <div>
        <div className='flex justify-center py-3'>
          <div className='w-4/5 grid grid-cols-2'>
          <div className='flex w-10/12'>
          <div className='pr-2'>
            <img className='w-96 h-auto rounded-lg' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
          </div>
          <div>
          <p className='text-lg text-black font-bold'>Language</p>
          <p className='text-black'>Though Spanish is the most spoken Language in Amazonas, you can find a variety of pther languages spoken throughout the region, such as Quechua, Awajun, etc</p>
          </div>
          <div></div>
          </div>
          <div className='flex w-10/12'>
          <div className='pr-2'>
            <img className='w-96 h-auto rounded-lg' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
          </div>
          <div>
          <p className='text-lg text-black font-bold'>Language</p>
          <p className='text-black'>Though Spanish is the most spoken Language in Amazonas, you can find a variety of pther languages spoken throughout the region, such as Quechua, Awajun, etc</p>
          </div>
          <div></div>
          </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-4/5 grid grid-cols-2'>
          <div className=''>
          <hr className='w-10/12 border-2'></hr>
          </div> 
          <div className=''>
          <hr className='w-10/12 border-2'></hr>
          </div> 
          </div>
          </div>
        <div className='flex justify-center pt-5'>
          <div className='w-4/5 grid grid-cols-2'>
          <div className='flex w-10/12'>
          <div className='pr-2'>
            <img className='w-96 h-auto rounded-lg' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
          </div>
          <div>
          <p className='text-lg text-black font-bold'>Language</p>
          <p className='text-black'>Though Spanish is the most spoken Language in Amazonas, you can find a variety of pther languages spoken throughout the region, such as Quechua, Awajun, etc</p>
          </div>
          <div></div>
          </div>
          <div className='flex w-10/12'>
          <div className='pr-2'>
            <img className='w-96 h-auto rounded-lg' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
          </div>
          <div>
          <p className='text-lg text-black font-bold'>Language</p>
          <p className='text-black'>Though Spanish is the most spoken Language in Amazonas, you can find a variety of pther languages spoken throughout the region, such as Quechua, Awajun, etc</p>
          </div>
          <div></div>
          </div>
          </div>
        </div>
        <div className='flex justify-center pt-5'>
          <div className='w-4/5 grid grid-cols-2'>
          <div className=''>
          <hr className='w-10/12 border-2'></hr>
          </div> 
          <div className=''>
          <hr className='w-10/12 border-2'></hr>
          </div> 
          </div>
          </div>
        <div className='flex justify-center pt-8'>
          <div className='w-4/5 grid grid-cols-2'>
          <div className='flex w-10/12'>
          <div className='pr-2'>
            <img className='w-96 h-auto rounded-lg' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
          </div>
          <div>
          <p className='text-lg text-black font-bold'>Language</p>
          <p className='text-black'>Though Spanish is the most spoken Language in Amazonas, you can find a variety of pther languages spoken throughout the region, such as Quechua, Awajun, etc</p>
          </div>
          <div></div>
          </div>
          <div className='flex w-10/12'>
          <div className='pr-2'>
            <img className='w-96 h-auto rounded-lg' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
          </div>
          <div>
          <p className='text-lg text-black font-bold'>Language</p>
          <p className='text-black'>Though Spanish is the most spoken Language in Amazonas, you can find a variety of pther languages spoken throughout the region, such as Quechua, Awajun, etc</p>
          <div className='flex'>
            <p className='text-red font-bold'>Learn more</p>
            <p className=''>Icon</p>
          </div>
          </div>
          <div></div>
          </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-4/5 grid grid-cols-2'>
          <div className=''>
          <hr className='w-10/12 border-2'></hr>
          </div> 
          <div className=''>
          <hr className='w-10/12 border-2'></hr>
          </div> 
          </div>
          </div>
          </div>
          </div>
        <Footer/>
      </div>
    );
}