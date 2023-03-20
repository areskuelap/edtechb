import Head from 'next/head'
import React from "react";
import { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'; 


const WritingEasy = () => {

	const questions = [
		{
			questionText: 'Many people believe that schools should be banned from serving fast food to their students. Do you agree or disagree? Provide reasons.',
			answer: "I agree that children should be banned from eating fast food at school for two important reasons. First, fast food is detrimental to children's health. For instance, fast food is often packed with fat, sugar, salt, and preservatives which makes them extremely unhealthy for children health. In addition, schools should stop from serving fast food it is very expensive. It is a well-known fact that fresh food from a supermarket is significantly cheaper than pre-made fast food. To conclude, for reasons presented above, I believe it is vital that schools stop serving fast food to their students."
		},
		{
			questionText: 'Choose one of the following inventions: the car, the telephone, or the microwave. Explain some of the ways it has changed people’s lives.',
			answer: "Nowadays, most people agree that the telephone has had a tremendous impact on our lives. First of all, phones have evolved over time, and now almost every person on Earth carries one wherever they go. I still remember when I worked in an office in Osaka and they gave me a company phone. I had to be available all day, everyday. One day I went to the movie theater with my girlfriend at the time and the phone rang right in the middle of the film. I did not want to get fired, so I had to take the call and ruin the movie for everyone in the theater. I felt like a dog on a leash, so I quit. Unfortunately, I have had other jobs where I also had to carry a phone with me at all times. While the car and microwave have impacted our world today, no other invention can quite match the massive effect the telephone has had on our lives."
		},
		{
			questionText: 'Describe your favorite teacher. What qualities did you respect most?',
			answer: "Over the years, I have attended many classes and had different types of teachers. One teacher who stands out in my mind as the best teacher I have ever had was my high school history teacher. He was extremely compassionate and would hold study sessions before tests to help students who may have been struggling during a unit. His lectures were engaging, and he kept the students gripped with intrigue as he taught. Furthermore, he always made sure that there were hands-on projects to help us further understand the material. I remember one time we were learning about the House of Representatives and the Senate, so he turned the classroom into Congress to help us understand how it worked. I still think about that project every time I hear about politics in America today. He was so dedicated to making sure his students found success."
		},
    {
			questionText: 'Your local government has decided to improve their community. Do you think they should build a public park, a public library, or a public pool? Provide specific reasons for your opinion.',
			answer: "Your local government has decided to improve their community. Do you think they should build a public park, a public library, or a public pool? Provide specific reasons for your opinion."
		},
		{
			questionText: 'Imagine that your school requires you to join a club. Would you join an athletic club, academic club, or volunteer group? Explain why.',
			answer: "If my school required me to join a club and I had the option to choose between an athletic club, an academic club, or a volunteer group, I would choose to be part of an athletic club. Being part of a team has many different benefits. First, it would give me the opportunity to be part of a group and learn how to collaborate with others. Second, I think that it is important for people to learn to manage their time and become a member of a team. I remember when I was on the soccer team in high school and all of my teammates expected me to be at every practice and every game. There was no way to skip out with a bunch of phony excuses, I had to show up no matter what, which helped me later in life to balance work and play. Another reason why I would opt for an athletic club is because it would allow me to move my body and keep active so I can maintain a healthy lifestyle. While there may be arguments for each of these options, I think that I would benefit the most from being part of an athletic club."
		},
		{
			questionText: 'Modern education increasingly makes use of new technology. What are the benefits of this novel technique?',
			answer: "There are several benefits to using technology to teach students, like fostering a more engaging environment, enhancing teamwork, having more opportunities to connect with international students, etc. Using engaging images to explain complex theories and concepts is another way that technology helps students learn and understand more. For this, utilising technology in the classroom benefits both the students and the teaching approach."
		},
    {
			questionText: 'Many old structures are being demolished or replaced. What might be the possible reasons for this?',
			answer: "The lack of land availability is one of the main causes of historic structures being demolished. More land is required to accommodate houses for the growing population as the world's population is rising. Furthermore, urbanisation is replacing a lot of old buildings. Numerous businesses have been able to annex historic structures in the name of development due to the rapid spread of urbanisation. As a result, as people become oblivious to the changes occurring around them, the value of ancient structures is steadily declining."
		},
		{
			questionText: 'How would you describe your home?',
			answer: "My home is an apartment, not a house. It is a ten-story structure with five apartments on each floor and a total of forty apartments. It is situated in a city and on a very crowded street. | have lived here all my life, and this flat is where | met most of my friends and did group study. We all went to the same elementary school and have maintained close relationships over the years. I have some of the most lovely moments in my life with this house and the little things I used to decorate it."
		},
		{
			questionText: 'Compared to private transportation, public transportation reduces pollution and costs. Which one do you prefer and why?',
			answer: "Personally, I agree entirely with this assertion. The cost of public transportation is lower than that of private transportation Personally, I make use of it every day. However, even though they reduce pollution compared to private transportation, there is no denying the convenience and comfort of having a private vehicle. Owning a private vehicle is an absolute luxury and privilege. However, for large groups of people, public transportation is unquestionably the superior choice"
		},
    {
			questionText: 'While some people contend that the government should fund space technology, others claim that the government should construct hospitals. Which stance do you agree with?',
			answer: "In my opinion, government expenditure on hospitals should always take precedence over funding for space technology. I think there is much potential for human civilisation in space research. it is a luxury, though, for a growing nation like ours. Building quality hospitals is one of the key elements to achieving the improved health care systems that our nation so desperately needs. Although it is perfectly acceptable for the government to invest money in space exploration, it is not acceptable for it to do so at the price of the well-being of its people."
		},
		{
			questionText: 'Nowadays new technology is increasingly being used to teach students. What are the advantages of this new approach?',
			answer: "Using technology to teach students has several advantages such as creating a more engaged environment, improving collaboration, having more scope to connect with the students, etc. Technology also allows teachers to explain complicated theories and concepts to students using attractive visuals, which in turn helps students to learn and understand better. As a result, incorporating technology in the field of teaching has positive effects both on the method of teaching and the students."
		},
		{
			questionText: 'In many countries schools have severe problems with student behavior? What do you think are the causes of this?',
			answer: "Perhaps the most predominant cause of problematic student behavior is a troublesome home environment. Negligence, abuse, lack of affection from parents at home are some of the causes of students developing problematic behavior and expressing them at school. Furthermore, being exposed to negative experiences in life, having wrong companionship, and low mental health are also causes of problems with student behavior. Most importantly, school authorities aren’t trained enough to handle such student behavior, which in turn exacerbates the issue."
		},
    {
			questionText: 'Many historic buildings are being destroyed or replaced. What are the reasons for this?',
			answer: "One of the predominant reasons behind historic buildings being destroyed is shortage of land. As the population of the world continues to rise, more land is needed to accommodate housing for the increasing number of people. Furthermore, many historic buildings are being replaced due to urbanisation. The rapid growth in urbanisation has allowed many companies to take over historic buildings in the name of development. As a result, the value of historic buildings are gradually decreasing as people go unbothered by these changes around them."
		},
		{
			questionText: 'Describe a time when you were extremely happy. What happened?',
			answer: "The last day when I was able to spend time with my entire family was a time when I was extremely happy. It was during the holiday last year and that was the last time I had each and every one of my siblings together at our parents’ house. Now we’re all in different parts of the world, living our lives, trying to make a living. While I do have my fair share of fun every now and then, there is nothing quite like the pure happiness of spending time with your own family."
		},
		{
			questionText: 'Some people argue that the teenagers have lost moral values. What is your opinion?',
			answer: "I think that children from every generation differ from their previous generation in many ways, and this difference attracts a lot of scrutiny. I believe that the importance of moral values has declined for all people, and that includes teenagers as well. Therefore, while it is safe to say that many teenagers these days have lost regard for moral values, it isn’t true that all of them have done so. So, I do not think that the statement should be generalized for teenagers only."
		},
    {
			questionText: 'Describe the house in which you live?',
			answer: "The house that I live in is an apartment. It is a ten storied building that has six flats on every floor, and forty flats in total. It is located in the city, and in quite a busy street. I’ve been living here my entire life and have made many friends from this apartment. We all grew up together and have developed very good friendships over the years. This house and its people are two components that I have made some of the most beautiful memories with in my life."
		},
		{
			questionText: 'Describe the neighborhood where you live?',
			answer: "The neighborhood where I live is located in the city, and in quite a busy street. There aren’t many trees around, but there is a park very close to it that sort of fulfills the need of greenery in the area. Many people from the neighborhood and especially kids flock to the park every afternoon. I myself go there a couple times a week to catch up with my friends from the area. Our neighborhood is quite safe, with rarely any sort of crime happening here. I have lived here my entire life and truly believe that this is a great place to grow up and live in."
		},
		{
			questionText: 'Public transport helps save money and curbs pollution over private transport. What do you prefer and why?',
			answer: "Personally, I wholeheartedly agree with the statement. Public transports are indeed an inexpensive option as opposed to private transport. It is something that I use everyday myself. But while they do curb pollution as opposed to private transports, the convenience and comfort of owning a private transport can’t be denied. It is truly a luxury and privilege to own a private transport. But for mass people, public transports are definitely the better option by a landmark."
		},
    {
			questionText: 'Describe a time when you were cheated.',
			answer: "During its onset, online shopping didn’t have much credibility as people were afraid of being cheated on through misleading products that were different from what they had expected. However, over time, online shopping has made a place for itself in society, and rightfully so. However, there are still some online shops that are nothing but scams. Last month, I ordered an air cooler online from an advertisement that made it seem perfectly normal. In reality, it did nothing to serve its purpose and was simply an object of no use. That made me not only waste a good amount of money but also feel extremely cheated."
		},
		{
			questionText: 'Describe your daily exercise routine.',
			answer: "A prerequisite of my exercise routine is waking up early in the morning at 6 am. After that I go for a quick twenty-minute run. When I get back, I shower and then have a banana that gives me energy to do yoga for the next forty minutes. On extremely busy days, I do yoga for 15 minutes, but make sure I never go below that. Afterwards, I have my breakfast and do thirty minutes of exercise. On most days I do cardio, while I sometimes incorporate a bit of weightlifting in my exercise routine."
		},
		{
			questionText: 'Describe a time when you traveled somewhere.',
			answer: "Last year I went to Cox’s Bazar with my parents and my sister. It was during the end of winter, so the weather there was quite perfect. However, the beach was quite sunny, of course. We did a lot of activities such as jet skiing, kayaking, and parasailing. It was my first time doing all of these activities, so I had an amazing time. We also bought a lot of dried fish from the street shops, which is a common tradition for visitors in Cox’s bazar. We relaxed to our hearts’ content and returned after four days of peaceful vacationing."
		},
    {
			questionText: 'How do you travel to your work/study? Describe your vehicle.',
			answer: "I use public transport to travel. So that means I have to get up early to catch the bus. I prefer using an AC bus as the route to my work is quite long and the hot weather becomes quite intolerable. It doesn’t accommodate more passengers than it’s supposed to, which is quite rare for most public buses in the country. And since I have the privilege to afford a fairly developed public transport, I choose to use this bus for my own safety."
		},
		{
			questionText: 'Having a good university degree is important in finding a job. Do you agree?',
			answer: "Yes, I agree with the statement that a good university degree is important in finding a job. In fact, considering how competitive the job market is becoming with each passing day, a good university degree is not only important in finding a job but also a prerequisite. While it is true that a lot of people can’t afford a good university degree, that hasn’t stopped companies from prioritizing a good degree while hiring new employees."
		},
		{
			questionText: 'Describe a skill that you want to learn.',
			answer: "A skill that I want to learn is coding. It is a skill that has a lot of demand in the job market right now. Furthermore, coding is also an integrated part of different kinds of jobs, all of which have scope for many job opportunities. These opportunities are becoming more and more available all over the world, making a skill like coding highly advantageous."
		},
    {
			questionText: 'Write about your dream job. Why do you want this job?',
			answer: "My dream job would be a position that allows me to make a positive impact on people every day. I would love to work for a company that makes time-saving and life-enriching products that thousands of people use everyday. I would love to be part of a team that finds innovative ways to make products more efficient and effective. To be able to earn a living through something that helps people in one or more ways is the dream."
		},
		{
			questionText: 'Write down about your best friend. How long have you known him/her?',
			answer: " I have a best friend of fourteen years. We went to the same school. While we have been friends since grade 1, we became best friends in high school. Ever since then, we have become inseparable, but only in terms of bonding because we now live in different countries. However, the distance has not affected or deteriorated our friendship in any way. If anything, it has made the friendship even stronger. I can’t imagine my life without my best friend."
		},
		{
			questionText: 'What is your favorite dish? How is it prepared?',
			answer: "My favorite dish is pizza. Its main component is a flat soft bread which can be thin or thick depending on choice. The bread is then covered by a sauce, predominantly ketchup, followed by ingredients such as chicken, beef, bell peppers, olives and many others depending on the choice. One of the most important components of the pizza is cheese which goes on top of it at last. The bread is then baked at very high heat in an oven and becomes ready to eat in 15-20 mins."
		},
    {
			questionText: 'Describe your favorite actor. Why is he your favorite?',
			answer: "My favorite actor is Leonardo DiCaprio. The reason he is my favorite is because of his sheer versatility. Starting from his attention grabbing role in “Catch me if you can” to his career-defining role in “Titanic”, from his mind blowing performance in “Inception” to his dangerously convincing role in “Shutter Island”, Leonardo DiCaprio is an actor who seems to have no area of weakness in acting at all. The way he adapts to every role and also makes it his own is something that is remarkably rare within actors these days."
		},
		{
			questionText: 'Some people say that with the development of the Internet, Radio has no future. Do you agree?',
			answer: "While the internet has definitely taken over many different fields of media and broadcasting, including the radio, it is too bold to claim that the development of the internet will lead to radio becoming obsolete. If we pay close attention to the current status quo, the internet already has all the features of the radio, but radios are still alive and functioning. People still listen to radios in cars on their way to work and throughout the day. People still turn to radio for publicizing events and celebrities. I believe that with further development of the internet, radio will also adapt to changes and hold its place in our lives."
		},
		{
			questionText: 'Write about your favorite book.',
			answer: "The name of my favorite book is “Pride and Prejudice”. It is considered a reading classic. It is one of the most popular novels in the English language. Over 200 years after its publication, it continues to win the hearts and minds of readers around the world, thanks to its delightful heroine, unforgettable cast of comic characters, witty dialog, and satisfying romantic plot."
		},
    {
			questionText: 'Describe a time when you spent a lot of money. What did you buy?',
			answer: "A time when I spent a lot of money was during last Eid. I had been able to save a great deal of money by that time and had decided to spend a good portion of it for not only myself but also the people I love. I had spent the money on buying my mother a saari, my father a watch, and my sister a bag. I also decided to spend some money on my friends and got a watch for each of my four closest friends. For myself I bought a shirt, a bag, and a bracelet. Although I had spent a lot of money, I never regretted it because of how happy it made me to be able to get gifts for the people I love and for myself, with my own money."
		},
		{
			questionText: 'Write down about a time when you worked really hard for something.',
			answer: "A time when I worked really hard for something was during my last board exam. It was my graduating exam from school and therefore had a lot of value to it. Besides, every board exam is very important in a student’s life. And since the knowledge I had gained for this exam had implications in my exams for university admission, the pressure was even higher. Therefore, I had to make a routine for my studies, stick to it with discipline, and work hard day and night to ensure I was preparing well for the exam. I’m thankful that the hard work later paid off."
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
      <p className='font-bolt text-xl pr-4 mt-5'>Time left: </p>
      <CountdownCircleTimer
    size={70}
    isPlaying
    duration={150}
    colors={['#f78801','#f78801', '#f78801', '#f78801']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
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

export default WritingEasy;