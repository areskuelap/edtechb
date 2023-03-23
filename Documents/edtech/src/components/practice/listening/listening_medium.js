import Head from 'next/head'
import React from "react";
import { useState, useEffect } from 'react';
import ReactPlayer from "react-player";

const ListeningMedium = () => {


	const sources = [
		{
			source: "https://drive.google.com/uc?export=view&id=",
			answer: ""
		},
		{
			source: "https://drive.google.com/uc?export=view&id=",
			answer: ""
		},
    		{
			source: "https://drive.google.com/uc?export=view&id=",
			answer: ""
		},
		{
			source: "https://drive.google.com/uc?export=view&id=",
			answer: ""
		},
		{
			source: "https://drive.google.com/uc?export=view&id=",
			answer: ""
		},
    		{
			source: "https://drive.google.com/uc?export=view&id=",
			answer: ""
		},
		{
			source: "https://drive.google.com/uc?export=view&id=",
			answer: ""
		},
		{
			source: "https://drive.google.com/uc?export=view&id=",
			answer: ""
		},
    		{
			source: "https://drive.google.com/uc?export=view&id=",
			answer: ""
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

export default ListeningMedium;
