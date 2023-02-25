import React from "react";
import { useState } from "react";
import ImageGallery from 'react-image-gallery';
import Footer from "../../home/Footer";
import useScript from './useScript';
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Luya() {

    const [active, isActive] = useState(false);
    const [on, isOn] = useState(true);
  
    const oneClick = () => {
        isActive(true);
        isOn(false);
    }
  
    useScript("https://widgets.skyscanner.net/widget-server/js/loader.js");  
    return (
        <div>
        <div className="flex sm:hidden">       
            <div>
            <div className='bg-[url("https://drive.google.com/uc?export=view&id=1rRYU1qOHJcaUB911_mIZGtybjEkk5LOE")] bg-cover bg-center bg-no-repeat'>
        <div className='bg-gradient-to-l from-gray-500 to-transparent'>
          <p className='text-lg font-semibold text-white pl-10 py-3'>Official guide for traveling Amazonas- Travel Amazonas</p>
        </div>
        <div className='pt-24 pb-56'>
        <p className='text-4xl pl-10 text-white font-bold'>Luya</p>
        <p className='text-xl py-3 pl-10 text-white font-bold'>Get out the most of your trip to Luya</p>
        </div>
        </div>             
            <div className="flex pt-6 justify-center">
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
          <div className="flex justify-center">
          <div className='w-10/12 pt-10 pb-5'>
              <div className=''>
                <p className='font-semibold text-xl text-black'>Luya is a charming, relaxed city best known for its food, fun and nightlife—with some history and culture peeking through</p>
              </div>
              <div className='py-10'>
                <p className='text-lg text-black'>Osaka is only a short shinkansen ride from Tokyo, but has a very different personality to Japan's capital city. Hop off the bullet train into an area of exciting nightlife, delicious food and straight-talking, friendly locals. Along with plenty of shopping and modern attractions, Osaka also has a historical side, the highlight of which is Osaka Castle. The castle is a great place to discover more about Japanese history and to wander the beautiful grounds, especially during cherry blossom season in April when the sakura blooms and the weather is often at its best.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-10/12">
            <div>
            <div className='w-full pb-5'>
              <div className=''>
                <p className='font-bold text-xl text-black'>How to Get There</p>
              </div>
              <div className='pt-10'>
                <p className='text-lg text-black'>From Tokyo, take the Tokaido-Sanyo Shinkansen to Shin-Osaka Station. The trip takes approximately two and a half hours. From Shin-Osaka Station, transfer to the JR local line and ride to Osaka Station. From Kansai International Airport (KIX), take the Nankai or JR lines to Tennoji or Namba stations.</p>
              </div>
            </div>
            {on && <div onClick={oneClick} className='cursor-pointer'>
                <p className='text-base font-bold text-red-600'>Click for more</p>
              </div>
              }
              {active &&
                <div className='w-10/12 flex justify-center pb-10'>
                <p className='text-lg text-black'>Osaka is an excellent base for exploring the greater Kansai region, which includes Kyoto, Nara, Kobe and Wakayama. Each of these areas is a one-hour train ride from Osaka’s central transportation hubs (Osaka Station in the north, and Namba Station and Tennoji Station in the south). Kansai International Airport (KIX) is rivaled only by Narita Airport in Tokyo in size and scope, and is serviced by all major airlines. There are many direct flights between KIX and many major cities in the US, Europe and Australia.</p>
              </div>}
            </div>
            </div>
          </div>
          <div className='flex justify-center pt-10'>
                <div className='w-4/5 border w-full border-gray-100 rounded bg-gray-100 py-10'>
                <p className='pb-5 font-bold text-xl text-black pl-8'>Don’t Miss</p>
                <ul className='w-11/12 pl-8 text-black text-sm font-semibold'>
                  <li>The neon lights of Dotombori Bridge and Osaka’s Minami area</li>
                  <li className='py-2'>Exploring Osaka Castle Park and Expo Memorial Park, the site of Expo '70</li>
                  <li>Partaking in major seasonal festivals including Tenjin Matsuri, Kishiwada Danjiri and Ebessan</li>
                  <li className='py-2'>Indulging in famous culinary delights, particularly in neighborhoods such as Tenma and Ura Namba</li>
                </ul>
                </div>
          </div>
          <div className='flex justify-center pt-10'>
            <div className='w-10/12'>
                <p className='text-base font-bold text-black'>Explore Luya by Area</p>
            </div>
          </div> 
          <div className="flex justify-center pt-4">
                <div className="w-11/12 grid grid-cols-2">
                <div className='w-44 flex justify-center rounded bg-cover h-44 items-center bg-[url("http://www.oneikathetraveller.com/wp-content/uploads/2017/04/26085366455_2b8b2659fc_o-1440x960.jpg")]'>
                <p className='font-bold text-white text-lg'>Luya river</p>
              </div>
              <div className='w-44 flex justify-center rounded bg-cover h-44 items-center bg-[url("https://www.paquetesdeviajesperu.com/wp-content/uploads/2022/04/paquetes-machu-picchu-6d-800x960.jpg")]'>
                <p className='font-bold text-white text-lg'>Luya river</p>
              </div>
                </div>
          </div>
          <div className="flex justify-center pt-4 pb-10">
                <div className="w-11/12 grid grid-cols-2">
                <div className='w-44 flex justify-center rounded bg-cover h-44 items-center bg-[url("http://www.oneikathetraveller.com/wp-content/uploads/2017/04/26085366455_2b8b2659fc_o-1440x960.jpg")]'>
                <p className='font-bold text-white text-lg '>Luya river</p>
              </div>
              <div className='w-44 flex justify-center rounded bg-cover h-44 items-center bg-[url("https://www.paquetesdeviajesperu.com/wp-content/uploads/2022/04/paquetes-machu-picchu-6d-800x960.jpg")]'>
                <p className='font-bold text-white text-lg'>Luya river</p>
              </div>
                </div>
          </div>
          <Footer/>
            </div>
        </div>


      <div className="hidden sm:flex">
        <div>
        <div className='bg-[url("https://drive.google.com/uc?export=view&id=1rRYU1qOHJcaUB911_mIZGtybjEkk5LOE")] bg-cover bg-center bg-no-repeat'>
        <div className='bg-gradient-to-l from-gray-500 to-transparent'>
          <p className='text-lg font-semibold text-white pl-10 py-3'>Official guide for traveling Amazonas- Travel Amazonas</p>
        </div>
        <div className='pt-24 pb-56'>
        <p className='text-4xl pl-10 text-white font-bold'>Luya</p>
        <p className='text-xl py-3 pl-10 text-white font-bold'>Get out the most of your trip to Luya</p>
        </div>
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
            <div className='w-32 flex justify-center py-10'>
            <div data-skyscanner-widget="SearchWidget" data-destination-name="'Chachapoyas'"></div>
            </div>
          </div>
          </div>
          <div className='flex justify-center'>
          <div className='flex w-4/5'>
            <div>
            <div className='w-4/5 pb-5'>
              <div className=''>
                <p className='font-bold text-3xl text-black'>Get the best views of Luya</p>
              </div>
              <div className='pt-10'>
                <p className='text-xl text-black'>You can find the best views of Sakurajima at the picturesque Japanese garden Sengan-en  and on top of the Shiroyama viewpoint, which rises up behind the city. Take note, you may also get a light showering of ash if the volcano erupts, which it frequently does.</p>
              </div>
              <div className="py-5">
                  <img className="w-10/12 rounded h-auto" src="https://i.pinimg.com/originals/ef/17/d5/ef17d5ff5efe1fdf4a9ad55f44633b68.jpg" alt=""/>
              </div>
            </div>
            <div className='w-4/5 pb-5'>
              <div className=''>
                <p className='font-bold text-3xl text-black'>Take a leisurely walk around the old castle grounds</p>
              </div>
              <div className='pt-10'>
                <p className='text-xl text-black'>Start at Terukuni-jinja shrine , where revered feudal lord Shimazu Nariakira is enshrined. Then head over to get your photo taken with the statue of the real last samurai, Saigo Takamori. Take a leisurely stroll past the old castle walls, and head inside the former castle grounds to visit the Reimeikan Museum and learn about the rich history and culture of Kagoshima.</p>
              </div>
            </div>
            <div className='w-4/5 pb-5'>
              <div className=''>
                <p className='font-bold text-3xl text-black'>Journey through the historic Sengan-en</p>
              </div>
              <div className='pt-10'>
                <p className='text-xl text-black'>Make sure to leave plenty of time for a visit to Sengan-en , the former private residence of the feudal lords of the Satsuma domain. The expansive grounds include the house and gardens as well as a museum and glassworks.</p>
              </div>
            </div>
            <div className='w-4/5 pb-5'>
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
                <div className='w-4/5 flex justify-center pb-10'>
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
        <div className="hidden sm:flex">
        <div>
        <div className='flex justify-center py-3'>
          <div className='w-4/5 grid grid-cols-2'>
          <div className='flex w-10/12'>
          <div className='flex w-1/3 justify-center'>
            <img className='w-4/5 h-auto rounded-lg' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
          </div>
          <div className='w-2/3'>
          <p className='text-lg text-black font-bold'>Credit Cards</p>
          <p className='text-gray-700 text-sm'>Even though Japan is a cash-centric country, credit cards are usually accepted in most shops, restaurants and taxis in major cities.</p>
          <div className="flex pt-4 items-center">
            <p className="text-red-500 font-semibold text-sm cursor-pointer hover:underline">Learn More</p>
            <ChevronRightIcon className="text-red-500 pl-1 w-6"/>
          </div>
          </div>
          </div>
          <div className='flex w-10/12'>
          <div className='flex w-1/3 justify-center'>
            <img className='w-4/5 h-auto rounded-lg' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
          </div>
          <div className='w-2/3'>
          <p className='text-lg text-black font-bold'>Tipping</p>
          <p className='text-gray-700 text-sm'>Tipping is not practiced in Japan. In fact, it can cause discomfort and confusion if you do. A service charge is generally added on to the final bill in restaurants.</p>
          <div className="flex pt-4 items-center">
            <p className="text-red-500 font-semibold text-sm cursor-pointer hover:underline">Learn More</p>
            <ChevronRightIcon className="text-red-500 pl-1 w-6"/>
          </div>
          </div>
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
          <div className='flex w-1/3 justify-center'>
            <img className='w-4/5 h-auto rounded-lg' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
          </div>
          <div className='w-2/3'>
          <p className='text-lg text-black font-bold'>Currency</p>
          <p className='text-gray-700 text-sm'>The Japanese yen is used throughout the country and you can exchange foreign currency at the airports and most major banks.</p>
          <div className="flex pt-4 items-center">
            <p className="text-red-500 font-semibold text-sm cursor-pointer hover:underline">Learn More</p>
            <ChevronRightIcon className="text-red-500 pl-1 w-6"/>
          </div>
          </div>
          </div>
          <div className='flex w-10/12'>
          <div className='flex w-1/3 justify-center'>
            <img className='w-4/5 h-auto rounded-lg' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
          </div>
          <div className='w-2/3'>
          <p className='text-lg text-black font-bold'>Wi-Fi & Connectivity</p>
          <p className='text-gray-700 text-sm'>Wireless hotspots are popping up all over major cities in Japan, so you should never be too far from a Wi-Fi connection.</p>
          <div className="flex pt-4 items-center">
            <p className="text-red-500 font-semibold text-sm cursor-pointer hover:underline">Learn More</p>
            <ChevronRightIcon className="text-red-500 pl-1 w-6"/>
          </div>
          </div>
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
          <div className='flex w-1/3 justify-center'>
            <img className='w-4/5 h-auto rounded-lg' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
          </div>
          <div className='w-2/3'>
          <p className='text-lg text-black font-bold'>Plugs & Electricity</p>
          <p className='text-gray-700 text-sm'>Japan uses two flat parallel prong plugs. For guaranteed charging of your electrical necessities, purchase a plug adapter beforehand.</p>
          <div className="flex pt-4 items-center">
            <p className="text-red-500 font-semibold text-sm cursor-pointer hover:underline">Learn More</p>
            <ChevronRightIcon className="text-red-500 pl-1 w-6"/>
          </div>
          </div>
          </div>
          <div className='flex w-10/12'>
          <div className='flex w-1/3 justify-center'>
            <img className='w-4/5 h-auto rounded-lg' src="https://tse2.mm.bing.net/th?id=OIP.7kT8b3Nfgph5trl-j_OmLwHaKe&pid=Api"/>
          </div>
          <div className='w-2/3'>
          <p className='text-lg text-black font-bold'>Timezone</p>
          <p className='text-gray-700 text-sm'>All of Japan sits within the same time zone, and no daylight saving is practiced. The country is nine hours ahead of GMT.</p>
          <div className="flex pt-4 items-center">
            <p className="text-red-500 font-semibold text-sm cursor-pointer hover:underline">Learn More</p>
            <ChevronRightIcon className="text-red-500 pl-1 w-6"/>
          </div>
          </div>
          </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-4/5 py-5 grid grid-cols-2'>
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
          <div className="flex justify-center pt-5 pb-10">
            <div className="w-4/5">
            <div className="bg-gray-100 w-1/2 mt-5 rounded-lg border border-gray-100">
            <div>
                <p className='ml-5 my-5 text-2xl text-black font-bold'>Did this information help you?</p>
            </div>
            <div className="grid grid-cols-2 pb-8">
            <div className="flex">
            <button className="py-2 px-6 rounded-lg border-gray-500 bg-white text-xl text-red-500 font-bold ml-5 mr-5 hover:bg-gray-300 hover:text-white">Yes</button>
            <button className="py-2 px-6 rounded-lg border-gray-500 bg-white text-xl text-red-500 font-bold hover:bg-gray-300 hover:text-white">No</button>
            </div>
            </div>
            </div>
            </div>
        </div>
          <div className='bg-green-50'>
        <div className='flex justify-center'>
            <div className='w-10/12'>
                <p className='text-3xl pt-10 font-bold text-gray-800 py-5'>Nearby places</p>
            </div>
        </div>
        <div className="flex justify-center">
          <div className='w-10/12  pb-10 grid grid-cols-4'>
              <div className="w-11/12">
                <img src='https://1.bp.blogspot.com/-kgJarPRCryw/YB1xJCGSWqI/AAAAAAABqF4/hlGbsUXmxfYihxOw8sSpKbD4MHzcwguswCLcBGAsYHQ/s960/lamud-luya2.jpg' className='w-64 rounded h-49' alt='img'/>
              <p className='text-base font-bold text-gray-800 hover:text-green-600 cursor-pointer'>Cohechan</p>
              </div>
              <div className="w-11/12">
                <img src='https://elcomercio.pe/resizer/tgJJu-tpsy3Nr3PcIviw966Gw64=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/AYACJKCCAJC7FEOAEQY6RATW5A.jpg' className='w-64 rounded h-49' alt='img'/>
              <p className='text-base font-bold text-gray-800 hover:text-green-600 cursor-pointer'>Lamud</p>
              </div>
              <div className="w-11/12">
                <img src='https://danzasdelaselva.com/wp-content/uploads/2021/04/distrito-de-trita.jpg' className='w-64 rounded h-49' alt='img'/>
              <p className='text-base font-bold text-gray-800 hover:text-green-600 cursor-pointer'>Trita</p>
              </div>
              <div className="w-11/12">
                <img src='https://us.123rf.com/450wm/mathess/mathess1606/mathess160602367/59086237-leymebamba-per%C3%BA-9-junio-2015-plaza-de-la-ciudad-de-un-pueblo-de-leymebamba-el-norte-de-per%C3%BA-.jpg?ver=6' className='w-64 rounded h-49' alt='img'/>
              <p className='text-base font-bold text-gray-800 hover:text-green-600 cursor-pointer'>Mirador del Utcubamba</p>
              </div>
          </div>
        </div>
      </div>
            <Footer/>
        </div>
        </div>
        </div>
    );
}