import ImageGallery from 'react-image-gallery';
import Footer from "../../home/Footer";

export default function Adventure() {

  const images = [
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815152.jpg',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815151.jpg',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://wallpapercave.com/dwp1x/wp1815150.png',
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
        <div>
    <div className='py-10'>
        <ImageGallery showFullscreenButton={false} showBullets={true} showPlayButton={false} showThumbnails={false} showNav={false}  className="w-full" items={images} autoPlay={true} />
    </div>
          <div className='flex justify-center pb-10'>
            <p className='text-2xl text-black'>Why Adventure Travel in Japan?</p>
          </div>

          <div className='flex justify-center'>
            <div className='w-3/4'>
              <p className='text-lg text-black'>Adventure Travel is a way to experience a new country on a deeper level than ordinary travel, providing an opportunity to go beyond the usual tourist sights and discover the local culture and nature through memorable, exciting activities.</p>
            </div>
          </div>
          <div className='flex justify-center py-10'>
            <button className='rounded-full px-6 py-3 border border-red-500 text-black font-bold text-lg'>Learn more</button>
          </div>
          <div className='flex justify-center'>
            <div className='w-3/4 grid grid-cols-2'>
              <div>
                <div className='w-11/12 h-96 rounded bg-[url("https://tse1.mm.bing.net/th?id=OIP.w5jVlyRumcwmacPIB6RoHgHaEK&pid=Api")]'>
                  <p className='font-bold text-white text-lg pt-4 pl-4'>Swimming</p>
                </div>
              </div>
              <div className=''>
              <div className='flex'>
              <div className='w-64 mr-4 rounded h-44 bg-[url("https://tse1.mm.bing.net/th?id=OIP.w5jVlyRumcwmacPIB6RoHgHaEK&pid=Api")]'>
                <p className='font-bold text-white text-lg pt-4 pl-4'>Canopying</p>
              </div>
              <div className='w-64 h-44 rounded bg-[url("https://tse1.mm.bing.net/th?id=OIP.w5jVlyRumcwmacPIB6RoHgHaEK&pid=Api")]'>
              <p className='font-bold text-white text-lg pt-4 pl-4'>Canopying</p>
              </div>
              </div>
              <div className='flex pt-8'>
              <div className='w-64 mr-4 rounded object-cover h-44 bg-[url("https://tse1.mm.bing.net/th?id=OIP.w5jVlyRumcwmacPIB6RoHgHaEK&pid=Api")]'>
              <p className='font-bold text-white text-lg pt-4 pl-4'>Canopying</p>
              </div>
              <div className='w-64 h-44 rounded bg-[url("https://tse1.mm.bing.net/th?id=OIP.w5jVlyRumcwmacPIB6RoHgHaEK&pid=Api")]'>
              <p className='font-bold text-white text-lg pt-4 pl-4'>Canopying</p>
              </div>
              </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center py-10'>
            <div className='w-3/4'>
            <p className='font-bold text-black text-2xl'>Choice Adventures</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='w-3/4 grid grid-cols-3'>
            <div className='cursor-pointer w-10/12 h-80'>
                <img className='rounded w-full h-64' src='https://tse3.mm.bing.net/th?id=OIP.LNG6U1qQvD9HugakYImlPwHaEr&pid=Api'/>
                <p className='text-lg font-semibold text-black pt-4'>Exertion: Forge limits</p>
            </div>
            <div className='cursor-pointer w-10/12 h-80'>
                <img className='rounded w-full h-64' src='https://tse2.mm.bing.net/th?id=OIP.pMVk4FYcYfrMNN3c8CjweQHaE7&pid=Api'/>
                <p className='text-lg font-semibold text-black pt-4'>Exertion: Forge limits</p>
            </div>
            <div className='cursor-pointer w-10/12 h-80'>
                <img className='rounded w-full h-64' src='https://tse1.mm.bing.net/th?id=OIP.w5jVlyRumcwmacPIB6RoHgHaEK&pid=Api'/>
                <p className='text-lg font-semibold text-black pt-4'>Exertion: Forge limits</p>
            </div>
            </div>
          </div>
          <div className='flex justify-center py-10'>
          <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Amazonas+(Amazonas)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>
          </div>
          <div className='flex justify-center'>
            <div className='w-3/4 pb-5'>
            <p className='font-bold text-black text-2xl'>Videos</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='w-3/4 grid grid-cols-4'>
            <div><iframe src="https://www.youtube.com/embed/7VkY1J9Hs7E" className="w-10/12 rounded"></iframe>
            <p className='font-bold text-black text-lg'>Southern lands</p>
            </div>
            <div><iframe src="https://www.youtube.com/embed/7VkY1J9Hs7E" className="w-10/12 rounded"></iframe>
            <p className='font-bold text-black text-lg'>Seven lakes</p>
            </div>
            <div><iframe src="https://www.youtube.com/embed/7VkY1J9Hs7E" className="w-10/12 rounded"></iframe>
            <p className='font-bold text-black text-lg'>Highlands</p>
            </div>
            <div><iframe src="https://www.youtube.com/embed/7VkY1J9Hs7E" className="w-10/12 rounded"></iframe>
            <p className='font-bold text-black text-lg'>Adventure in the sky</p>
            </div>
            </div>
          </div>
          <div className='py-10'>
          </div>
        <Footer/>
        </div>
    );
}