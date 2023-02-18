import React from 'react';
import {useState} from "react";
import Footer from "../home/Footer"
const Visa = () => {

    const [visa, setVisa] = useState(true);
    const [inmigration, setInmigration] = useState(false);
    const [restrictions, setRestrictions] = useState(false);
    const [quarantine, setQuarantine] = useState(false);

    const one = () => {
        setVisa(false);
        setInmigration(true);
        setRestrictions(false);
        setQuarantine(false);
    }

    const two = () => {
        setVisa(false);
        setInmigration(false);
        setRestrictions(true);
        setQuarantine(false);    
    }

    const three = () => {
        setVisa(false);
        setInmigration(false);
        setRestrictions(false);
        setQuarantine(true);
    }

    const four = () => {
        setVisa(true);
        setInmigration(false);
        setRestrictions(false);
        setQuarantine(false);
    }

  return (
    <div className=''>
    <div className='flex justify-center py-10'>
        <p className='text-4xl font-bold text-black'>VISA</p>
    </div>
    <div className='flex justify-center'>
        <div className='grid grid-cols-4 w-11/12 sm:w-4/5'>
            <div onClick={four} style={{background: visa ? "#48bb78" : "#ffff"}} className='flex px-2 justify-center border items-center cursor-pointer border-gray-400'>
                <p className='text-sm sm:text-lg font-bold py-5 text-black'>VISA</p>
            </div>
            <div onClick={one} style={{background: inmigration ? "#48bb78" : "#ffff"}} className='flex px-2 justify-center border items-center cursor-pointer border-gray-400'>
                <p className='text-sm sm:text-lg font-bold py-5 text-black'>Inmigration</p>
            </div>
            <div onClick={two} style={{background: restrictions ? "#48bb78" : "#ffff"}} className='flex px-2 justify-center border items-center cursor-pointer border-gray-400'>
                <p className='text-sm sm:text-lg font-bold py-5 text-black'>Restricted items</p>
            </div>
            <div onClick={three} style={{background: quarantine ? "#48bb78" : "#ffff"}} className='flex px-2 justify-center border items-center cursor-pointer border-gray-400'>
                <p className='text-sm sm:text-lg font-bold py-5 text-black'>Animal/Plant quarantines</p>
            </div>
        </div>
    </div>
    {visa &&
    <div className='py-10 '>
      <div className='flex justify-center'>
      <div className='w-5/6 sm:w-2/3'>
        <p className='text-lg text-gray-600'>
        Are you preparing to visit Korea? <br/><br/>
        1. Check for visa requirement based on the nationality of your passport<br/>
        2. If a visa is required, you must apply for a visa based on the purpose of your visit <br/>
        3. Entrants with a visa waiver must apply for K-ETA and receive approval 72 hours prior to departure <br/>
        </p>
      </div>
      </div>
      <div className='flex justify-center'>
      <div className='py-5 w-5/6 sm:w-2/3'>
        <p className='text-lg text-gray-600'>Citizens from the following countries are exempted from the VISA requirements: Chile, Colombia, Ecuador, ... </p>
      </div>
      </div>
      <div className="flex justify-center">
      <div className='pb-5 w-5/6 sm:w-2/3'>
        <p className='text-lg text-gray-600'>If you are not a citizen from the countries listed above, follow these guidelines in order to obtain a VISA</p>
      </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex w-5/6 sm:w-2/3 items-center'>
        <button className='bg-green-500 py-2 text-lg px-4 text-white font-semibold rounded'>Step one</button>
        <p className='pl-5 text-black text-lg font-bold'>Register</p>
      </div>
      </div>
      <div className='flex justify-center'>
      <div className='w-5/6 sm:w-2/3 py-5'>
        <p className='text-lg text-gray-600'>K-ETA has been in place since September 1, 2021, and allows visa-free entry. Without K-ETA, travelers cannot board planes or ships heading to Korea. </p>
      </div>
      </div>
      <div className='flex justify-center pb-5'>
      <div className='w-5/6 sm:w-2/3 flex justify-start'>
        <div className='border p-4 text-lg font-semibold text-green-500 border-green-500 cursor-pointer bg-white hover:text-white hover:bg-green-500 w-3/5 sm:w-1/3'>
            <p className="">ETA Website (Spanish, English)</p>
        </div>
      </div>
      </div>
      <div className='flex justify-center'>
      <div className='flex w-5/6 sm:w-2/3 items-center'>
        <button className='bg-green-500 py-2 text-lg px-4 text-white font-semibold rounded'>Step two</button>
        <p className='pl-5 text-black text-lg font-bold'>Enter information</p>
      </div>
      </div>
      <div className='flex justify-center'>
      <div className='w-5/6 sm:w-2/3 py-5'>
        <p className='text-lg text-gray-600'>If you enter your information on Q-CODE prior to boarding, you can scan the QR code upon arrival at the quarantine checkpoint.</p>
      </div>
      </div>
      <div className='flex justify-center'>
      <div className='w-5/6 sm:w-2/3 flex justify-start'>
        <div className='border p-4 text-lg font-semibold  border-green-500 text-green-500 cursor-pointer bg-white hover:text-white hover:bg-green-500 w-3/5 sm:w-1/3'>
            <p className=''>ETA Website (Spanish, English)</p>
        </div>
      </div>
      </div>
      <div className='flex justify-center pt-10'>
      <div className='w-5/6 sm:w-2/3'>
        <p className='text-4xl font-semibold text-black py-5'>Quarantine Checkpoint Procedure</p>
        <p className='text-xl font-semibold text-black pb-5'>Entry by airport</p>
        <p className='text-lg font-semibold text-gray-500 pb-5'>(Q-CODE non-user) Follow provided instructions to enter health status information on Q-CODE and show QR code to scan and check entrant information</p>
        <p className='text-xl font-semibold text-black pt-10 pb-5'>Entry by port</p>
        <p className='text-lg font-semibold text-gray-500 pb-5'>(Q-CODE non-user) Follow provided instructions to enter health status information on Q-CODE and show QR code to scan and check entrant information</p>
      </div>
      </div>
      <div className='w-2/3'>
        <iframe></iframe>
      </div>
    </div>
    }
    {inmigration &&
    <div className='py-10'>
    <div className=''>
      <div clasName="">
      <div className="flex justify-center">
      <p className=' text-xl sm:text-3xl font-semibold text-black py-5'>Immigration Clearance</p>
      </div>
      <div className="flex justify-center">
        <div className="w-5/6 sm:w-3/4">
        <hr className='border-2 border-gray-500 w-full mb-5'></hr>
        <p className='text-lg text-gray-500 pb-10'>Any inbound foreign visitor who is age 17 or older entering the Republic of Korea (herein after Korea) through any port or airport is required to go through a mandatory fingerprint and facial recognition registration process. The registration process is waived for the following persons: foreign government officials and international organization representatives, as well as their family members; and visitors with an official invitation from the central government of Korea.</p>
        </div>
        </div>
        <div className="flex justify-center">
        <div className="w-5/6 sm:w-3/4">
        <p className='text-xl sm:text-3xl font-semibold text-black pb-5'>Manned Immigration Clearance Procedure</p>
        <hr className='border-2 border-gray-500 w-full mb-5'></hr>
        <p className='text-lg text-gray-500'>Any inbound foreign visitor who is age 17 or older entering the Republic of Korea (herein after Korea) through any port or airport is required to go through a mandatory fingerprint and facial recognition registration process. The registration process is waived for the following persons: foreign government officials and international organization representatives, as well as their family members; and visitors with an official invitation from the central government of Korea.</p>
        <p className='text-xl pt-10 sm:text-3xl font-semibold text-black pb-5'>Automated Immigration System (Smart Entry Service)</p>
        <hr className='border-2 border-gray-500 w-full mb-5'></hr>
        </div>
        </div>
        <div>
        <div className='flex justify-center'>
        <div className="w-5/6 sm:w-3/4">
        <p className='text-lg text-gray-500'>1. Automated Immigration System is available to registered foreigners who are ages 17 or older. <br/>
        2. Automated Immigration System is available upon departure at specific airports for foreigners ages 17 or older who have provided their biometric information (fingerprints & photo) upon arrival and have entered Korea on a visa waiver, B1, or B2 visa.
        </p>
        <p className='text-black text-xl font-semibold py-5'>Automated Immigration Clearance procedure</p>
        <p className='text-lg text-gray-500'>1. Scan your passport <br/>
        2. Enter the auto-gate <br/>
        3. Scan your registered fingerprint for verification <br/>
        4. Look at the camera for facial recognition
        </p>
        </div>
        </div>
      </div>
        </div>
        </div>
        <div className='flex justify-center'>
      <div className='w-5/6 sm:w-3/4'>
      <div className='py-10 flex justify-center sm:justify-start'>
            <div className='border border-gray-500 rounded-lg pl-5 pl-5 pr-5 pb-5'>
                <p className='pt-10 text-xl font-semibold text-green-500'>
                More Info
                </p>
                <p className='text-lg py-3 font-semibold text-black'>
                    Jorge Chávez International Airport Immigration Guide: <a href="https://rla.unc.edu/Teaching/mop/LimaAirport.htm#IMMIGRATIONS" className="cursor-pointer pl-2 underline decoration-solid text-base font-light text-blue-600" target="_blank">https://rla.unc.edu/Teaching/mop/LimaAirport.htm#IMMIGRATIONS</a>
                </p>
                <p className='text-lg py-3 font-semibold text-black'>
                    Peru Immigration Service website: <a href="http://www.consulado.pe/es/londres/tramite/Paginas/Visas.aspx" target="_blank" className="pl-2 cursor-pointer text-base font-light underline decoration-solid text-blue-600">http://www.consulado.pe/es/londres/tramite/Paginas/Visas.aspx</a>
                </p>
                <p className='text-lg py-3 font-semibold text-black'>
                    Peru 1330 Travel Hotline: (+511) 574 800
                </p>
            </div>
        </div>
      </div>
      </div>
    </div>}
    {restrictions &&
    <div className='py-10 flex justify-center'>
      <div className="w-5/6 sm:w-2/3">
            <p className='pt-10 pb-5 text-lg text-gray-500'>Travelers entering or leaving Korea should be aware of certain restricted items that are not to be carried into or out of the country. Prohibited items carried into the country will be confiscated. In addition, any passenger found to be carrying a prohibited or restricted item during the Customs investigation is subject to punishment in accordance with the Korean laws regarding customs.</p>
            <p className='text-black text-xl font-bold pb-5'>Prohibited Items</p>
            <p lassName='pb-10 text-lg text-gray-500'>Books, photos, films, and other items of similar nature that are in violation of constitutional orders, or may be harmful to public peace and customs. <br/><br/> Items that contain confidential information on government or intelligence activities. <br/><br/> Counterfeit, forged, or fake money, bank notes, bonds, and other securities. </p>
            <p className='text-black text-xl font-bold pt-10 pb-5'>Restricted Items</p>
            <p lassName='pb-10 text-lg text-gray-500'>The items listed below are restricted from entry to Korea.<br/><br/> All weapons (including replicas & decorations) such as guns & swords, as well as gunpowder, explosives, toxins, etc.<br/><br/> Illegal drugs such as opium, marijuana/cannabis, cocaine, etc.</p>
            <p className='text-black text-xl font-bold pt-10 pb-5'>Prohibited & Restricted Items Aboard Aircrafts</p>
            <p lassName='pb-10 text-lg text-gray-500'>Following Article 44 of the Aviation Safety and Security Act of Korea, certain items are prohibited and/or restricted from being carried on the flight. Passengers found to be carrying any of the prohibited or restricted items listed below are subject to punishment in accordance with the law.</p>
            <div className='pt-5 pb-10 flex w-2/3 justify-start'>
            <div className='border pt-10 pl-5 pr-5 pb-5 w-full rounded-lg border-gray-500'>
                <p className='pb-5 text-xl font-semibold text-black'>
                Prohibited items onboard
                </p>
                <p className='text-lg py-3 text-green-500'>
                Dangerous items are prohibited from being carried on, but may be allowed in checked-in baggage. Note that firearms can be checked-in only after confirming the necessary documents (ownership confirmation, holders permit, etc.) and storing the firearm separately from the ammunition. Self-protection sprays are limited to one bottle (less than 100 ml) per passenger.
                </p>

            </div>
        </div>
        <p className='text-lg sm:text-xl text-green-500 font-semibold py-5'>Detailed information about prohibited & restricted items</p>
        <p lassName='text-lg sm:text-lg text-black font-semibold py-5'>Korea Customs Service website: <br/><br/> Incheon International Airport website:</p>
       </div>
    </div>}
    {quarantine &&
        <div className='py-10 flex justify-center'>
      <div className="w-5/6 sm:w-2/3">
            <div className="py-10">
            <p className='text-black text-3xl font-semibold pb-4'>Animal Quarantine</p>
            <p lassName='pb-10 text-xl text-gray-500'>Travelers carrying live animals and/or animal products (leather, animal feed, etc.), those who have recently visited a farm or those who work with animals (veterinarian, feed supplier, etc.) must undergo the appropriate inspection procedure. In particular, all live animals and animal products entering Korea must be accompanied by valid quarantine or heat treatment certificates issued by the country of departure. For detailed information on animal quarantine, please contact the Animal and Plant Quarantine Agency (APQA) and or the airport quarantine office.</p>
            </div>           
            <div className="pb-10">
            <p className='text-black text-3xl font-semibold pb-4'>Items to be Declared</p>
            <p lassName='pb-10 text-xl text-gray-500'>Meat and poultry items such as beef, pork, lamb, chicken, etc. Processed meat products such as ham, sausage, beef jerky, marinated beef, canned meats, etc. Animal bone items such as antlers, bones, horns, tusks, etc. Egg products such as whole eggs, egg whites, powdered eggs, etc. Dairy products such as milk, cheese, butter, etc.</p>
            </div>
            <div className="pb-10">
            <p className='text-black text-3xl font-semibold pb-4'>Prohibited iItems</p>
            <p className='pb-10 text-xl text-gray-500 mb-10'>Items originating from or passing through prohibited regions (including live animals and processed meats)</p>
            </div>
            <div className='pt-5 pb-10 flex w-5/6 sm:w-2/3 justify-start'>
            <div className='border rounded-lg w-full p-5 border-gray-500'>
                <p className='pt-10 text-2xl font-semibold text-black'>
                Prohibited items onboard
                </p>
                <p className='text-lg py-3 text-green-500'>
                Dangerous items are prohibited from being carried on, but may be allowed in checked-in baggage. Note that firearms can be checked-in only after confirming the necessary documents (ownership confirmation, holders permit, etc.) and storing the firearm separately from the ammunition. Self-protection sprays are limited to one bottle (less than 100 ml) per passenger.
                </p>
            </div>
        </div>
        <p className='text-lg sm:text-xl text-green-500 font-semibold py-5'>Detailed information about prohibited & restricted items</p>
        <p lassName='text-lg sm:text-lg text-black font-semibold py-5'>Korea Customs Service website: <br/><br/> Incheon International Airport website:</p>
       </div>
       </div>
  }
<Footer/>
</div>
  );
};

export default Visa;