import Head from 'next/head'
import React from "react";
import { useState, useEffect } from 'react';
import ReactPlayer from "react-player";

const ListeningEasy = () => {


	const sources = [
		{
      source: "https://drive.google.com/uc?export=view&id=1SWBr-6-KISBXjA03cgeG50PvzKoea7NO",
      answer: "The driving conditions are tough in winter."		
    },
		{
			source: "https://drive.google.com/uc?export=view&id=1yhQYzrr6-Ydu9l6GjyxW-q7WNZtVdofm",
			answer: "I am going to learn a lot from this course."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1fdyFCopgbrJ_9h54jh-oqQ_naU3fchtZ",
			answer: "Are you ready for the party?"
		},
    {
			source: "https://drive.google.com/uc?export=view&id=175GROjatXl4-Ti4ENwD_GD609A4AT9Oa",
			answer: "Can you repeat your question?"
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1GKH8IMUQj7T5EhcIh6fY-45xIEeIePo5",
			answer: "Is this product available online?"
		},
    {
			source: "https://drive.google.com/uc?export=view&id=1zvm15oljrltqkZh07oSPCTTAN8SyumzQ",
			answer: "The government introduced new property laws recently."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1U95-a1e1y9PnhPY_rRBYEPpG_Pt5qwB5",
			answer: "There was a heavy snowfall on my way back from work."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1Icjq1SLm-SOgX-LqLwSSCgNa1e0PnBdP",
			answer: "A leopard is considered the fastest of all other animals."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1wDtMM1O7ZMLKS5CzH5zhN1P9U_KEpd1o",
			answer: "The newly elected president made his first speech."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=15cX8O5DkFYm4aucEYd6O3tejRpwGPFhi",
			answer: "The flight departed at 11 o’clock."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1m5bLvaQrdjJ6wxQ88EJPeMwcO-PS_Z-e",
			answer: "Raindrops fall to Earth when clouds become saturated, or filled, with water droplets."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1YZgCDLSJeKvzKAW8wJlSrLK1KAHVn2eG",
			answer: "We are going to the movies on the weekend."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=16FSlObZoJIgWy1H6Pjt7TzdZQbtvVt1c",
			answer: "He will be visiting his grandparents soon after his exams are over."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1NY_BOuW-83tJXh9LxgCgMmbnIrsaA5r8",
			answer: "Are you curious about how the story ended?"
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1TWLTT9SDvPpRzYQOVEGQy7Fk4V8zO4KR",
			answer: "Our teacher suggested us some books to read."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1JGjJfZBaS-f-w0oLMl1DqSAurNom5Nby",
			answer: "You wanted to become a public speaker, didn’t you?"
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1NU4Nh0Qbq-NE0I7NFO8p9sKqfTl6puxF",
			answer: "Are you familiar with the culture of this city?"
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1813flWT_zQhSr3fzoj5YkYeOZIorBcvw",
			answer: "We have some great historical monuments in our country."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1WJJOTxX1tENthml1Kaf3Gh1yuXlDUGG3",
			answer: "Finally, he saved enough money to get a new car."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=13nLXep8Gdi617MIyzBLDi-WLSeemZGbs",
			answer: "Buying a new house in an urban area is getting close to impossible."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1KtxKFHpscfdEo7UcMARuDoXdgSqzgZx1",
			answer: "The battery of my cellphone lasts for uptown 12 hours."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1JStoN9JJeeO-tj-zLcNELuwxpK_pDXdE",
			answer: "Are you ready for the party?"
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1dYLj5rXHzBbTHCFR7fCNqegXiz-pgYuY",
			answer: "Change is the spice of life."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1ZZw4hdQOU-dKHKfhUPBzYdwvu02Kz4zA",
			answer: "The meadow was full of plants and trees of various kinds."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1fSQoAEahvGby1Aac-eMZDhedyO3U7U1r",
			answer: "I will visit my grandparents this summer."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=10AeRyFHhRR_5yxGQvwz0ggpnBxJ8bG-w",
			answer: "Can I borrow your pen for a minute?"
		},
		{
			source: "https://drive.google.com/uc?export=view&id=12xxvRHmwA52Y8F-QsTiX7bvj78iQ16L6",
			answer: "He is one of the best students in the class."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1C1jS71KEi-DrMMUxrZmhI5qqWVPV3J1O",
			answer: "The movie was so interesting; we watched it twice."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1MXbRqyGJhAfJsFLlAJmxH7XZSVTJDfkD",
			answer: "I have a green love for classic novels."
		},
    {
			source: "https://drive.google.com/uc?export=view&id=1iB3uaGj6WN0ytWP7M_M5DUpHsKnINJmT",
			answer: "She greatly resembles her grandmother."
		},
	];

  const [inputValue, setInputValue] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
    setText(e.target.value);
  };

  useEffect(() => {
    const words = text.split(' ');
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);
  }, [text]);

	const handleAnswerOptionClick = () => {
		const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    const nextAnswer = currentAnswer + 1;
    setCurrentAnswer(nextAnswer);
    setButtonText(current => !current);
	};
  const changeIt = () => {
    setShowMessage();
    setInputValue("");
    setButtonText("Submit");
    setWordCount(0);
  }

  const [buttonText, setButtonText] = useState("Submit");

  const handleClick = () => {
    setButtonText("Try again");
  }

  function submit(){
    setShowMessage(!showMessage);
  }

  return (
    <div className="">
      <Head>
        <title>Detly</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <main>
      <div className=''>
      <div className='flex justify-center'>
        <p className='pb-5 pt-10 w-4/5 sm:w-full text-2xl font-bold text-center'>Type the audio that you hear</p>
      </div>
      <div className='flex justify-center'>
      <div className="pb-10 flex w-3/4 sm:w-1/3 flex justify-center">
      <ReactPlayer
        url={sources[currentQuestion].source}
        width="250px"
        height="80px"
        playing={false}
        controls={true}
      />
        </div>
        </div>
        <div className='flex justify-center'>
      <div className='pb-2 flex justify-center w-3/4 sm:w-2/5 '>
      <textarea value={inputValue} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-4 border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
      id="texta"
      rows="6"
      onChange={handleUserInput}
      placeholder="Type your answer here"
    ></textarea>
     </div>
     </div>
     <div className='flex justify-center w-2/5 sm:w-2/3'>
      <div className='pt-3'>
      <p className='text-lg font-bold'>Word count: {wordCount}</p>
      </div>
      </div>
      <div className='flex justify-center'>
        {showMessage && <div className='w-3/4 sm:w-2/5 pt-5 pb-5'>
          <p className='text-xl font-bold'>Answer</p>
          <p className='text-lg text-left'>{sources[currentQuestion].answer}</p>
        </div>}
      </div>
      <div className='flex pt-10 pb-20'>
      <div className='flex w-1/2 justify-center'>      
        <button onClick={()=>{ submit(); handleClick() }} className="bg-orange-400 px-3 hover:bg-orange-500 text-white font-bold py-2 border border-orange-400 rounded">{buttonText}</button>
      </div>
      <div className='flex w-1/2 content-center justify-center'>
      <button onClick={()=>{ handleAnswerOptionClick(); changeIt() }} className="bg-orange-400 px-3 hover:bg-orange-500 text-white font-bold py-2 border border-orange-400 rounded">Next</button>
      </div>
      </div>
      </div>
      </main>
    </div>
  )
}

export default ListeningEasy;
