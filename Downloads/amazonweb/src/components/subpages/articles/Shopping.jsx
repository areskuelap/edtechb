import ImageGallery from 'react-image-gallery';
import Footer from "../../home/Footer"

export default function Shopping() {

  const images = [
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
    
        <div className='flex justify-center'>
            <div className="w-10/12 sm:w-2/3 py-10">
              <div className='w-full sm:w-3/4'>
              <p className='font-semibold sm:font-bold text-lg sm:text-3xl text-black'>Japan's deep-rooted tradition of craftsmanship has earned Japanese products a reputation for high quality around the world</p>
              </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className="w-10/12 sm:w-2/3">
              <div className='w-full sm:w-3/4'>
              <p className='text-base sm:text-xl text-black'>From lovingly brewed sake and prized porcelain crafted in the same way for centuries, to the very latest gadgets and the hippest fashion, you will find it near impossible to leave the country empty-handed. Discover where to shop and what to buy. And expect tax-free deals, limited edition lineups and one-of-a-kind finds.</p>
              </div>
            </div>
        </div>
        <div className='flex justify-center'>
          <div className="w-10/12 sm:w-3/4 py-10">
            <p className='font-semibold sm:font-bold text-xl sm:text-3xl text-black'>Explore by interest</p>
          </div>
        </div>
        <div className='flex justify-center'>
            <hr className='w-10/12 sm:w-3/4 border sm:border-2'></hr>
        </div>
            <div className="flex sm:hidden justify-center w-full">
              <div>
              <div className='py-5 pl-5 grid grid-cols-2'>
                <div className='w-40 mr-4 rounded h-36 bg-cover bg-[url("https://imgs.deperu.com/regiones/amazonas_chachapoyas_plaza.jpg")]'>
                  <p className='font-bold text-white text-lg pt-4 pl-4'>Canopying</p>
                </div>
                <div className='w-40 h-36 rounded bg-cover bg-[url("https://www.perucusco.info/wp-content/uploads/2019/06/revash-02-800x533.jpg")]'>
                <p className='font-bold text-white text-lg pt-4 pl-4'>Biking</p>
                </div>
                </div>
                <div className='w-[20.5rem] ml-5 pb-5 h-56 rounded bg-cover bg-[url("https://elcomercio.pe/resizer/v4qaTqoqQ_hhOSyQcsMbNTu7Qv4=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/A3FVCLLYDFCI7NTEWJAGRDCTTA.jpg")]'>
                    <p className='font-bold text-white text-lg pt-4 pl-4'>Swimming</p>
                  </div>
                <div className='py-5 pl-5 grid grid-cols-2'>
                <div className='w-40 mr-4 rounded h-36 bg-cover bg-[url("https://imgs.deperu.com/regiones/amazonas_chachapoyas_plaza.jpg")]'>
                  <p className='font-bold text-white text-lg pt-4 pl-4'>Canopying</p>
                </div>
                <div className='w-40 h-36 rounded bg-cover bg-[url("https://www.perucusco.info/wp-content/uploads/2019/06/revash-02-800x533.jpg")]'>
                <p className='font-bold text-white text-lg pt-4 pl-4'>Biking</p>
                </div>
                </div>
                <div className='w-[20.5rem] ml-5 mb-5 h-56 rounded bg-cover bg-[url("https://elcomercio.pe/resizer/v4qaTqoqQ_hhOSyQcsMbNTu7Qv4=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/A3FVCLLYDFCI7NTEWJAGRDCTTA.jpg")]'>
                    <p className='font-bold text-white text-lg pt-4 pl-4'>Swimming</p>
                  </div>
              </div>
            </div>
        <div className="hidden sm:flex">
          <div>
          <div className='flex justify-center'>
              <div className="w-1/4">
              </div>
              <div className='w-3/4 pt-5 grid grid-cols-2'>
                <div>
                  <div className='w-96 h-96 rounded bg-cover bg-[url("https://elcomercio.pe/resizer/v4qaTqoqQ_hhOSyQcsMbNTu7Qv4=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/A3FVCLLYDFCI7NTEWJAGRDCTTA.jpg")]'>
                    <p className='font-bold text-white text-lg pt-4 pl-4'>Swimming</p>
                  </div>
                </div>
                <div className=''>
                <div className='flex'>
                <div className='w-64 mr-4 rounded h-44 bg-cover bg-[url("https://imgs.deperu.com/regiones/amazonas_chachapoyas_plaza.jpg")]'>
                  <p className='font-bold text-white text-lg pt-4 pl-4'>Canopying</p>
                </div>
                <div className='w-64 h-44 rounded bg-cover bg-[url("https://www.perucusco.info/wp-content/uploads/2019/06/revash-02-800x533.jpg")]'>
                <p className='font-bold text-white text-lg pt-4 pl-4'>Biking</p>
                </div>
                </div>
                <div className='flex pt-8'>
                <div className='w-64 mr-4 rounded bg-cover h-44 bg-[url("https://portal.andina.pe/EDPfotografia3/Thumbnail/2018/09/27/000534912W.jpg")]'>
                <p className='font-bold text-white text-lg pt-4 pl-4'>Hiking</p>
                </div>
                <div className='w-64 h-44 rounded bg-cover bg-[url("https://www.chachapoyastravel.com/wp-content/uploads/2021/02/179367820_1738116999695729_2022924567996087589_n-1024x704.jpg")]'>
                <p className='font-bold text-white text-lg pt-4 pl-4'>Canopying</p>
                </div>
                </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center py-10'>
            <div className="w-1/4">
              </div>
              <div className='w-3/4 grid grid-cols-2'>
                <div className=''>
                <div className='flex'>
                <div className='w-56 mr-4 rounded bg-cover h-44 bg-[url("https://portal.andina.pe/EDPfotografia3/Thumbnail/2018/09/27/000534912W.jpg")]'>
                  <p className='font-bold text-white text-lg pt-4 pl-4'>Canopying</p>
                </div>
                <div className='w-56 h-44 rounded bg-cover bg-[url("https://www.perucusco.info/wp-content/uploads/2019/06/revash-02-800x533.jpg")]'>
                <p className='font-bold text-white text-lg pt-4 pl-4'>Canopying</p>
                </div>
                </div>
                <div className='flex pt-8'>
                <div className='w-56 mr-4 rounded bg-cover h-44 bg-[url("https://www.chachapoyastravel.com/wp-content/uploads/2021/02/179367820_1738116999695729_2022924567996087589_n-1024x704.jpg")]'>
                <p className='font-bold text-white text-lg pt-4 pl-4'>Canopying</p>
                </div>
                <div className='w-56 h-44 rounded bg-cover bg-[url("https://imgs.deperu.com/regiones/amazonas_chachapoyas_plaza.jpg")]'>
                <p className='font-bold text-white text-lg pt-4 pl-4'>Canopying</p>
                </div>
                </div>
                </div>
                <div>
                  <div className='w-96 h-96 ml-2 rounded bg-cover bg-[url("https://elcomercio.pe/resizer/v4qaTqoqQ_hhOSyQcsMbNTu7Qv4=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/A3FVCLLYDFCI7NTEWJAGRDCTTA.jpg")]'>
                    <p className='font-bold text-white text-lg pt-4 pl-4'>Swimming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            <Footer/>
      </div>
    );
}