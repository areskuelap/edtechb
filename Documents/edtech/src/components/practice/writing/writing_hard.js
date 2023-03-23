import Head from 'next/head'
import React from "react";
import { useState, useEffect } from 'react';


const WritingHard = () => {

	const questions = [
		{
			questionText: '',
			answer: ""
		},
    		{
			questionText: '',
			answer: ""
		},
		{
			questionText: '',
			answer: ""
		},
		{
			questionText: '',
			answer: ""
		},
    		{
			questionText: '',
			answer: ""
		},
		{
			questionText: '',
			answer: ""
		},
		{
			questionText: '',
			answer: ""
		},
    		{
			questionText: '',
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

	const handleAnswerOptionClick = () => {
		const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    const nextAnswer = currentAnswer + 1;
    setCurrentAnswer(nextAnswer);
    setButtonText(current => !current);
	};

  const changeIt = () => {
    setShowMessage(false);
    setInputValue("");
    setWordCount(0);
    setButtonText("Submit");
  }

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

  const [buttonText, setButtonText] = useState("Submit");

  const handleClick = () => {
    setButtonText("Retry");
  }

  function submit(){
    setShowMessage(!showMessage);
  }

  return(
    <div>
    <Head>
        <title>Detly</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <main>
      <div className=''>
      <div className='flex items-end pt-10 pb-10'>
      <div className='w-1/2 sm:w-3/4'>
      </div>
      <div className='flex'>
      </div>
      </div>
      <div className="flex justify-center">
      <div className='pb-2 flex justify-center w-3/4 sm:w-3/5'>
        <p className='text-2xl font-bold text-center'>Write about the topic below for five minutes</p>
      </div>
      </div>
      <div className='flex justify-center'>
      <div className="pt-10 pb-10 flex w-3/4 sm:w-2/5">
        <p className="text-lg text-left">{questions[currentQuestion].questionText}</p>
        </div>
        </div>
        <div className='flex justify-center'>
      <div className='pb-2 flex justify-center w-3/4 sm:w-2/5'>
      <textarea value={inputValue} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-4 border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none"
      id="texta"
      onChange={handleUserInput}
      rows="6"
      placeholder="Type your answer here"
    ></textarea>
     </div>
     </div>
      <div className='flex justify-center w-2/5 sm:w-2/3'>
      <div className='pt-3'>
      <p className='text-lg font-bold'>Word count: {wordCount}</p>
      </div>
      </div>
      <div className='flex justify-center pt-10'>
        <hr className='w-4/5 sm:w-1/2 border-2'></hr>
        </div> 
        <div className='flex justify-center'>
        {showMessage && <div className='w-3/4 sm:w-3/5 pt-5 pb-5'>
          <p className='text-xl font-bold'>Sample answer</p>
          <p className='text-lg text-left'>{questions[currentQuestion].answer}</p>
        </div>}
      </div>
      <div className='flex pt-10 pb-20'>
      <div className='flex w-1/2 justify-center'>      
        <button onClick={()=>{ submit(); handleClick() }}  className="bg-orange-400 px-3 hover:bg-orange-500 text-white font-bold py-2 border border-orange-400 rounded">{buttonText}</button>
      </div>
      <div className='flex w-1/2 content-center justify-center'>
      <button onClick={()=>{ handleAnswerOptionClick(); changeIt() }} className="button bg-orange-400 px-3 hover:bg-orange-500 text-white font-bold py-2 border border-orange-400 rounded">Next</button>
      </div>
      </div>
      </div>
      </main>
    </div>
  );
}

export default WritingHard;