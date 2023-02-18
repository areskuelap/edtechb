import ImageGallery from 'react-image-gallery';
import Footer from "../../home/Footer";

export default function Transportation() {
  const images = [
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815142.jpg',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815144.jpg',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815145.jpg',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815146.jpg',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815147.jpg',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815148.jpg',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815149.jpg',
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
        <div className="w-4/5 grid sm:grid-cols-2">
        <div>
          <p className='text-lg sm:text-3xl text-black font-semibold sm:font-bold'>Given its relatively isolated location, Amazonas can sometimes be a challenge to get to. However, from the moment you touch down, getting around becomes a freeze</p>
          <p className="pt-5 text-base sm:text-lg">Amazonas' peerless public transportation shuttles you through sprawling cities and quaint villages at break-neck speed and with pinpoint punctuality. From the sleek shinkansen to the humble local train, timetables are followed religiously with a service you can...</p>
        </div>
        <div></div>
        </div>
        </div>
        <div className='flex justify-center'>
        <div className='w-4/5 py-10'>
          <div>
            <p className="text-lg sm:text-3xl text-black font-bold">Getting around trips</p>
          </div>

          <div className='py-5 grid sm:grid-cols-3'>
          <div className='block sm:hidden'>  
          <div className="flex justify-center">
          <img className='w-10/12 h-56 rounded-lg py-3 rounded' src='https://fresac.pe/wp-content/uploads/2021/04/caverna_quiocta.jpg'/>
          </div>
          <div className='w-full flex justify-center'>
          <p className="text-lg sm:text-xl font-bold text-black">Amazonas Railways</p>
          </div>
          <div className="w-full flex justify-center pb-5">
          <p className='text-sm sm:text-base'>Amazonas leading railway company, Amazonas Railway has an elaborated and well-estabilished network of trains throughout the region</p>
          </div>
          </div>
          <div className='hidden sm:block'>
          <img className='w-10/12 h-56 rounded-lg py-3 rounded' src='https://fresac.pe/wp-content/uploads/2021/04/caverna_quiocta.jpg'/>
          <div className='w-10/12'>
          <p className="text-xl font-bold text-black">Amazonas Railways</p>
          <p className='text-base'>Amazonas leading railway company, Amazonas Railway has an elaborated and well-estabilished network of trains throughout the region</p>
          </div>
          </div>
          <div className='block sm:hidden'>  
          <div className="flex justify-center">
          <img className='w-10/12 h-56 rounded-lg py-3 rounded' src='https://fresac.pe/wp-content/uploads/2021/04/caverna_quiocta.jpg'/>
          </div>
          <div className='w-full flex justify-center'>
          <p className="text-lg sm:text-xl font-bold text-black">Amazonas Railways</p>
          </div>
          <div className="w-full flex justify-center pb-5">
          <p className='text-sm sm:text-base'>Amazonas leading railway company, Amazonas Railway has an elaborated and well-estabilished network of trains throughout the region</p>
          </div>
          </div>
          <div className='hidden sm:block'>
          <img className='w-10/12 h-56 rounded-lg py-3 rounded' src='https://fresac.pe/wp-content/uploads/2021/04/caverna_quiocta.jpg'/>
          <div className='w-10/12'>
          <p className="text-xl font-bold text-black">Amazonas Railways</p>
          <p className='text-base'>Amazonas leading railway company, Amazonas Railway has an elaborated and well-estabilished network of trains throughout the region</p>
          </div>
          </div>
          <div className='block sm:hidden'>  
          <div className="flex justify-center">
          <img className='w-10/12 h-56 rounded-lg py-3 rounded' src='https://fresac.pe/wp-content/uploads/2021/04/caverna_quiocta.jpg'/>
          </div>
          <div className='w-full flex justify-center'>
          <p className="text-lg sm:text-xl font-bold text-black">Amazonas Railways</p>
          </div>
          <div className="w-full flex justify-center pb-5">
          <p className='text-sm sm:text-base'>Amazonas leading railway company, Amazonas Railway has an elaborated and well-estabilished network of trains throughout the region</p>
          </div>
          </div>
          <div className='hidden sm:block'>
          <img className='w-10/12 h-56 rounded-lg py-3 rounded' src='https://fresac.pe/wp-content/uploads/2021/04/caverna_quiocta.jpg'/>
          <div className='w-10/12'>
          <p className="text-xl font-bold text-black">Amazonas Railways</p>
          <p className='text-base'>Amazonas leading railway company, Amazonas Railway has an elaborated and well-estabilished network of trains throughout the region</p>
          </div>
          </div>
          </div>

          <div className='py-5 grid sm:grid-cols-3'>
          <div className='block sm:hidden'>  
          <div className="flex justify-center">
          <img className='w-10/12 h-56 rounded-lg py-3 rounded' src='https://fresac.pe/wp-content/uploads/2021/04/caverna_quiocta.jpg'/>
          </div>
          <div className='w-full flex justify-center'>
          <p className="text-lg sm:text-xl font-bold text-black">Amazonas Railways</p>
          </div>
          <div className="w-full flex justify-center pb-5">
          <p className='text-sm sm:text-base'>Amazonas leading railway company, Amazonas Railway has an elaborated and well-estabilished network of trains throughout the region</p>
          </div>
          </div>
          <div className='hidden sm:block'>
          <img className='w-10/12 h-56 rounded-lg py-3 rounded' src='https://fresac.pe/wp-content/uploads/2021/04/caverna_quiocta.jpg'/>
          <div className='w-10/12'>
          <p className="text-xl font-bold text-black">Amazonas Railways</p>
          <p className='text-base'>Amazonas leading railway company, Amazonas Railway has an elaborated and well-estabilished network of trains throughout the region</p>
          </div>
          </div>
          <div className='block sm:hidden'>  
          <div className="flex justify-center">
          <img className='w-10/12 h-56 rounded-lg py-3 rounded' src='https://fresac.pe/wp-content/uploads/2021/04/caverna_quiocta.jpg'/>
          </div>
          <div className='w-full flex justify-center'>
          <p className="text-lg sm:text-xl font-bold text-black">Amazonas Railways</p>
          </div>
          <div className="w-full flex justify-center pb-5">
          <p className='text-sm sm:text-base'>Amazonas leading railway company, Amazonas Railway has an elaborated and well-estabilished network of trains throughout the region</p>
          </div>
          </div>
          <div className='hidden sm:block'>
          <img className='w-10/12 h-56 rounded-lg py-3 rounded' src='https://fresac.pe/wp-content/uploads/2021/04/caverna_quiocta.jpg'/>
          <div className='w-10/12'>
          <p className="text-xl font-bold text-black">Amazonas Railways</p>
          <p className='text-base'>Amazonas leading railway company, Amazonas Railway has an elaborated and well-estabilished network of trains throughout the region</p>
          </div>
          </div>
          <div className='block sm:hidden'>  
          <div className="flex justify-center">
          <img className='w-10/12 h-56 rounded-lg py-3 rounded' src='https://fresac.pe/wp-content/uploads/2021/04/caverna_quiocta.jpg'/>
          </div>
          <div className='w-full flex justify-center'>
          <p className="text-lg sm:text-xl font-bold text-black">Amazonas Railways</p>
          </div>
          <div className="w-full flex justify-center pb-5">
          <p className='text-sm sm:text-base'>Amazonas leading railway company, Amazonas Railway has an elaborated and well-estabilished network of trains throughout the region</p>
          </div>
          </div>
          <div className='hidden sm:block'>
          <img className='w-10/12 h-56 rounded-lg py-3 rounded' src='https://fresac.pe/wp-content/uploads/2021/04/caverna_quiocta.jpg'/>
          <div className='w-10/12'>
          <p className="text-xl font-bold text-black">Amazonas Railways</p>
          <p className='text-base'>Amazonas leading railway company, Amazonas Railway has an elaborated and well-estabilished network of trains throughout the region</p>
          </div>
          </div>
          </div>

        </div>
        </div>
        <Footer/>
      </div>
    );
}