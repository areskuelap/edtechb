import React, { useState } from "react";

const Lectures = () => {
const [listening, setListening] = useState(false);

const toggleListening = () => {
setListening(!listening);
};

return (
<div className="flex justify-center">
<div className="w-4/5 grid grid-cols-2 gap-4 rounded-lg border my-16 border-gray-100 shadow-lg">
<div className="w-3/4 ml-2">
<div className="border-2 cursor-pointer rounded-t-lg border-gray-500 mt-8 bg-blue-600">
<p className="text-white font-bold text-xl py-4 text-center">Overview</p>
</div>
<div
         onClick={toggleListening}
         className="cursor-pointer border-2 border-gray-500 bg-blue-600"
       >
<p className="text-white font-bold text-xl py-4 text-center">Watch more</p>
</div>
{listening && (
<div>
<div className="border-2 border-gray-500 bg-blue-600">
<p className="text-white font-bold text-xl py-4 text-center">Writing</p>
</div>
<div className="border-2 border-gray-500 bg-blue-600">
<p className="text-white font-bold text-xl py-4 text-center">Listening</p>
</div>
<div className="border-2 border-gray-500 bg-blue-600">
<p className="text-white font-bold text-xl py-4 text-center">Literacy</p>
</div>
</div>
)}
</div>
<div className="flex flex-col justify-center items-center">
<iframe
         src="https://www.youtube.com/embed/7VkY1J9Hs7E"
         className="w-4/5 my-8 h-48 sm:h-80 rounded-lg"
         frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen
       ></iframe>
<div className="text-gray-700 text-xl mt-4">Subtitle: English, Spanish, French</div>
</div>
</div>
</div>
);
};

export default Lectures;