import Footer from "../../home/Footer";

export default function Consumer() {
    return (
        <div> 
        <div className='bg-[url("https://drive.google.com/uc?export=view&id=1w-N8L3eP6p3Knbza4S7g9bCOdoEEZ4Pk")] bg-cover bg-center bg-no-repeat'>
        <div className='bg-gradient-to-l from-gray-500 to-transparent'>
          <p className='text-lg font-semibold text-white pl-10 py-3'>Official guide for traveling Amazonas- Travel Amazonas</p>
        </div>
        <div className='pt-24 pb-56'>
        <p className='text-4xl pl-10 text-white font-semibold'>Amazonas Festivals & Events</p>
        <p className='text-xl py-3 pl-10 text-white font-semibold'>See fireworks, enjoy Japanese street food, and take part in tradition</p>
        </div>
        </div>
        <div className="flex justify-center">
            <div className="w-2/3 mt-12 border-2 border-green-900">
                <p className="text-lg text-gray-600 font-mono p-5">Coronavirus (COVID-19) Travel Alert: Get the latest information, restrictions and guidelines for traveling in Japan at JNTO's coronavirus site.</p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="w-2/3">
                <p className="text-lg text-green-900 font-mono py-10">Create Your Own Story in Japan's National Parks</p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="w-2/3 ">
                <p className="text-lg text-gray-600 font-semibold font-mono">Coronavirus (COVID-19) Travel Alert: Get the latest information, restrictions and guidelines for traveling in Japan at JNTO's coronavirus site.</p>
            </div>
        </div>
        <Footer/>
        </div>
    );
}