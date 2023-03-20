import Head from 'next/head'
import React from "react";
import { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'; 


const ComprehensionEasy = () => {


	const sources = [
    {
      source:"https://drive.google.com/uc?export=view&id=1qV6uXuQa-rItlEYVQXdZeCcZD0Qvm7xc",
      answer:"It’s a close-up picture of three different-colored horses standing in a meadow with air flowing smoothly. The horses on the right and left sides are brown in color, and the middle one is black in color. Also, there is a tinge of white hues on their faces. In this picture, it can also be seen waving grass and little white flowers."
    },
    {
      source:"https://drive.google.com/uc?export=view&id=1yIrgNDurYqzSBdPV-3Sx0sLiM6t968IU",
      answer:"This image illustrates a female teacher and a group of female students who have worn school dress in a classroom setup. That educator is sharing information or asking questions to her students in a standing position. The students are sitting on the ground, and the surrounding is lush green. Out of 6, two students are raising their hands to answer something."
    },
    {
      source:"https://drive.google.com/uc?export=view&id=18DhsjQSCepMGStY2PdOveytPE1Dc7Ih6",
      answer:"This picture illustrates a hot air balloon with a written ‘Pealz Gas’ in capital letters on it. The hot air balloon color is red, white, and yellow. Also, it’s in the middle of a plowed field – rising slowly towards the sky – with some trees visible from far behind it. A few things or people can be seen in the balloon’s basket. As the field is slant and the background has mountains, it can be said that the balloon is placed in a hill region."
    },
    {
      source:"https://drive.google.com/uc?export=view&id=1xwRas7LzQ2Ac2AhgEC4aCK0K__nT5-Z0",
      answer:"This image portrays a seal (or sea lion) with white whiskers. The aquatic animal is coming out of the water and has created waves around it. Its skin is wet and shiny. Looking at his sleepy eyes, it can be guessed that he is in a relaxed mood and the surroundings are not crowded. This Seal is swimming or enjoying its calm time during the day."
    },
    {
      source:"https://drive.google.com/uc?export=view&id=1ww7Jaf6599LNAAznse9KRMDaH9o-ZH-V",
      answer:"This picture vividly illustrates an explicit blue lake enclosed by snow-capped mountains in the background and a lush green forest surrounding its waters. The shadows of the picturesque mountains, trees, and clean sky can be observed in the transparent water of the lake. Furthermore, maybe this picture was shot in the morning or afternoon when the mountain tops look filled with shiny ice."
    },
    {
      source:"https://drive.google.com/uc?export=view&id=1cmTGySxfXo8JUx9UXk3K28-Nrga2IubI",
      answer:"This image illustrates an urban/downtown area of a big city. A busy highway starts in the foreground and stretches far ahead towards a suspension bridge and tall buildings. The highway is built on a bridge as there are other low-lying roads with some traffic seen on its right side. There is also a lake running along the left side of the highway. Mostly, the image has dull grey shades and it looks like the photo has been taken in the daytime."
    },
    {
      source:"https://drive.google.com/uc?export=view&id=1wg_fSIAf3D39xwgFGM24db__LZWNC-p9",
      answer:"This is a close-up image of three horses standing on a grassland. Only the faces or necks of the horses are visible. The horses on the left and right are brown while the one in the middle is black. They all have a tinge of white color on their faces. The cloudy sky and some trees can also be seen in the background."
    },
    {
      source:"https://drive.google.com/uc?export=view&id=1Fdh4s_3dPpdun39w04L-V_gJYbqxz-1i",
      answer:"This photo is of a hot air balloon with happy birthday written in big bold letters on it. The balloon is blue, red, and white, and it is in a really beautiful green field with some trees on the right-hand side. There is a group of people in the basket and getting ready for lift-off. Three men are standing on the grass next to the balloon and it looks like they’re cheering the people in the basket. In the background, there are a few really old-fashioned wooden houses on the hill. Based on the landscape and the style of the houses, I think that this photo was taken in Europe."
    },
    {
      source:"https://drive.google.com/uc?export=view&id=1EBP6Nyr-lf_wqWGkWcyWeBnT7N7QnCm4",
      answer:"In this photo, a woman is backstage at a rock concert. She’s watching the band play from the side rather than from the front like the rest of the crowd. She has her two arms in the air and looks to be dancing. It also looks like she’s alone since there aren’t many people around her. The band is in the background of this photograph, and it looks like there are five or six members all playing different instruments. I can see a few of them playing guitar and one on the keyboard. It must be a great concert."
    },
    {
      source:"https://drive.google.com/uc?export=view&id=1ZJ9ujdfaDGfKuJFgtOdzzxHUu2sOfGsZ",
      answer:"This photo shows two men about to begin an arm-wrestling match. Although you cannot see most of their faces, you can tell that the man on the left is more determined since he is pressing his lips together hard. This seems to be a group of friends having a party and playing some games. Their friends have upped the stakes by making bets on who they think will be victorious. There’s a surprisingly large amount of money on the table for the bet. I guess that the man on the left will win because, as I mentioned before, he looks more determined and serious."
    },
		{
      source: "https://drive.google.com/uc?export=view&id=15OdORw-fysf66aXt-cvrlNGhLA0Ej7Jy",
      answer: "The picture shows a tall cliff in the foreground and a small settlement of houses at its bottom. A man is sitting dangerously at the protruding part of the cliff. On the right side of the picture, another dark mountain can be seen. Beyond the small houses, a blue sea is stretched out far ahead in the middle of the picture. Interestingly, it is mostly covered with clouds which are seen under the cliff. A clear blue sky lies parallel to the top of the cliff. This photo might have been taken by a tourist."		
    },
		{
			source: "https://drive.google.com/uc?export=view&id=1qd2Ckrp2xejYK2603opag-gXjFK3z1yB",
			answer: "The picture shows three old women sitting on a beige sofa against a light grey background. The woman on the left is showing the other two women something on her cellphone. She seems to be saying something while others are listening to her. There is also a table with a cake and cups of tea on it. It looks like the women are friends and having a good time talking about something interesting while taking tea. The photo might have been taken by a family member, a friend or a stock photographer."
		},
    {
      source: "https://drive.google.com/uc?export=view&id=1jGhCCXCaFDwa1ctCI-9idDf9pZZ9CyWl",
      answer:"The picture is an alluring demonstration of a clear lake encircled by mountains in the backdrop, with a house having a sloping roof on one side. The clear lake water exhibits the mountains’ shadows, clouds, and trees. Moreover, the peaks have deep grey and orange colour, and a small part is receiving sunshine. The quality of this photo suggests that a seasoned photographer has taken it."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=130pV2sKIcDV1uDsTYHUanO0RGT-z5792",
      answer:"This image elucidates an urban/downtown area adjoining a sea. The road beside the seashore has less traffic with buildings on its right side. It is vivid from a close look that the footpath and the pavement have a bridge beneath them for support. Moreover, coconut trees are there on the footpath. A sizeable part of the image has abundant sunshine, and it seems that the photo has been clicked in the daytime."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1ryHNf1xgf140b2NuSSCCYvCMZJ7iJtmz",
      answer:"The picture exhibits a female educator and some students who have worn a school uniform in a classroom. The teacher is imparting education in a standing position, and the learners are sitting on the chairs. She seems to be looking for an answer to a question put to the educatees. Two students have raised their hands, and it appears like they wish to answer the question. In the background, there is a notice board and two whiteboards, with one being digital."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1RQmNqj322q77MCZMLJ3JkLoz96xWiCIl",
      answer:"It is an image of four horses standing probably on a hill. The whole body of the horses is visible except the feet. The horses on the left and right are light brown, while those in the middle are brown. Moreover, a tinge of white colour is visible on the faces of all of them except one. Lastly, all of them are looking in one direction."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1EYfYIJ1QZqiw6mWoTe1wwryUdHdgG9OE",
      answer:"This photograph depicts a hot air balloon flying in the sky. The balloon consists of numerous colours such as blue, sky blue, red, orange and green, and except for the skyline in the background, no other thing is visible. A group of people in the basket enjoying the view from the top. It seems like the photograph is clicked from the ground."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1-wvhtoXSxU153Nb1Gqezh66oWkwItC2e",
      answer:"This photograph depicts a duplex house with picturesque interiors and exteriors. Three rooms are visible, with two on the ground floor, and all of them are well lit. Moreover, there is a swimming pool and gazebo on the left side with three chairs. Furthermore, a recliner is there on the right side for relaxation. The background consists of trees and the sky with some clouds. The backdrop indicates that the photographer clicked the picture either early morning or in twilight timings."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1RKKMjKZ6qOAowmBgBkvenf40PXPbrSY6",
      answer:"This photograph exhibits a silver-coloured hatchback car running on a well-built, marked,two-laned and curvy road. Author automobile of back colour is visible in small proportion. There are lush green farms on both sides of the road, with some areas fenced. It seems that the cars are about to enter a steep road which is probably taking them uphill. Lastly, the abundant sunshine shows that the picture is clicked in the daytime."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=15EJXZb9qxkYA3-tiQJBzNRefd4sQo51n",
      answer:"This photograph exhibits the male and female pedestrians walking on both sides of a road in a non-uniform pattern. The road has horizontal white markings, and a sizeable percentage of walkers have umbrellas suggesting the occurrence of rain. Moreover, all of them have worn winter clothing."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1qtcBmtN8AmHUFj3MnOfG1BK6Fg_-LNqL",
      answer:"This photograph exhibits the interior of a shopping mall with three floors fully visible. All floors have escalators for the comfort of the visitors. The shops available are of different sizes, and most of them are clothing brands. The audience consists of females with a small percentage of males, and the complex seems to have state of the art infrastructure. The sunlight’s presence in one of the shops suggests that the image was clicked during the daytime."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1U9fn45NUunXYaAZePKs34u3rFtLvZKmO",
      answer:"This photograph depicts a cricket match. An umpire and three players are visible in the picture, and one of them is the bowler. The action suggests that the bowler is bowling fast. As no seats are there in the background, it looks like the game is not played on a cricket ground, not a stadium. The backdrop contains trees, and the outfield of the pitch is lush green."
    },
		{
			source: "https://drive.google.com/uc?export=view&id=1hHrWkOl3VejtzO9tLrfXl2N8PtDcNFoe",
			answer: "The picture shows an astronaut in his spacesuit. Most of the foreground is covered with the body of the astronaut while we can also view the blue sky behind his head with some traces of clouds.  It looks like he is pressing something on a machine, probably his spaceship. He might be out in space on another planet when the photo was taken."
		},
    {
      source: "https://drive.google.com/uc?export=view&id=1IuDkzEYizI6MByP-0gd3aArlgM4XC50W",
      answer: "This photograph is about a restaurant. As per the menu displayed on the wall, this is not a multi-cuisine eating place. The delicacies offered are pizza, pasta and coffee. And to provide extra facility to the customers free wifi is there. There are about eight tables diagonally placed, and no customer is visible. The walls look old, and it seems like the designer has tried to give them a rusted look."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1Jwy74qCjCs5oe-s2qofU6H7EHujRKQf4",
      answer: "The image showcases a one-lane railway track. The availability of electric wires over the line indicates that the train runs through electricity on this route. Moreover, a railway overbridge is there, with fencing to prevent trespassing. Furthermore, the track has trees on both sides, and abundant sunshine in the picture depicts that it has been taken in the daytime."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=17LUjkvKHEcfSyU0NhPomexVYm7wqecL7",
      answer: "The image depicts an office in black and white colours. A person is working on a desktop, with two screens on his table. Moreover, two laptops are there, one on the left side, and another one on the right. His face is facing the wall, and it is not visible. Three sceneries are hung on the walls. A window with blinds is there. And the availability of sunshine exhibits that the photographer clicked the picture during the daytime."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1aNsLtTCguNM5QfpNPJsrEMd2XzqErK9_",
      answer: "The image depicts a group of cyclists riding their bikes in a hilly area. The gear worn by the riders suggests that all of them are professionals and the varying colours of jerseys indicate that there are probably four to five teams competing with each other. Moreover, in their current ride, they are going uphill, and the presence of abundant sunshine exhibits that the photographer clicked the image in the daytime."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1uzjGib2i8yScSZAwaQJuLhTj4hgRfi1A",
      answer: "This image exhibits the dance performance of ten girls. Overall it is readily apparent that all participants are teenagers, and their show is well choreographed. Moreover, all of them are wearing the same dress. Although all of them are performing while standing, their steps are different. The background is black, and the carpeting suggests that the show took in an auditorium."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1o_CQIeIZBVmVceOcad-RtmiresvkD0F8",
      answer: "The image describes the arrangement of fruits and vegetables by a street vendor. A variety of products are available, and the cart seems colourful. At a glance, it is evident that eating items are fresh. The eatables are in a wide range, including bananas, oranges, pomegranates, grapes, pears, corn, and many others. The containing trays are wooden, and the daylight indicates that the photographer clicked the picture at day time."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1Osj5MKpJ5NTMOe_Kc87bnyEo9yDKiQQj",
      answer: "The image exhibits a curved road in a valley surrounded by hills on one side. The sky is clear with a small proportion of clouds. A bus is there on the road, and it is evident that an electrified railway track is there parallel to the road. The peaks visible on the far side are snow-covered. There is a lot of greenery on the rest of the hills. A beautifully maintained garden is there on the other side. Lastly, the abundant sunshine in the picture depicts that the photographer clicked it during the daytime."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1EQXxkKGdZ06iiYlRO1VxxUINJaUuBffb",
      answer: "The image is of a road with pedestrians having a walk on it. The absence of vehicles suggests that the photographer clicked the image in the morning. There are about seven people in the picture, but only three are visible from the back. All of them have work sweaters indicating that it’s a winter morning. The street lights are on, and there are many trees on the other side of the road."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=14SkAjD2QqprzwN0bHIaHbpwz_BKt6B2I",
      answer: "The provided image describes a water park. There are two slides, the one the orange colour is a circular one and the other one is a semi-circle with blue colour outside and green inside. The water in the pool seems clean and pristine. Only two people are there enjoying the slides. The availability of abundant sunshine depicts that the image is clicked during the daytime."
    },
    {
      source: "https://drive.google.com/uc?export=view&id=1FHZl9w7wTcGee4bcXF2yZFT0EdHPPlsF",
      answer: "The provided image describes a road construction site. The traffic is running smoothly on the other part, which clarifies the construction is on one side of the road. Numerous machines are deployed to fulfil the task. Trees are visible on both sides of the track."
    },
		{
			source: "https://drive.google.com/uc?export=view&id=1YbJUUCOTz8wNp3gW4_YOrWbVCoP8cKVa",
			answer: "The picture appears to be from a warehouse. There are multiple cardboard boxes of packed goods arranged on open shelves. The shelves cover the left side and the upper-middle portion of the picture. Besides, we can also see two people discussing something about the goods beside the shelved boxes while a workman is pulling some boxes on a hydraulic cart."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1Tw_7s5Pom8IyxGbmqTGWOEVY2j283kjL",
			answer: "The picture shows a scene from a clothing manufacturing factory. We can see a room with sewing machines arranged in a sequence. Three women with brown uniforms and face masks are sewing something. It looks like they are working on the same project since they are all using white threads and white cloth. "
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1vEUOHIKNM2TWrkxWOWQIg7g9yVOS5B7R",
			answer: "The picture shows the partial image of a woman writing something on a notebook. She is facing away from the camera and a laptop is open in front of her. Other things on the table are a red thread, some postal tickets, a scissors, and a pouch. It looks like the woman is working on a project."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1fEL-pAjjayhn3dlZrVfQ4od5uipkE1K8",
			answer: "The image shows a man and woman standing in a book aisle facing away from each other. Each of them is holding a book. They are reading from their books quietly. There are a lot of books around them in the ceiling-high cupboards. It looks like this place is either a bookstore or a library."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1oXnBuLpYJyrkuRZPpcCX1qmAnltsU4UO",
			answer: "This is a cute photo of some little kids playing soccer in the playground. The kids are lined up and some of them are kicking the ball into the net. They are all wearing bright coloured clothes. The lush green grass and the trees in the background create a sharp contrast to the colourful clothing of the kids. I guess the photo has been taken in a kindergarten school."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=107K3NpkAZTCWVi-hUwtrrcWniAn70UoI",
			answer: "The picture shows two boats with one person each on the surface of deep blue waters. The men on the boats look like fishermen as they are casting their nets on the water. One of them is standing on one corner of his boat and holding one edge of his net while the other fisherman is sitting at the edge of his boat.The movement of the boats is creating ripples on the surface of the water. It looks like these guys are professional fishermen and catch fish as a routine."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1upinLll3NPl6oDLVkFhWW8fec8JwrfWE",
			answer: "The image shows a scene at the airport. There is a plane standing at the airport with a passenger boarding bridge attached to it. The airport building can be seen in the background and some planes are also lined up on the ramp. It looks like it has rained a while ago as the ground looks wet. A crew member can be seen heading towards the airplane. The ground support equipment can be seen beside the airplane in the servicing area."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1fFVWUpu9LuLp-TkaP6z1d0R7p2W4CZkK",
			answer: "This photo is from a subway’s compartment.There are people seated along the windows. Most of them are scrolling or reading something on their cellphones.Two rows of yellow handles can also be seen on the subway’s ceiling. It looks like the subway is travelling in a busy city."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1u5dxtoWZ5OfIbE4DbyI8yMddg1Wk_IH1",
			answer: "The picture shows a wooden hut or cabin under the shade of trees. There is a woman dressed in white tee and jeans standing outside the door. The wooden doors of the hut are wide open and there is dark inside. Some foliage is covering the slanting roof and surrounding area of the hut.It looks like the hut is the part of a public park."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1wE_16InduEr1uNNyIbwIBZlB5VEAZcre",
			answer: "This is photo of a metal stand with some horseshoes sitting on the top of it. There are two pales of water under and beside the stand. There is some other wooden stuff around it and there is some kind of machine partly visible in the picture. It looks like it is an old workshop from a village or the olden times where horses were kept."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=1I2_OGPcKtnyz1QYt4mkfdvC4Lh1ok4o0",
			answer: "The picture shows some stone structures raised on pedestals in a gallery.Most structures in the background appear to be stone sculptures of human figures. The foreground illustrates the floor with blocked grey pattern. The roof of the gallery covers a large part of the picture and has a square pattern. I believe this photo has been taken in an art gallery and all the sculptures are carved by famous sculptors from the history."
		},
		{
			source: "https://drive.google.com/uc?export=view&id=19J0f_yKmDoon1hlUtuxqIAQgAadcV7t_",
			answer: "This is a cool image of the sunset by the lake. There is a tree on the right side of the picture, beside which the yellow light from the setting sun is reflecting in the lake water. The gleams of light are also lightening up the green grass in the foreground. A bench can be seen at the bottom of the tree. Beyond the lake, trees and foliage is spread out against the evening sky. I think someone took this photo in a park or a rural area."
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
    setShowMessage(false);
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
      <div className='flex items-end pt-10 pb-5'>
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
      <div className='flex justify-center'>
        <p className='pb-5 w-4/5 sm:w-full text-2xl font-bold text-center'>Write one or more sentences that describe the photo</p>
      </div>
      <div className='flex justify-center'>
      <div className="pb-10 flex w-3/4 sm:w-1/3 flex justify-center">
        <img className='rounded-lg' src={sources[currentQuestion].source} alt="image"/>
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
      <p className='text-lg'>Word count: {wordCount}</p>
      </div>
      </div>
      <div className='flex justify-center'>
        {showMessage && <div className='w-3/4 sm:w-2/5 pt-5 pb-5'>
          <p className='text-xl font-bold'>Sample answer</p>
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

export default ComprehensionEasy;