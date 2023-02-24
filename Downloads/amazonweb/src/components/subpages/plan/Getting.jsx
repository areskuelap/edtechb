import ImageGallery from 'react-image-gallery';
import Footer from "../../home/Footer";

export default function Getting() {

    return (
        <div>
        <div className='bg-[url("https://drive.google.com/uc?export=view&id=1tQzmi1wTJgr7lRnvPlTfanXnb7OL9_V5")] bg-cover bg-center bg-no-repeat'>
        <div className='bg-gradient-to-l from-gray-500 to-transparent'>
          <p className='text-lg font-semibold pl-10 py-3'>Official guide for traveling Amazonas- Travel Amazonas</p>
        </div>
        <div className='pt-24 pb-56'>
        <p className='text-4xl pl-10 font-semibold'>Wonder around</p>
        <p className='text-xl py-3 pl-10 font-semibold'>Reach any place easily</p>
        </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/6">
          <div className='w-3/4'>
          <p className='text-3xl pt-12 text-black font-bold'>For many, Japan has remained a highly desirable destination located too far out of reach—bright neon lights, high-tech robotics, geisha mystique and small samurai villages that just remained dreams</p>
          </div>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="w-4/6">
        <div className='w-3/4'>
          <p className="pt-5 text-lg">However, travel to Japan has never been more accessible to the outside world. Multiple airports handle international flights, including those in Tokyo and Osaka as well as Naha and Fukuoka. For the intrepid traveler, arriving by boat to Japan is an alternative option.</p>
          <p className='text-3xl text-black font-bold'>By Plane</p>
          <p className="pt-5 text-lg">Japan's main airport hubs are situated just outside the major cities of Tokyo and Osaka. Narita Airport  sits an hour-long express train ride from Tokyo in the neighboring prefecture of Chiba. Servicing most global destinations, along with a whole host of domestic flights, the airport is rightfully known as the gateway to Japan. For a better view of the airport, click here - Narita Airport: Narita Airport homepage</p>
          <p className='text-3xl text-black font-bold'>By Boat</p>
          <p className="pt-5 text-lg">It is also possible to reach Japan by sea. The southern area of South Korea is surprisingly close to the Japanese archipelago, and ferries travel between cities such as Busan in South Korea and cities such as Kyushu and Osaka. The price of a ticket really depends on the longevity of your sea-legs. High-speed ferries can transport you from Hakata  to Busan 3 hours 40 minutes for around 16,000 yen; however a journey to Osaka  on the more laid-back Kampu Ferry takes a full twelve hours, but more wallet-friendly at under 10,000 yen.</p>
        </div>
        </div>
        </div>
        <div className="flex justify-center pt-5 pb-10">
            <div className="w-4/6">
            <div className="bg-gray-100 w-2/3 mt-5 rounded-lg border border-gray-100">
            <div>
                <p className='ml-5 my-5 text-3xl text-black font-bold'>Did this information help you?</p>
            </div>
            <div className="grid grid-cols-2 my-5">
            <div className="flex">
            <button className="py-2 px-6 rounded-lg border-gray-500 bg-white text-xl text-red-500 font-bold ml-5 mr-5 hover:bg-gray-200">Yes</button>
            <button className="py-2 px-6 rounded-lg border-gray-500 bg-white text-xl text-red-500 font-bold hover:bg-gray-200">No</button>
            </div>
            <div></div>
            </div>
            </div>
            </div>
        </div>
        <div className='bg-red-100'>
          <div className='flex justify-center py-10'>
            <div className='w-3/4'>
            <p className='ml-5 my-5 text-3xl text-black font-bold'>Recommended for You</p>
            </div>
          </div>
          <div className='flex justify-center pb-5'>
            <div className='w-3/4 grid grid-cols-4'>
            <div>
              <img className='rounded-sm w-11/12' src='https://tse3.mm.bing.net/th?id=OIP.cUqDergMSivl2nSYwIUsOQHaE8&pid=Api'/>
              <p className='text-lg font-bold pt-2'>Amazonas trip planning</p>
            </div>
            <div>
              <img className='w-11/12 rounded-sm' src='https://tse3.mm.bing.net/th?id=OIP.cUqDergMSivl2nSYwIUsOQHaE8&pid=Api'/>
              <p className='text-lg font-bold pt-2'>Amazonas trip planning</p>
            </div>
            <div>
              <img className='w-11/12 rounded-sm' src='https://tse3.mm.bing.net/th?id=OIP.cUqDergMSivl2nSYwIUsOQHaE8&pid=Api'/>
              <p className='text-lg font-bold pt-2'>Amazonas trip planning</p>
            </div>
            <div>
              <img className='w-11/12 rounded-sm' src='https://tse3.mm.bing.net/th?id=OIP.cUqDergMSivl2nSYwIUsOQHaE8&pid=Api'/>
              <p className='text-lg font-bold pt-2'>Amazonas trip planning</p>
            </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
}