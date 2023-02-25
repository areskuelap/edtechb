import React from "react";
import { useEffect, useState } from "react";
import {Helmet} from "react-helmet";
import ImageGallery from 'react-image-gallery';


// <Zoom img="link-to-img" zoomScale={3} width={600} height={600} /> //
/* Implement 
code above as image cards instead of bg-img*/

export default function Chachapoyas() {

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


    const [active, isActive] = useState(false);
    const [on, isOn] = useState(true);
  
    const oneClick = () => {
        isActive(true);
        isOn(false);
    }
  
    return (
        <div>
    <div className='py-10'>
        <ImageGallery showFullscreenButton={false} showBullets={true} showPlayButton={false} showThumbnails={false} showNav={false}  className="w-full" items={images} autoPlay={true} />
    </div>
  
          <div className='flex justify-center'>
          <div className='flex w-4/5'>
            <div className='w-2/3 pt-10 pb-5'>
              <div className=''>
                <p className='font-bold text-3xl text-black'>Luya is a charming, relaxed city best known for its food, fun and nightlife—with some history and culture peeking through</p>
              </div>
              <div className='py-10'>
                <p className='text-xl text-black'>Osaka is only a short shinkansen ride from Tokyo, but has a very different personality to Japan's capital city. Hop off the bullet train into an area of exciting nightlife, delicious food and straight-talking, friendly locals. Along with plenty of shopping and modern attractions, Osaka also has a historical side, the highlight of which is Osaka Castle. The castle is a great place to discover more about Japanese history and to wander the beautiful grounds, especially during cherry blossom season in April when the sakura blooms and the weather is often at its best.</p>
              </div>
            </div>
            <div className='w-1/3 flex justify-center py-10'>
            <div data-skyscanner-widget="SearchWidget" data-destination-name="'Chachapoyas'"data-currency="USD">
            <Helmet>
              <script src="https://widgets.skyscanner.net/widget-server/js/loader.js" async></script>
              </Helmet>
              </div>
            </div>
          </div>
          </div>
          <div className='flex justify-center'>
          <div className='flex w-10/12'>
            <div>
            <div className='w-3/5 pb-5'>
              <div className=''>
                <p className='font-bold text-3xl text-black'>How to Get There</p>
              </div>
              <div className='pt-10'>
                <p className='text-xl text-black'>From Tokyo, take the Tokaido-Sanyo Shinkansen to Shin-Osaka Station. The trip takes approximately two and a half hours. From Shin-Osaka Station, transfer to the JR local line and ride to Osaka Station. From Kansai International Airport (KIX), take the Nankai or JR lines to Tennoji or Namba stations.</p>
              </div>
            </div>
            {on && <div onClick={oneClick} className='cursor-pointer'>
                <p className='text-lg font-bold text-red-600'>Click for more</p>
              </div>
              }
              {active &&
                <div className='w-2/3 flex justify-center pb-10'>
                <p className='text-xl text-black'>Osaka is an excellent base for exploring the greater Kansai region, which includes Kyoto, Nara, Kobe and Wakayama. Each of these areas is a one-hour train ride from Osaka’s central transportation hubs (Osaka Station in the north, and Namba Station and Tennoji Station in the south). Kansai International Airport (KIX) is rivaled only by Narita Airport in Tokyo in size and scope, and is serviced by all major airlines. There are many direct flights between KIX and many major cities in the US, Europe and Australia.</p>
              </div>}
            </div>
            <div className='bg-green-300 w-80 h-80 rounded-lg'>
              <div className='flex justify-center'>
              <p className='text-black text-2xl font-bold py-2'>Seasons</p>
              </div>
              <div className='flex justify-center'>
                  <div className='w-64 rounded-lg h-64 bg-white pt-8'>
                    <div className='flex justify-center'>
                        <div className='w-10/12 bg-green-300 rounded flex items-center h-12 justify-center'>
                          <p className='text-black font-bold text-lg'>Winter</p>
                        </div>
                    </div>
                    <div className='flex justify-center pb-8'>
                        <div className='w-4/5 bg-wwhite flex items-center pb-2 h-12 justify-center'>
                          <p className='text-black font-bold text-lg'>January - June</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-4/5 bg-green-300 rounded flex items-center py-2 h-12 justify-center'>
                          <p className='text-black font-bold text-lg'>Summer</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-4/5 bg-wwhite flex items-center pb-2 h-12 justify-center'>
                          <p className='text-black font-bold text-lg'>July - December</p>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
          </div>
          </div>  
          <div className='flex justify-center pt-10'>
              <div className='w-4/5'>
                <div className='w-3/5 border w-full border-gray-100 rounded bg-gray-100 py-10'>
                <p className='pb-5 font-bold text-3xl text-black pl-8'>Don’t Miss</p>
                <ul className='w-11/12 pl-8 text-black text-lg font-semibold'>
                  <li>The neon lights of Dotombori Bridge and Osaka’s Minami area</li>
                  <li className='py-2'>Exploring Osaka Castle Park and Expo Memorial Park, the site of Expo '70</li>
                  <li>Partaking in major seasonal festivals including Tenjin Matsuri, Kishiwada Danjiri and Ebessan</li>
                  <li className='py-2'>Indulging in famous culinary delights, particularly in neighborhoods such as Tenma and Ura Namba</li>
                </ul>
                </div>
              </div>
          </div>
          <div className='flex justify-center pt-10'>
            <div className='w-5/6'>
                <p className='text-3xl font-bold text-black'>Explore Luya by Area</p>
            </div>
          </div>   
          <div className='flex justify-center pt-10 pb-4'>
              <div className='w-5/6 grid grid-cols-4'>
              <div className='w-64 flex justify-center rounded bg-cover h-64 items-center bg-[url("http://www.oneikathetraveller.com/wp-content/uploads/2017/04/26085366455_2b8b2659fc_o-1440x960.jpg")]'>
                <p className='font-bold text-white text-2xl'>Luya river</p>
              </div>
              <div className='w-64 flex justify-center rounded bg-cover h-64 items-center bg-[url("https://www.paquetesdeviajesperu.com/wp-content/uploads/2022/04/paquetes-machu-picchu-6d-800x960.jpg")]'>
                <p className='font-bold text-white text-2xl'>Luya river</p>
              </div>
              <div className='w-64 flex justify-center rounded bg-cover h-64 items-center bg-[url("https://www.desktodirtbag.com/wp-content/uploads/2017/10/photos-of-peru-to-inspire-your-next-visit-7.jpg")]'>
                <p className='font-bold text-white text-2xl'>Luya river</p>
              </div>
              <div className='w-64 flex justify-center rounded bg-cover h-64 items-center bg-[url("https://elcomercio.pe/resizer/r9CwdDPL6RSpgMrOrGYI9Xtk1uQ=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VDITWW2BRJF6RBF2WTH52DJ55I.jpg")]'>
                <p className='font-bold text-white text-2xl'>Luya river</p>
              </div>
              </div>
          </div>
          <div className='flex justify-center pb-10'>
              <div className='w-5/6 grid grid-cols-4'>
              <div className='w-64 flex justify-center bg-cover h-64 rounded items-center bg-[url("https://paquetesdeviajesperu.com/wp-content/uploads/2022/07/destinos-del-peru-scaled.jpg")]'>
                <p className='font-bold text-white text-2xl'>Luya river</p>
              </div>
              <div className='w-64 flex justify-center bg-cover h-64 rounded items-center bg-[url("http://www.oneikathetraveller.com/wp-content/uploads/2017/04/26085366455_2b8b2659fc_o-1440x960.jpg")]'>
                <p className='font-bold text-white text-2xl'>Luya river</p>
              </div>
              <div className='w-64 flex justify-center bg-cover h-64 rounded items-center bg-[url("http://www.oneikathetraveller.com/wp-content/uploads/2017/04/26085366455_2b8b2659fc_o-1440x960.jpg")]'>
                <p className='font-bold text-white text-2xl'>Luya river</p>
              </div>
              <div className='w-64 flex justify-center bg-cover h-64 rounded items-center bg-[url("http://www.oneikathetraveller.com/wp-content/uploads/2017/04/26085366455_2b8b2659fc_o-1440x960.jpg")]'>
                <p className='font-bold text-white text-2xl'>Luya river</p>
              </div>
              </div>
          </div> 
          <div className='py-10 flex justify-center'>
              <div className="w-4/5">
                <p className='text-black font-bold text-3xl'>Local specialties</p>
              </div>
        </div> 
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
        
    );
}