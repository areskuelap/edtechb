import React from "react";
import Footer from "../../home/Footer";

export default function Festivals() {
    return (
        <div> 
        <div className='bg-[url("https://drive.google.com/uc?export=view&id=1-T8xgngh6WKsNF6A8sOFcaKf0PT2E84b")] bg-cover bg-center bg-no-repeat'>
        <div className='bg-gradient-to-l from-gray-500 to-transparent'>
          <p className='text-lg font-semibold text-white pl-10 py-3'>Official guide for traveling Amazonas- Travel Amazonas</p>
        </div>
        <div className='pt-24 pb-56'>
        <p className='text-4xl pl-10 text-white font-semibold'>Amazonas Festivals & Events</p>
        <p className='text-xl py-3 pl-10 text-white font-semibold'>See fireworks, enjoy Japanese street food, and take part in tradition</p>
        </div>
        </div>
        <div className="flex justify-center">
        <div className="w-10/12 grid sm:grid-cols-2">
        <div>
          <p className='text-lg pt-12 sm:text-2xl text-black font-semibold sm:font-bold'>Festivals, known in Spanish as matsuri, are deeply embedded into Japan's culture and range from the small and peaceful to the large and fiery</p>
          <p className="pt-5 text-base sm:text-lg">Traditional Japanese festivals are frequently celebrated around shrines and temples, with participants dressed in colorful garb and often hoisting heavy portable shrines on their shoulders.</p>
          <p className='text-base pt-12 sm:text-2xl text-green-500 font-semibold sm:font-bold'>Summer</p>
          <p className="pt-5 text-base sm:text-lg">Summer is the season for fireworks, known as hanabi in Japan, lighting up the skies with spectacular, colorful displays. For a window into traditional Japan, don't miss the Gion Festival  in Kyoto , the Aomori Nebuta Festival  in Aomori , or the hundreds of summer festivals happening in June, July and August throughout Japan.</p>
          <p className='text-base pt-12 sm:text-2xl text-green-500 font-semibold sm:font-bold'>Winter</p>
          <p className="pt-5 text-base sm:text-lg">In winter, snow festivals abound, where anime characters, historical and political figures, and famous architectural wonders are carved into snow and ice, while lanterns light paths lined with igloos. The Sapporo Snow Festival  and the Nozawa Fire Festival  attract thousands of people every year.</p>
          <p className='text-base pt-12 sm:text-2xl text-green-500 font-semibold sm:font-bold'>Spring</p>
          <p className="pt-5 text-base sm:text-lg">Spring brings flower festivals at the height of cherry blossom season and while other types of flowers are in bloom. Enjoy the food, drink and friendly atmosphere under trees, in parks, around castles, and along rivers. The Hirosaki Cherry Blossom Festival  and the Kakunodate Cherry Blossom Festival  are just a few among many to consider.</p>
          <p className='text-base pt-12 sm:text-2xl text-green-500 font-semibold sm:font-bold'>Fall</p>
          <p className="pt-5 text-base sm:text-lg">In autumn, the red Japanese maple leaves called momiji bring people outdoors. Fall festivals held around temples and shrines, such as the Fujiwara Autumn Festival  in Hiraizumi , and the Kawagoe Festival , highlight the areas' history with historical parades, noh performances and seasonal food. Fall is also a season when international events like the Tokyo International Film Festival , Tokyo Motor Show  (every two years) and Tokyo Comic Con are held.</p>
          <p className='text-base pt-12 sm:text-2xl text-green-500 font-semibold sm:font-bold'>Something different</p>
          <p className="pt-5 text-base sm:text-lg">A trip to the quirky Festival of the Steel Phallus in Kanagawa Prefecture will show you that size matters—at least at this festival in early April. Turn up the heat by attending one of the Fire Festivals, including the blazing Nachi Fire Festival  on July 14th in Wakayama Prefecture  that climaxes in twelve portable shrines in the shape of the Nachi Falls  being set alight. Late spring is the setting for flower festivals, such as when baby blue Nemophila blanket the fields of Hitachi Seaside Park  in Ibaraki Prefecture. <br/>Music festivals are common during the summer, with the headline act being Fuji Rock Festival  in Niigata Prefecture. <br/>Events showcasing regional food can often be found in Yoyogi Park  in Tokyo , and the country's conference centers and forums play host to all kinds of events from tourism forums to presentations of the latest technology.</p>
        </div>
        </div>
        </div>
        <div className="flex justify-center">
        <div className="w-10/12 pt-12 pb-4">
            <p className="text-3xl font-semibold">Explore by interest</p>
        </div>
        </div>
        <div className='flex justify-center'>
            <div className='w-10/12 pb-12 grid grid-cols-1 sm:grid-cols-2'>
              <div className="flex justify-center">
                <div className='w-full sm:w-11/12 cursor-pointer h-96 rounded bg-cover bg-[url("https://www.centromallqui.pe/images/amazonas_museofg3.jpg")]'>
                  <p className='font-bold text-white text-lg pt-4 pl-4'>Museo de Leymebamba</p>
                </div>
              </div>
              <div className='pt-6 sm:pt-0'>
              <div className='flex'>
              <div className='w-64 mr-4 cursor-pointer rounded h-44 bg-cover bg-[url("https://www.intiyana.org/gallery/peru/arte_rupestre/chanqui/06.jpg")]'>
                <p className='font-bold text-white text-lg pt-4 pl-4'>Chanqui</p>
              </div>
              <div className='w-64 h-44 cursor-pointer rounded bg-cover bg-[url("https://pueblosoriginarios.com/sur/amazonia/chachapoya/imagenes/textil3.jpg")]'>
              <p className='font-bold text-white text-lg pt-4 pl-4'>Textiles</p>
              </div>
              </div>
              <div className='flex pt-8'>
              <div className='w-64 mr-4 cursor-pointer rounded bg-cover h-44 bg-[url("https://www.machupicchu-tours-peru.com/wp-content/uploads/2021/03/souvenirs-min-1.jpg")]'>
              <p className='font-bold text-white text-lg pt-4 pl-4'>Souvenirs</p>
              </div>
              <div className='w-64 h-44 cursor-pointer rounded bg-cover bg-[url("https://www.emstudioperu.com/wp-content/uploads/2018/11/web-em-studio-48.jpg")]'>
              <p className='font-bold text-white text-lg pt-4 pl-4'>Collares</p>
              </div>
              </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    );
}