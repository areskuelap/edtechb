
class GPT {
  final String questionText;
  final String answerText;
  GPT(this.questionText, this.answerText);
}

List<GPT> getQuestions() {
  List<GPT> list = []; //ADD questions and answer here

  list.add(GPT(
      "Describe your favorite childhood memory and how it has influenced you as an adult.",
      "My favorite childhood memory is when my family and I went camping in the mountains. We spent the days hiking, fishing, and exploring nature. As an adult, this memory has influenced my love for the outdoors and my appreciation for nature. It has also taught me the value of spending quality time with family and friends."));

  list.add(GPT(
      "Discuss the benefits of learning a second language and how it can improve your life.",
      "Learning a second language can open up a world of opportunities. It can improve your communication skills, enhance your cultural awareness, and make traveling more enjoyable. Learning a new language can also improve your career prospects and increase your earning potential. Furthermore, it can improve cognitive function and delay the onset of age-related mental decline. Overall, learning a second language is a valuable investment in oneself."));

  list.add(GPT(
      "Describe a time when you had to overcome a language barrier and how you managed to communicate effectively.",
      "When I traveled to Japan, I had a hard time communicating with the locals due to the language barrier. However, I managed to communicate effectively by using gestures and simple English phrases. I also used a translation app on my phone to help me understand and communicate with others. I found that being patient, respectful, and showing a willingness to learn the language helped me to bridge the gap and connect with the locals."));

  list.add(GPT(
      "Discuss your favorite book or movie and how it has impacted your life.",
      "My favorite book is To Kill a Mockingbird by Harper Lee. This book has impacted my life by teaching me about the importance of empathy and standing up for what is right. The characters in the book, particularly Atticus Finch, have inspired me to be a more compassionate and principled person. This book has also shown me the power of storytelling and how it can bring people together."));

  list.add(GPT(
      "Describe a place you have visited and what you enjoyed most about it.",
      "One of my favorite places I have visited is Paris. I enjoyed the city's rich history, beautiful architecture, and vibrant culture. The food and wine were also amazing. What I enjoyed most about Paris was simply walking around and exploring the city. It was easy to get lost in the narrow streets and stumble upon hidden gems around every corner."));

  list.add(GPT(
      "Discuss the importance of cultural awareness and how it can benefit society as a whole.",
      "Cultural awareness is important because it promotes understanding and acceptance of different cultures. It helps to break down stereotypes and prejudices and creates a more harmonious and inclusive society. Cultural awareness also enhances communication and cooperation between different cultures, leading to greater economic and social development. Ultimately, cultural awareness promotes respect, empathy, and tolerance, which are essential for building a better world."));

  list.add(GPT(
      "Describe a personal goal you have and the steps you are taking to achieve it.",
      "My personal goal is to run a marathon. To achieve this goal, I have started a regular running routine and have gradually increased my distance and speed over time. I have also joined a running club to gain support and motivation from like-minded individuals. Additionally, I am focusing on improving my diet and getting enough rest to ensure that I am in the best physical condition possible."));

  list.add(GPT(
      "Discuss the impact of technology on modern society and its potential benefits and drawbacks.",
      "Technology has had a profound impact on modern society, with both benefits and drawbacks. On the one hand, technology has made life easier and more convenient. It has revolutionized communication, transportation, and healthcare, among other things. On the other hand, technology has also created new problems, such as addiction, social isolation, and privacy concerns. It is important to use technology in a responsible and ethical manner to ensure that its benefits outweigh its drawbacks."));

  list.add(GPT(
      "Describe a challenge you have faced and how you overcame it.",
      "One challenge I faced was transitioning to a new job in a different industry. It was a daunting task, as I had to learn new skills and adjust to a different work environment. However, I overcame this challenge by taking a proactive approach. I read up on industry trends, networked with professionals in the field, and enrolled in relevant training courses. I also sought advice and guidance from my colleagues and supervisors, who were supportive and willing to help. Through hard work, determination, and a willingness to learn, I was able to successfully transition to my new role."));

  list.add(GPT(
      "Discuss the importance of education and how it has impacted your life.",
      "Education is crucial for personal and societal development. It provides individuals with the knowledge and skills needed to succeed in life, both professionally and personally. Education also fosters critical thinking, creativity, and problem-solving skills, which are essential for innovation and progress. For me, education has opened doors and provided opportunities that would not have been possible otherwise. It has helped me to develop my passions and interests, and to pursue a fulfilling career. Overall, education is a powerful tool that can change lives and make a positive impact on the world."));

  list.add(GPT(
      "Discuss the impact of social media on society and its potential benefits and drawbacks.",
      "Social media has had a profound impact on society, with both benefits and drawbacks. On the one hand, social media has made communication and information sharing easier and more convenient. It has also created new opportunities for business, education, and social activism. On the other hand, social media has also created new problems, such as cyberbullying, addiction, and privacy concerns. It can also perpetuate echo chambers and confirmation bias, leading to a lack of diverse perspectives. It is important to use social media in a responsible and ethical manner to ensure that its benefits outweigh its drawbacks."));

  list.add(GPT(
      "Describe your favorite hobby and how it has enriched your life.",
      "My favorite hobby is reading. Reading has enriched my life in many ways. It has broadened my knowledge and understanding of the world, and has allowed me to explore new ideas and perspectives. Reading has also helped me to develop my imagination and creativity. It is a great way to relax and unwind, and can help to reduce stress and anxiety. Additionally, reading has improved my communication skills and vocabulary. Overall, reading is a fulfilling and enriching hobby that has brought me much joy and personal growth."));

  list.add(GPT(
      "Discuss the importance of teamwork and collaboration in the workplace.",
      "Teamwork and collaboration are essential for a successful and productive workplace. Working together towards a common goal allows individuals to leverage their strengths and expertise, and to overcome challenges more effectively. Collaboration also promotes creativity and innovation, as it allows individuals to share ideas and perspectives. Additionally, collaboration fosters a sense of community and mutual support, which can improve job satisfaction and overall well-being. Effective communication, active listening, and a willingness to compromise are key components of successful teamwork and collaboration."));

  list.add(GPT(
      "Describe a skill you wish to learn and why it is important to you.",
      "One skill I wish to learn is coding. Coding is an important skill in today's digital age, and is becoming increasingly relevant in many fields, from tech to finance. Learning to code would open up new opportunities for career advancement and personal growth. Additionally, coding is a challenging and intellectually stimulating activity that requires problem-solving skills and attention to detail. It is also a highly sought-after skill in the job market, with many high-paying jobs available to those who have mastered it."));

  list.add(GPT(
      "Discuss the benefits of a healthy lifestyle and how to maintain it.",
      "Maintaining a healthy lifestyle has numerous benefits for physical, mental, and emotional well-being. It can help to prevent chronic diseases, boost energy levels, and improve cognitive function. A healthy lifestyle can also reduce stress and anxiety, improve sleep quality, and increase overall happiness. To maintain a healthy lifestyle, it is important to engage in regular exercise, eat a balanced and nutritious diet, and get enough sleep. It is also important to manage stress levels and to engage in activities that promote relaxation and enjoyment."));

  list.add(GPT(
      "Describe a person who has inspired you and how they have impacted your life.",
      "My grandmother has been a great inspiration to me. She is a resilient and strong-willed person who has overcome many challenges in her life. Her positive outlook and unwavering determination have taught me the importance of perseverance and optimism. She has also instilled in me a sense of empathy and compassion for others. Her generosity and kindness have inspired me to give back to my community and to be a more caring and supportive person. Overall, my grandmother has had a profound impact on my life, and I am grateful for her love and guidance."));

  list.add(GPT(
      "Discuss the importance of time management and how it can improve your productivity.",
      "Time management is essential for improving productivity and achieving goals. It involves prioritizing tasks, setting realistic deadlines, and minimizing distractions. Effective time management can help to reduce stress and anxiety, increase focus and concentration, and improve overall efficiency. It allows individuals to make the most of their time and to achieve more in less time. To improve time management, it is important to set clear goals and to break them down into smaller, manageable tasks. It is also important to prioritize tasks based on their importance and urgency. Additionally, it is helpful to eliminate unnecessary distractions, such as social media or email notifications, and to create a schedule or to-do list to stay on track."));

  list.add(GPT(
      "Describe a cultural event you have attended and what you enjoyed most about it.",
      "I once attended a cultural festival celebrating Indian culture. The event was filled with vibrant colors, music, and dance. I enjoyed the traditional Indian food and the opportunity to learn about the culture through the various exhibits and performances. The highlight of the event was a dance performance that featured intricate choreography and colorful costumes. I was impressed by the talent and dedication of the performers, and was inspired to learn more about Indian culture. Overall, the cultural event was a fun and enriching experience that allowed me to learn about and appreciate a new culture."));

  list.add(GPT(
      "Discuss the impact of climate change on the environment and what individuals can do to help.",
      "Climate change has had a significant impact on the environment, with rising temperatures, sea levels, and extreme weather events. It has caused widespread damage to ecosystems, wildlife, and human communities. To help combat climate change, individuals can take a number of steps, such as reducing their carbon footprint, using energy-efficient appliances, and conserving water. Individuals can also support renewable energy sources, such as solar and wind power, and reduce their consumption of meat and dairy products. It is important for individuals to take action to reduce their impact on the environment and to support policies that promote sustainable living."));

  list.add(GPT(
      "Describe a place you have never been to but would like to visit and why.",
      "One place I have never been to but would like to visit is Japan. I am fascinated by the country's rich culture, history, and traditions. I would like to visit the ancient temples and shrines, sample the delicious cuisine, and explore the bustling cities. I am also interested in the unique fashion and design styles that are popular in Japan. Additionally, I would like to learn more about the country's language and customs, and to interact with the friendly and welcoming locals. Overall, I believe that Japan would be a fascinating and enriching travel destination that would offer many new and exciting experiences."));

  list.add(GPT(
      "Discuss the importance of emotional intelligence in the workplace and how it can benefit both individuals and organizations.",
      "Emotional intelligence is essential for building strong and effective relationships in the workplace. It involves the ability to recognize and manage one's own emotions, as well as the emotions of others. Emotional intelligence can benefit both individuals and organizations by promoting empathy, communication, and teamwork. Individuals with high emotional intelligence are better able to handle conflicts and navigate difficult situations, leading to improved job performance and job satisfaction. Organizations with a culture of emotional intelligence are more likely to foster a supportive and inclusive workplace environment, which can improve employee retention and productivity."));

  list.add(GPT(
      "Describe a memorable travel experience and what you learned from it.",
      "One of my most memorable travel experiences was a trip to Peru. I was struck by the country's rich history and stunning natural beauty. I hiked the Inca Trail to Machu Picchu, one of the Seven Wonders of the World, and was awed by the ancient ruins and breathtaking mountain views. The experience taught me the value of perseverance and determination, as the hike was physically challenging and required mental toughness. It also taught me the importance of cultural awareness and respect, as I interacted with the friendly and welcoming locals and learned about their customs and traditions. Overall, the travel experience was a life-changing adventure that expanded my horizons and enriched my understanding of the world."));

  list.add(GPT(
      "Discuss the impact of globalization on cultural diversity and identity.",
      "Globalization has had a significant impact on cultural diversity and identity. On the one hand, globalization has led to the spread of ideas, values, and practices across borders, resulting in increased cultural exchange and hybridization. This has created new opportunities for cultural enrichment and diversity. On the other hand, globalization has also led to the homogenization of cultures, as global trends and values overshadow local traditions and practices. This has led to a loss of cultural identity and a sense of cultural dislocation. It is important to strike a balance between the benefits and drawbacks of globalization and to promote the preservation of cultural diversity and identity."));

  list.add(GPT(
      "Describe a volunteer experience you have had and what you gained from it.",
      "I once volunteered at a local food bank, helping to distribute food to families in need. The experience was both humbling and rewarding. It taught me the importance of giving back to the community and helping those who are less fortunate. I gained a greater appreciation for the struggles that many people face and a deeper understanding of the impact of poverty and food insecurity. The experience also allowed me to meet new people and to connect with members of my community in a meaningful way. Overall, the volunteer experience was a valuable and eye-opening experience that inspired me to continue to seek out ways to make a positive impact in my community."));

  list.add(GPT(
      "Discuss the importance of mental health and how to maintain it.",
      "Maintaining good mental health is essential for overall well-being and happiness. It involves taking care of one's emotional, psychological, and social needs. To maintain good mental health, it is important to engage in regular self-care activities, such as exercise, meditation, and relaxation techniques. It is also important to maintain a supportive social network and to seek professional help if needed. Practicing gratitude and positive thinking can also improve mental health and increase resilience in the face of stress and adversity. Additionally, it is important to take steps to reduce stress and anxiety, such as time management and prioritization, and to avoid unhealthy coping mechanisms, such as substance abuse."));

  list.add(GPT(
      "Describe a significant historical event and its impact on society.",
      "The civil rights movement in the United States was a significant historical event that had a profound impact on society. The movement, led by figures such as Martin Luther King Jr. and Rosa Parks, sought to end racial segregation and discrimination against African Americans. The movement led to the passage of landmark civil rights legislation, such as the Civil Rights Act of 1964 and the Voting Rights Act of 1965. The movement also inspired social and political change around the world and brought attention to the ongoing struggle for racial equality and justice. The civil rights movement remains a powerful reminder of the importance of social activism and the struggle for human rights."));

  list.add(GPT(
      "Discuss the importance of creativity and innovation in the workplace.",
      "Creativity and innovation are essential for driving growth and success in the workplace. They involve the ability to generate new ideas, solve problems, and develop novel approaches to challenges. Creativity and innovation can lead to improved productivity, efficiency, and competitiveness. They can also foster a sense of excitement and engagement among employees, leading to improved job satisfaction and retention. It is important for organizations to foster a culture of creativity and innovation, by encouraging brainstorming sessions, providing training and resources, and rewarding creative thinking and risk-taking."));

  list.add(GPT(
      "Describe a goal you have achieved and the lessons you learned from the experience.",
      "One goal I achieved was completing a marathon. The experience taught me the importance of goal-setting and discipline. It required months of training and dedication, and pushed me beyond my physical and mental limits. I learned that the key to achieving a goal is to break it down into smaller, manageable tasks and to stay focused on the end goal. I also learned the value of perseverance and resilience, as there were times when I felt discouraged or faced setbacks. Finally, the experience taught me the importance of celebrating achievements and reflecting on what was learned. Completing the marathon was a rewarding and empowering experience that gave me a sense of accomplishment and confidence that I could apply to other areas of my life."));

  list.add(GPT(
      "Discuss the impact of artificial intelligence on the future of work and society.",
      "Artificial intelligence (AI) is having a significant impact on the future of work and society. On the one hand, AI has the potential to revolutionize industries and create new job opportunities. It can also improve efficiency and productivity, and reduce errors and costs. On the other hand, AI also poses challenges, such as job displacement and ethical concerns around data privacy and algorithmic bias. It is important for individuals and organizations to prepare for the impact of AI by developing new skills and competencies, and by investing in research and development. It is also important to address the ethical and social implications of AI to ensure that its benefits are shared fairly and equitably."));

  list.add(GPT(
      "Describe a piece of art or music that has had an impact on your life.",
      "One piece of music that has had a profound impact on my life is Beethoven's Ninth Symphony. The symphony is a powerful and moving work that captures the human spirit and celebrates the beauty of life. The music is both complex and accessible, with themes of hope, struggle, and triumph. The symphony has taught me the importance of perseverance and determination in the face of adversity. It has also inspired me to appreciate the beauty and wonder of the world around us, and to strive to make a positive impact on others. Overall, Beethoven's Ninth Symphony is a masterpiece of art that has enriched my life and inspired me to be a better person."));

  list.add(GPT(
      "Discuss the importance of effective communication in personal and professional relationships.",
      "Effective communication is essential for building strong and positive relationships, both personally and professionally. It involves the ability to express oneself clearly and listen actively to others. Effective communication can improve collaboration, prevent misunderstandings and conflicts, and enhance trust and respect. It is important to develop good communication skills, such as using clear and concise language, asking clarifying questions, and practicing active listening. It is also important to be aware of cultural and social differences that can impact communication, and to be willing to adapt one's communication style to the needs and preferences of others."));

  list.add(GPT(
      "Describe a food or dish that is popular in your culture and why it is significant.",
      "One dish that is popular in my culture is lasagna. Lasagna is a layered pasta dish that is typically made with tomato sauce, cheese, and meat. It is a comfort food that is often served at family gatherings and holidays. Lasagna is significant because it represents the importance of family and community in my culture. It is a dish that is often prepared together by multiple generations, and is a symbol of the love and care that goes into preparing and sharing a meal. Lasagna also represents the diversity and richness of Italian cuisine, and the importance of tradition and heritage in maintaining cultural identity."));

  list.add(GPT(
      "Discuss the impact of the gig economy on employment and the economy.",
      "The gig economy has had a significant impact on employment and the economy. The gig economy is characterized by short-term contracts or freelance work, often facilitated by digital platforms such as Uber or Airbnb. On the one hand, the gig economy has created new job opportunities and flexible work arrangements that can benefit workers and companies. It has also enabled individuals to earn extra income and pursue their passions and interests. On the other hand, the gig economy also poses challenges, such as job insecurity, lack of benefits, and low pay. It can also create a race to the bottom in terms of wages and working conditions. It is important to address the impact of the gig economy on employment and the economy by promoting fair labor practices, providing benefits and protections for gig workers, and investing in training and education to prepare workers for the changing job market."));

  list.add(GPT(
      "Describe a memorable experience you have had in nature and how it has influenced you.",
      "One difficult decision I had to make was choosing between two job offers. Both offers had their strengths and weaknesses, and I had to consider factors such as salary, benefits, company culture, and job responsibilities. To approach the decision, I created a pros and cons list for each job offer and weighed the importance of each factor. I also did additional research on each company, such as reading employee reviews and researching their mission and values. Finally, I consulted with trusted friends and family members to get their input and perspective. Ultimately, I chose the job offer that aligned best with my long-term career goals and provided the best overall package of benefits and opportunities."));

  list.add(GPT(
      "Discuss the importance of financial literacy and how to improve it.",
      "Technology has had a significant impact on education, changing the way we learn and access information. Technology has made education more accessible and convenient, with online courses and virtual classrooms that can reach learners around the world. It has also created new opportunities for interactive and personalized learning, such as adaptive learning platforms and educational games. However, technology also poses challenges, such as the digital divide and concerns around screen time and distraction. It is important to harness the benefits of technology in education while also addressing the challenges, by promoting digital equity and responsible use of technology."));

  list.add(GPT(
      "Describe a mentor or role model who has had a positive impact on your life and why.",
      "One place that holds special meaning to me is a park near my childhood home. The park was a place where I spent many hours playing, exploring, and making memories with friends and family. It was a place where I learned to ride a bike, played on the swings and slides, and had picnics with loved ones. The park represents a carefree and joyful time in my life, and reminds me of the importance of play and exploration. It also represents the importance of community and connection, as the park was a place where people of all ages and backgrounds came together to enjoy the outdoors and each other's company."));

  list.add(GPT(
      "Discuss the impact of immigration on society and its benefits and challenges.",
      "Social inequality has a significant impact on society, affecting access to opportunities, resources, and power. Social inequality can lead to poverty, discrimination, and social exclusion, which can have negative effects on individual well-being and social cohesion. To address social inequality, it is important to promote equity and fairness, by providing access to education, healthcare, and economic opportunities for all. It is also important to address systemic issues such as racism, sexism, and classism, through policies and programs that promote social justice and human rights. Finally, it is important to foster a sense of community and mutual support, by promoting empathy and compassion and by creating opportunities for people to come together and work towards common goals."));

  list.add(GPT(
      "Describe a significant personal challenge you have overcome and what you learned from it.",
      "One book that has had a profound impact on my life is To Kill a Mockingbird by Harper Lee. The book is a powerful and poignant portrayal of racism and social injustice in the American South. It taught me the importance of empathy, compassion, and standing up for what is right, even in the face of adversity. The book also helped me to understand the complexity and nuances of social issues and to appreciate the importance of diversity and inclusion. Overall, To Kill a Mockingbird is a timeless work of literature that has shaped my worldview and inspired me to be a more empathetic and socially responsible person."));

  list.add(GPT(
      "Discuss the impact of technology on education and its potential benefits and drawbacks.",
      "Financial literacy is essential for making informed decisions about money and improving one's financial well-being. It involves understanding concepts such as budgeting, saving, investing, and managing debt. Financial literacy can help individuals to avoid financial pitfalls and make the most of their financial resources. It can also lead to greater financial security and independence, as individuals are better equipped to manage their finances and plan for the future. To improve financial literacy, it is important to seek out education and resources, such as books, courses, and financial advisors. It is also important to practice good financial habits, such as tracking expenses, setting financial goals, and seeking out opportunities to save and invest."));

  list.add(GPT(
      "Describe a book or movie that has changed your perspective on life and how.",
      "One scientific discovery that has had a significant impact on society is the discovery of antibiotics. Antibiotics are medications that kill or slow the growth of bacteria, allowing the body to fight off infections. The discovery of antibiotics revolutionized medicine, allowing for the treatment of bacterial infections that were once fatal. Antibiotics have saved countless lives and have led to significant improvements in public health. However, the overuse and misuse of antibiotics has also led to the development of antibiotic-resistant bacteria, which poses a significant challenge to public health. It is important to use antibiotics responsibly and to develop new treatments and strategies to combat antibiotic resistance."));

  return list;
}
