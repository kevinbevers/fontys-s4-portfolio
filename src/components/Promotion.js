import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FaPaintBrush, FaMicrochip, FaGlasses, FaWpexplorer, FaBrain, FaNewspaper, FaTools, FaSwatchbook, FaPencilRuler, FaWalking, FaFile, FaBullseye, FaLaptopCode, FaWindowRestore, FaNetworkWired, FaStream, FaComment, FaFilePowerpoint, FaMobile, FaBook, FaBriefcase, FaWifi, FaCode, FaPray, FaBrush, FaClipboard, FaLightbulb, FaSchool, FaMicrophone, FaEnvelope, FaDraftingCompass, FaMarker, FaBed} from "react-icons/fa";
import "../styles/timeline.css";
// Images
import visionboard1 from  "../images/CreativeTechnologyVisionBoard.jpg"
import visionboard2 from "../images/CreativeTechGeneralVision_KevinBevers.jpg";
import mandodata from "../images/Mando_S1_DataPlotDesign.png";
import workshopresult from "../images/workshopResult.jpg";
import takeawayfromarticle from "../images/takeawayfromarticle.png";
import manifestvisi from "../images/Manifest3VisualizeWithEdin.png";
import teacherdartdrawing from "../images/teacherdartdrawing.png";
import workflow from "../images/workflow.png";
import dartboard from "../images/dartboard.jpg";
import prototypeworkshop from "../images/prototypeworkshop.png";
import dartexample from "../images/DartExample.png";
import pocsetup from "../images/poc_setup.png";
import scoreboarddesign1 from "../images/scoreboarddesign1.png";
import project1 from "../images/project1.png";
import skills from "../images/5skills.png";
import vote from "../images/vote.jpg";
import questions from "../images/Questions.png";
import icdp from "../images/ICDP.png";
import appmock from "../images/AppMock.png";
import ethic from "../images/ethic.png";
import swapmodes from "../images/SwapModes.png";
import classdiagram from "../images/ClassDiagram.png";
import sysdiagram from "../images/SysDiagram.png";
import compdiagram from "../images/CompDiagram.png";
import icdpoutcome from "../images/ICDP_Outcomes.jpg";
import changing from "../images/changing.png";
import managetopics from "../images/ManageTopics.png";
import emotionaldesign from "../images/emotionaldesign.png";
import assignmentemotion from "../images/emotionaldesign.png";
import dialogflow from "../images/DialogFlow.png";
import PPrehearsel from "../images/PPrehearsel.png";
import testingtypes from "../images/testingtypes.png";
import projectimpact from "../images/projectimpact.png";
import maxwin from "../images/maxwin.jpg";
import accepttest from "../images/acceptationtest.png";
import voiceAIprogram from "../images/voiceAIprogram.png";
import tacotronideas from "../images/TacotronIdeas.png";
import brainstorm from "../images/brainstorm.png";
import ourselection from "../images/ourselection.png";
import chatbot from "../images/chatbot.png";
import telegramgit from "../images/telegram-git.png";
import checo from "../images/checo.png";
import school from "../images/school.jpg";


const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <VerticalTimeline className="vertical-timeline-custom-line">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <p>{data.promotionPara}</p>
        </div>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="8 Feb 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaPaintBrush />}
  >
    <h3 className="vertical-timeline-element-title">First day of the semester</h3>
    <h4 className="vertical-timeline-element-subtitle">Introduction to Creative technology</h4>
    <p>
    First meeting, Everybody talked about  what makes them unique and the course got explained.<br />
    Think & Make is Creative technology.
    <br /> <br />
    Watched a documentary with the whole class, about creativity.
    <br />
    The project should be life changing, change the way people do something.<br />
    “If you want to learn something, failure isn’t something to be endured, it should be embraced”
    <br /> <br />
    Duo project is gonna be some kind of speed dating, interesting
    <br /> <br /> 
    Cool innovative projects, that help people that’s at the core it seems.
    Innovate to improve!
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="9 Feb 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaMicrochip />}
  >
    <h3 className="vertical-timeline-element-title">Start building portfolio</h3>
    <h4 className="vertical-timeline-element-subtitle">Introduction to IOT and tinkering with microcontrollers</h4>
    <p>
    After doing some morning chores, started building out my ideas for the portfolio and created a first version and put it on GitHub Pages.
    <br /> <br />
    Create small project with Arduino or Raspberry PI,<br />
    I’m going to build a small weather station that sends data remotely, this data should be shown on a webpage
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="10 Feb 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaWpexplorer />}
  >
    <h3 className="vertical-timeline-element-title">What is possible with technology lecture.</h3>
    <h4 className="vertical-timeline-element-subtitle">+ Brainstorming sessions in breakout for individual projects</h4>
    <p>
    Discussed project ideas what to use and what is the goal of the semester, learning outcomes. Discussed ideas in small break out rooms.<br/> <br />
    I explained 2 of my ideas:<br /> 1. a smart basement / storage cabinet. <br/>2. my allergy restaurant reservation.
    <br /> <br />
    Explored the possibilities with technology that currently exist and what will be possible in the future.<br />
    Also had some time to work on the portfolio a bit more.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="11 Feb 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaBrain />}
  >
    <h3 className="vertical-timeline-element-title">Brainstorm Session project</h3>
    <h4 className="vertical-timeline-element-subtitle">What is vision?</h4>
    <p>
    Brainstorm session, What if I can, …. (change)(Humanity + technology),  Decide what to focus on.
    <br /> <br />
    Google voice restaurant reservation with allergies.(Google voice and app, would need an API / server) <br />
    What if I, Change the way people with allergies go out for dining. <br />
    What means change the way, People with allergies get dishes that look and feel and taste great and are not just a main dish with the allergy taken out.
    <br /> <br />
    Smart basement(Storage cabinet)(Camera recognition and app) <br />
    What if I, Change the way people keep up with the things they have available in the house? Make it easier for people to know What to get from the grocery store. <br />
    <br />
    Helped some classmates with thinking of project visions.
    <br /> <br />
    Feedback for my ideas:
    Too good to go idea, less waste for restaurants.
    Think about naming the assistant.
    <br /> <br />
    What is vision? Workshop.<br />
      A vision is someone’s idea of the future and someone’s look at the future.
      <br /><br />
Personal opinion of tech visionars top 3<br />
1. Steve Jobs<br />
2. Bill Gates<br />
3. Elon Musk<br />
<br />
A vision has to do with direction, meaning and purpose.
<br />
Created 2 vision boards. One for my projects and one for my general vision for creative technology.
    </p>
    <img src={visionboard1} height="300" width="300"></img>
    <img src={visionboard2} height="300" width="300"></img>
  </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="12 Feb 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaWpexplorer />}
  >
    <h3 className="vertical-timeline-element-title">Avicii Project Workshop.</h3>
    <h4 className="vertical-timeline-element-subtitle">Visualize text emotion into data plots and graphs. And then make these into a creative design.</h4>
    <p>
    Introduction to the Avicii Project, data visualization of songs, movies, series, or any other text and the emotion it has.
    Make it into data visualization and print it on a t shirt.
    <br /><br />
    I’m gonna do the mandolorian
    <br />
    A lot of text to copy and filter out line of mando.
    <br />
  Created a cool visual representation of my visualized data of all text mando spoke during S1 sorted by chapter
    </p>
    <img src={mandodata} height={300}></img>
    <img src={workshopresult} height={300}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="22 Feb 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaNewspaper />}
  >
    <h3 className="vertical-timeline-element-title">Deciding what individual project to take on and defining it.</h3>
    <h4 className="vertical-timeline-element-subtitle">Workshop creating a creative technology manifest.</h4>
    <p>
    Introduction start about Individual project by teacher.<br /> 
      - Dive into the subject of your choice<br /> 
      - Describe your project<br /> 
      - Make a planning<br /> 
      - Start exploring<br /> 
      - Describe your needs.<br /> 
    Brainstorming in breakout rooms with pep<br /> 
    <br /> 
    <br /> 
    Workshop creating a Creative technology manifest. <br /> 
    A manifest is a short list of rules / visions of a way of being. For example the 10 rules of Christianity in the Bible. <br /> 
    We read an article about creative technology and split up into groups to create our own versions of a creative technology manifesto.  <br /> 
    We combined the manifest lines from each group into 1 for the whole class. <br /> 
     Tomorrow we are going to visualize it / make a cool looking version of this manifest. <br /> 
    <br />  <br /> 
- A creative technologist <br /> 
~ “it’s someone who is a bit creative, has some good experience with technology and bridges the gap between the two” <br /> 
<br />
An interesting note I agreed with ~ “Final polish is important because if a person didn’t care enough to fix those small things, why should a user respect the experience?”
<br /> <br /> 
The article we read was really interesting <a href="https://medium.com/@laserpilot/advice-for-creative-technologists-21f3f220b2">Article link</a>
    </p>
    <img src={takeawayfromarticle} height="500"></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="23 Feb 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaWpexplorer />}
  >
    <h3 className="vertical-timeline-element-title">Visualized our class Manifest and Visualized 1 manifest line in specific.</h3>
    <h4 className="vertical-timeline-element-subtitle">Researched and closed in on my individual project idea an automated dart scoring system</h4>
    <p>
    Visualized the class manifest and visualized 1 specific manifest together with a classmate in a break out room.<br />
    <a href="https://kevinbevers.github.io/fontys-s4-manifest-console-webapp/">Manifest visualization</a><br />
    <a href="https://kevinbevers.github.io/fontys-s4-manifest-console-webapp/manifest3">Manifest visualization (specific line)</a>
    </p>
    <img src={manifestvisi} height={200}></img>
    <p>
    Researching the possibilities I have to realize my individual project, an automated dart counting system.<br />
    Found a few interesting projects I could work with. I think of doing a 2 camera approach, since a 4 camera approach would be way more expensive. There is also a possibility to do a 1 camera approach, but I think a 2 camera triangulation method is a very good middle ground.<br />
    <br />
    Talked with the teacher about the possible options on detecting darts since I couldn’t come to a conclusion on how to go about it.<br />
    The result is this drawing by teacher, explaining the triangulation of the dart position based on board size.<br />
    </p>
    <img src={teacherdartdrawing} height={300}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="24 Feb 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaTools />}
  >
    <h3 className="vertical-timeline-element-title">Workshop how to learn new tech.</h3>
    <h4 className="vertical-timeline-element-subtitle">Doing some more research and writing down things that need to be done so that this project can succeed.</h4>
    <p>
    Workshop how to learn new tech.<br />
    Learned something about ubiquitous technology (IOT devices). Tech that’s all around us and not really noticable.<br />
    Why do tech research? Substantiate choices. Be able to show your efforts to make your story believable and trustworthy.<br />
    Start formulating a question for your research.<br />
￼   <br />
    Also had my semester coach introduction with Geert Jan van Ouwendorp.<br />
    </p>
    <img src={workflow} height="200"></img>
    <p>
    Doing some more research and writing down things that need to be done so that this project can succeed
    ￼<br />
    I’m thinking of doing the detection with triangulation, 1 camera sees the whole board from the top another sees the whole board from the side.<br />
    Then I can point a coordinate point on a x y axis. And use this <a href="https://codegolf.stackexchange.com/questions/167440/score-a-single-dart">Example</a> to know what the thrown score is.<br />
    The dartboard has a diameter of 34cm.<br />
    <br />
    Parts to make<br />
    - dart index on x - y axis<br />
    - Calculate dart score based on index<br />
    - Game of darts code<br />
    - Control the game of darts.<br />
    </p>
    <img src={dartboard} height="200"></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="25 Feb 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaFile />}
  >
    <h3 className="vertical-timeline-element-title">Workshop fire starters, what are your CoreStrengths? And how to unlock them.</h3>
    <h4 className="vertical-timeline-element-subtitle">Group meeting about progress and continuing work on individual project</h4>
    <p>
    I Read the document and I think the 2 that fit with me are:<br />
    <br />
      Dream:<br />
      Dream stands for creativity, following your own path, openness, curiosity, liveliness and likes to make jokes. For you, the world is more than an average voyage of discovery. It is possible that you love travel above average and your curiosity will take you further. <br />
      Some examples of DREAM CoreStrengths: exceptional / mindful / searching / spontaneous <br />
      <br />
      Do:<br />
      Do stands for grounded, down-to-earth, building and arranging things, be thorough, look realistically at the world. You. Live quite effectively and can inspire others with that. It’s very nice to leave things up to you, you make sure it’s all right. You have a lot of growth capacity.<br /> 
      Some examples of DO CoreStrengths: Useful / effective / realistic / solid / accurate <br />
      <br />
      How do these CoreStrengths already manifest, in your personal and school life?<br />
      Dream:<br />
      - I always have a lot of ideas and opinions on things and always see multiple ways of how something could be done.<br />
      - I like to make jokes, it takes away the edge from a lot of conversations.<br />
      - I like traveling in a unique way. I’m not always 100% enthusiastic in the moment but after the fact I always feel very satisfied after a travel journey.<br />
      <br />
      Do:<br />
      - I also have a very black and white vision of things and not a lot of grey in between. This fit’s with the Do strength since it makes me effective in making decisions.<br />
      - I always feel responsible to do my part of the job and will often take over parts that are left on the table, to make sure things get done.<br />
      <br />
      Had some tips and tricks on how to enable creative thinking. Listening to Music to enable not thinking inside the box but outside it.<br />
      that to truely think of something new, you need to step out of the standard brainstorming meeting feel, and get inspired. otherwise you just think of things you are already familiar with<br />
      <br />
      In the afternoon we had a Communal startup, talking about what we already did and what we took away from it.<br />
      We also talked about what intrigues us, and how we apply this in our individual project.<br />
      Worked on individual project. Looked more into the inner workings of how to make my project reality. <br />
      I made some drawings of a coordinate grid and how to calculate the score of a coordinate. <br />
      Next up is finding out how to recognize a dart and point it’s location.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="26 Feb 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaWalking />}
  >
    <h3 className="vertical-timeline-element-title">A nice morning walk.</h3>
    <h4 className="vertical-timeline-element-subtitle">First semester coach meeting and continuing work on the individual project</h4>
    <p>
    Teacher couldn’t give the planned small meeting / workshop cause of migraine. After this is slept out a little and then went for a pretty long walk.<br />
    During the walk I put everything I want to do for the project on a mental checklist.<br />
    <br />
    First individual semester coach meeting with Geert Jan.<br />
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="1 March 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaSwatchbook />}
  >
    <h3 className="vertical-timeline-element-title">Workshop about prototyping</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    don’t get attached to your prototypes, make it quick and simple.<br />
    Multiple types of prototypes, some for design some for functionality.<br />
    We made a small paper prototype as practice / example.<br />
    Don’t overthink your prototype.<br />
    </p>
    <img src={prototypeworkshop} height="200"></img>
    <p>
    We had a “field trip” in the afternoon, It was a guest lecture about hacking and cyber security. <br />
    After that we had a meeting with Our teacher talking and listing our favorite teach channels / news. <br />
    Each of us wrote down the semester gains and pains thus far.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="2 March 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaPencilRuler />}
  >
    <h3 className="vertical-timeline-element-title">Made a report of my research findings, to show what my vision is of the project.</h3>
    <h4 className="vertical-timeline-element-subtitle">Talked with the teacher on how to go about building the prototype.</h4>
    <p>
    During the morning I wrote down my findings of all my research and thinking about how do the project.<br />
    Not everything is in there but the main idea is solidified in this document.<br /><br />
    In the afternoon I looked into the Github repo’s of already existing projects more and tinkered a bit with python to get an understanding of the written code.<br />
    I also made a logo for my project, because I thought it would add a nice touch.<br />
    I also realised I'm a bit stuck on how to start the programming for the project. <br />
    I talked with The feedback teacher for this day, He gave me a clear goal and helped to find out what the steps are I need to take to work towards a prototype.
    </p>
    <img src={dartexample} height="200"></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="3 March 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaBullseye />}
  >
    <h3 className="vertical-timeline-element-title">Workshop Creative Coding</h3>
    <h4 className="vertical-timeline-element-subtitle">Setting up my proof of concept</h4>
    <p>
Had a headache this morning because of sleep deprivation. Asked the teacher to record the teams meeting so I can look back at it in the afternoon.<br /><br />
In the afternoon I worked on setting up my prototype while listening to the teams meeting.<br />
The meeting explained in detail what is expected of us and how we should go about fulfilling those expectations.<br />
The expectation is a technical prototype (proof of concept) a little piece about my creative tech vision and something that tells the story of how my project came to be.<br />
I made a setup to test the things I’m trying to built and this setup is probably what I’m going to use for my proof of concept.<br />
    </p>
    <img src={pocsetup} height="300"></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="4 March 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaLaptopCode />}
  >
    <h3 className="vertical-timeline-element-title">Concept questions answered</h3>
    <h4 className="vertical-timeline-element-subtitle">Continued tinkering with python</h4>
    <p>
    Still don’t really feel well, there was a workshop about connecting that I didn’t attend but I have read the assignment and created my own concept text.<br />
    <br />
    <b>What is the impact of your project? Can you enlarge it?</b><br />
    The impact my project gives is a more enjoyable dart experience for everyone that doesn’t play darts on a fully concentrated level. It’s a tedious job to keep track of score and removes a bit of the pleasure in just throwing. My project takes away that annoyance and improves the overall fun of the game for most players.
    I can enlarge the impact by making my project readily available and easy to install for other people to use. One of the easiest ways to do this is to make it open source and modular.<br />
    <br />
    <b>What does your process look like(creative + research based)?</b><br />
    I always start with forming an idea that provides a solution to something I experienced. After I have a general idea of how it should all be done, I will research how to exactly achieve the project outcome I want and then I’ll start building the project.<br />
    <br /><br />
    Further tinkering with the Dartboard camera setup I made in my room. I have had some problems with python using the wrong version and this caused some library issues.<br />
    I finally found the issue that has been annoying me for the last 2 days. I changed the python version that get’s used by macOS 2.7 to 3.9. Now I can use everything decently and hopefully start making some progress.<br />
    Since I’m not home tomorrow and don’t have access to the camera’s and feel like doing something a little more comfortable I’m planning on creating a Web API in python that would already do the game of darts.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="5 March 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaWindowRestore />}
  >
    <h3 className="vertical-timeline-element-title">Working on individual project</h3>
    <h4 className="vertical-timeline-element-subtitle">Quick meeting about potential client project</h4>
    <p>
    Today I’m going to build a part of the dart game itself so when I make the auto score detection with the cameras I can play a game of darts by feeding it the scores.<br />
    We had a small briefing about a potential project in cooperation with ACI = academy for creative industries.<br />
    The project has something to do with Volumetric video.<br />
    <br />
    Found this as a base to use for my web app scoring system <a href="https://github.com/ajaichemmanam/react-flask-socketio">https://github.com/ajaichemmanam/react-flask-socketio</a><br />
    <br />
    Started development on the web server / Web API that I want to use as the scoring module. It will have endpoints to call for score updates that the board code can call whenever a score get’s thrown.<br />
    <br />
    I also feel that I have been slacking a little bit this week. So I will work a bit more on my individual project Sunday afternoon and early evening.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="8 March 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaLaptopCode />}
  >
    <h3 className="vertical-timeline-element-title">Group meeting about what is expect for delivery</h3>
    <h4 className="vertical-timeline-element-subtitle">Working on the scoreboard web app</h4>
    <p>
      In the morning we had a meeting about how to deliver everything this week and some of the learning outcomes got explained to us all.<br />
      I asked a question about how to deliver documents and source code made. It is preferable if there are links in my portfolio to the documents.<br />
      <br />
      The whole afternoon i have been busy with sockets for my front-end scoreboard. Learned how to integrate the sockets,<br />
      Created a design draft of the front-end scoreboard.(adobe xD)<br />
      Still having problems concentrating on this project, I think it’s because the technical challenge is just out of my reach in this short time frame.<br />
    </p>
    <img src={scoreboarddesign1} height="200"></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="9 March 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaNetworkWired />}
  >
    <h3 className="vertical-timeline-element-title">Working on individual project</h3>
    <h4 className="vertical-timeline-element-subtitle">Workshop about communication between devices</h4>
    <p>
    In the morning I worked on programming the web server, I decided to not use python for the back-end and just use nodeJS to be the Web API since I have more experience with node.<br /><br />
    In the afternoon we had a workshop about connections between devices.<br /> 
    This workshop also had a part where we needed to make our own connection for this I decided to use MQTT, I installed the Matt server / broker on the PI and connected to it via the Arduino with an Mqtt client. <br />
    To showcase this I also made use of my old smarhome project that can send updates to the Mqtt broker and receive updates from subscribed topics.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="10 March 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaStream />}
  >
    <h3 className="vertical-timeline-element-title">Group meeting about what is expect for delivery</h3>
    <h4 className="vertical-timeline-element-subtitle">Working on the scoreboard web app</h4>
    <p>
    In the morning I got some feedback on my portfolio. The feedback I got was directed at what to describe and how I should go about showcasing my project phases.<br />
    One of the criticisms, was my timeline having a little too much text to read. I will try and shorten this in a little bit. But I also think a full blown timeline with all things described in it adds a little unique flair.<br />
    <br />
    In the afternoon I worked on my portfolio project and cleaning it up and adding some of the stuff I got feedback on.<br />
    I’m making a separate page just describing my individual project phases, structured mostly the same as the timeline just with a different twist and some more images to make it easier on the eyes.<br />
    </p>
    <img src={project1} height={250}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="11 March 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaFilePowerpoint />}
  >
    <h3 className="vertical-timeline-element-title">Working on individual project</h3>
    <h4 className="vertical-timeline-element-subtitle">Workshop about communication between devices</h4>
    <p>
    In the morning I worked on programming the web server, I decided to not use python for the back-end and just use nodeJS to be the Web API since I have more experience with node.<br /><br />
    In the afternoon we had a workshop about connections between devices.<br /> 
    This workshop also had a part where we needed to make our own connection for this I decided to use MQTT, I installed the Matt server / broker on the PI and connected to it via the Arduino with an Mqtt client. <br />
    To showcase this I also made use of my old smarhome project that can send updates to the Mqtt broker and receive updates from subscribed topics.<br />
    </p>
    <img src={skills} height={200}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="12 March 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaComment />}
  >
    <h3 className="vertical-timeline-element-title">Workshop creative process</h3>
    <h4 className="vertical-timeline-element-subtitle">and making a powerpoint presentation</h4>
    <p>
    Nothing done during the morning, I don’t feel that well.<br />
    <br />
    In the afternoon had a Workshop creative thinking part 2.<br />
    ￼<br />
    The workshop introduced us to a few different techniques to start a creative thinking process.
    <br />
    I looked a bit more into the camera detection, but I decided that I should make sure I have a presentation for tomorrow.<br />
    https://www.pyimagesearch.com/2015/05/25/basic-motion-detection-and-tracking-with-python-and-opencv/.<br />
    <br />
    I’m satisfied with the presentation I made. In the presentation I made clear what the things are that I learned during the 3 week period. <br />
    I described my failures and that in the end I wished that I had a better product to show for it. I’m not happy with the proof of concepts I made.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="15 March 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaStream />}
  >
    <h3 className="vertical-timeline-element-title">Assigned a duo project partner</h3>
    <h4 className="vertical-timeline-element-subtitle">Brainstorming and forming an idea for the duo project</h4>
    <p>
    Got assigned in DUO’s for the upcoming duo project.<br /> 
    We talked about the ideas we both had and formed some ideas for the project demo video / presentation.<br />
    One of the ideas was the smart storage system.<br />
    <br />
    In the afternoon another member joined our group.In the afternoon another member joined our group.<br />
    Geert Jan didn’t really like our idea so he gave us the assignment to each on our own find 20 inspirational tech ideas.<br />
     And list these to evaluate them tomorrow morning.<br />
      - <a href="https://www.youtube.com/watch?v=WzXhCCCcbTQ">Modular tracking framework</a><br />
      - <a href="https://dynacrop.space/en/">smart farming</a><br />
      - <a href="https://www.youtube.com/watch?v=vN4U5FqrOdQ">Iphone reveal</a><br />
      - <a href="https://www.youtube.com/watch?v=eK4WHG7kZ6w">Cloud lamp and some other ideas</a><br />
      - <a href="https://twitter.com/Katlysss/status/1367840056837341190?s=20">AR flyers and magazines</a><br />
      - <a href="https://www.youtube.com/watch?v=dzifIAhTTHA">Finger bot, Smart plant pot, Smelly alarm clock</a><br />
      - <a href="https://www.youtube.com/watch?v=cINzqxm2-xA">Countertop dryer</a> <br />
      - <a href="https://remarkable.com/">Tablet to take notes like old school paper but nicer.</a><br />
      - <a href="https://www.daimler.com/innovation/autonomous-driving/future-bus.html">Auto driving bus</a><br />
      - <a href="https://www.youtube.com/watch?v=FU2QpBOjyWs">Smart shower</a> <br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="16 March 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaBrain />}
  >
    <h3 className="vertical-timeline-element-title">Brainstorming for trio project</h3>
    <h4 className="vertical-timeline-element-subtitle">& feedback from Geert Jan</h4>
    <p>
    We put all our inspirational ideas together and came up with a few potential projects we could make for the upcoming project.<br />
    One of our best ideas is probably a cloud that showcases the upcoming weather but can also show the mood of a given dataset.<br />
    For example a message group.<br />
    <br />
    After feedback from Geert Jan on the ideas we decided to go with the cloud, we called it WünderWolk and made a small project plan and formed questions for our research document.<br />
    There was some discussion between me and Bart about the research document because we both have different views of how a research document should look and be structured.<br /> 
    In the end we figured it out.<br />
    </p>
    <img src={skills} height={200}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="17 March 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaSwatchbook />}
  >
    <h3 className="vertical-timeline-element-title">Guest lecture from an interesting company</h3>
    <h4 className="vertical-timeline-element-subtitle">Go out and vote!</h4>
    <p>
    Did some documentation work before we had a guest lecture from greenhouse company.<br />
    It was a really interesting lecture from a potential internship company, the presentation was mainly about marketing with IT and gave really nice insights.<br />
    <br />
    I went out voting for the national elections and afterwards visited my grandma in Belgium who had a hip surgery.<br />
    Yes it was a safe visit with masks and some distance.😷<br />
    </p>
    <img src={vote} height={400}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="18 March 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaBrain />}
  >
    <h3 className="vertical-timeline-element-title">Workshop about impact</h3>
    <h4 className="vertical-timeline-element-subtitle">Creating a powerpoint</h4>
    <p>
      In the morning we had a small workshop about the impact of projects you make. One of the questions asked is in what way does your project create impact. I think our WünderWolk project impact people with Freedom & Connection. <br />
      Because our project gives people a choice which gives them freedom and makes an emotional impact / connection via the social media / group chat feel visualization.<br />
      <br />
      Workshop how to create a scope of focus?<br />
      We had a little interaction and where given a small assignment to go more in-depth on our project and create a scope of focus. And write down the steps we made to scope our topic. <br />
      We did this together with the whole class as it appeared to be rather difficult to just get started with for most people in the class.<br />
      We got some more info about questions that can answer your compass.<br />
      ￼<br />
      We had some questions about our personal look on things.<br />
      <br />
      As a group we made a powerpoint for the presentation tomorrow.
    </p>
    <img src={questions} height={200}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="19 March 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaWpexplorer />}
  >
    <h3 className="vertical-timeline-element-title">Present our idea</h3>
    <h4 className="vertical-timeline-element-subtitle">research and workout things we need to know.</h4>
    <p>
    Project presentation, we got some nice feedback on our project, the teachers told us it was a cool idea but that during development we should talk with people what they would want the lamp to do to make it more magical.<br /><br />
    Each of us got a specific task to complete today.<br />
    I’m going to find out what platforms we support by looking into available api’s for the data.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="22 March 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaPencilRuler />}
  >
    <h3 className="vertical-timeline-element-title">Research and planning</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    During the morning we had a talk about our project planning with Mijke about what to do when.<br />
    It’s a quick meeting but it set us on the right track on what to do when.<br />
    We updated our trello board to have sprints. <br />
    After that we reviewed and tidied up our research document. That will guide us during the designing and prototyping of the product.<br />
    <br />
    We also had some quick fun with Wombo.ai.<br />
    <br />
    In the afternoon we had a workshop / meeting about the creative process from Geert Jan
    </p>
    <img src={icdp} height={200}></img>
    <p>
    It was a very interesting workshop and I really liked the timeline / chart that was designed by Geert Jan.<br />
    I will try and get us to follow this timeline in our trio project.<br />
    All the different phases got explained and also that it isn’t just a straight through timeline each phase could loop back into itself and you could even have a loop around the whole process.<br />
    <br />
    A few tips to also look into:<br />
    - https://designthinking.ideo.com/<br />
    - https://www.designkit.org/methods (Tip!)<br />
    - http://ictresearchmethods.nl/Methods<br />
    - https://cmdmethods.nl/<br />
    - https://toolkits.dss.cloud/design/ (Tip!)<br />
    - https://research.utwente.nl/en/publications/a-design-process-for-creative-technology<br />
    <br />
    As a group we also did some research into our concept video and got a nice collection of ideas going.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="23 March 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaBrain />}
  >
    <h3 className="vertical-timeline-element-title">Sick day 🤒</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    Took the day off. Terrible headache.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="24 March 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaSwatchbook />}
  >
    <h3 className="vertical-timeline-element-title">Making an app mock-up</h3>
    <h4 className="vertical-timeline-element-subtitle">and reviewing / talking about the concepts</h4>
    <p>
    During the morning we did a small scrum meeting together and talked about our tasks we need to complete before the end of the week and how to achieve this. <br />
    I started making our App mock-up.<br />
    <br />
    In the afternoon we each worked on our task in a call together. I finished version 1 of the App mock-up.<br />
    ￼<br />
    We also noticed we forgot to do the daily retrospect and summary, so we added those retroactively to the teams channel.<br />
    I also finished up my assignments given by Eva. <br />
    </p>
    <img src={appmock} height={200}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="25 March 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaNewspaper />}
  >
    <h3 className="vertical-timeline-element-title">Working on the trio project</h3>
    <h4 className="vertical-timeline-element-subtitle">and a workshop about ethics</h4>
    <p>
      During the morning we finished our research document and tight up other loose ends.<br />
      After that we had feedback from Judith about our project, she isn’t convinced and Is missing some magic.<br />
      <br />
      In the afternoon we had a Workshop about Ethical thinking.<br />
      ￼<br />
      It was about how tech affects the world. Decision making.
    </p>
    <img src={ethic} height={200}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="26 March 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaSwatchbook />}
  >
    <h3 className="vertical-timeline-element-title">Feedback & setting up shop</h3>
    <h4 className="vertical-timeline-element-subtitle">Making a survey</h4>
    <p>
      During the morning we worked on our final small tasks from this sprint week, and we had a very positive feedback meeting with Mijke.<br />
      She gave us the greet idea to connect mood and weather types to make it more visually appealing / special. The cloud is like a pet in your house.<br />
        It’s something that just happens naturally in the living room. Like a dog getting excited when everyone in the room get’s excited as well. <br />
        This is a really nice comparison by Bart and Mijke.<br />
        <br />
        Time left make a small document / visualization of happenings and the weather / emotion that fits with it.<br />
        <br />
        In the afternoon we started to make the product reality. By writing some first code.<br />
        Meeting with Geert Jan about demotivation of the semester.<br />
        I personally installed flutter and setup the git repo on my MacBook.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="29 March 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaMobile />}
  >
    <h3 className="vertical-timeline-element-title">Feedback and starting to learn flutter</h3>
    <h4 className="vertical-timeline-element-subtitle">Making beginnings on the flutter app</h4>
    <p>
    During the morning we had feedback from Mijke on our survey, we should hold the survey under our target audience, but for this project it isn’t relevant to research into a target audience and then target those for the survey.<br />
    Continued working on the flutter app. Mainly front-end focussed.<br />
    <br />
    In the afternoon I spent more time figuring out how flutter exactly works. Hope to have a working swipe mechanism to switch between modes working. And the basic layout.<br />
    At the end of the day I the basic layout we want and can swipe left or right to switch mode.
    </p>
    <img src={swapmodes} height={250}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="30 March 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaBook />}
  >
    <h3 className="vertical-timeline-element-title">Class Diagram, Learning flutter</h3>
    <h4 className="vertical-timeline-element-subtitle">Workshop about architecture.</h4>
    <p>
      In the morning I overslept, but made a class diagram for the app. Although it’s a small one because the app doesn’t have that much special things to handle.<br />
      <br />
      During the afternoon I continued work on the app front-end, mainly focussed on research into flutter.<br />
      Workshop about architecture? What is it about and how to use it. <br />
      The workshop introduced us to C4 models.<br /> 
      But I have already previously used this extensively in my software semester.<br />
      The workshop was later on the day, that was nice since it didn't interrupt our work for the trio project.<br />
      The workshop was also a bit repeating since I already have experience with C4 models but it was a nice refresher none-the-less.<br />
    </p>
    <img src={classdiagram} height={200}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="31 March 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaBriefcase />}
  >
    <h3 className="vertical-timeline-element-title">Explaination on learning outcomes and creating architecture</h3>
    <h4 className="vertical-timeline-element-subtitle">Feedback and learning</h4>
    <p>
    We began the morning with a meeting with Geert Jan explaining all learning outcomes in detail. <br />
    Very helpful and gives good insight in what is expected from us by the end of the semester.<br />
    We where given an assignment to map the learning outcomes in Geert Jans nicely designed ICDP flow.<br />
    <img src={icdpoutcome} height={250}></img>
    <br />
    I worked on our groups architecture in structurizr. <br />
    <img src={sysdiagram} height={250}></img>
    <img src={compdiagram} height={250}></img>
    <br />
    We also got some feedback from Geert Jan this morning. The feedback was pointed at our survey being a bit flat. But after some talks about the results and how to use them it was deemed a pretty fruitful survey. <br />
    Geert Jan gave us some great ideas and sketched the possibilities our product has. All in all it was a very good feedback session for us.<br />
    <br />
    In the afternoon I first went for a walk with the dog to unload a bit from the busy morning.<br />
    After that I received some feedback on my component diagram. I tweaked my diagram and continued the rest of the afternoon focussing on learning flutter.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="1 April 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaBook />}
  >
    <h3 className="vertical-timeline-element-title">Research MQTT client in flutter</h3>
    <h4 className="vertical-timeline-element-subtitle">Created slider & got my PS5!!</h4>
    <p>
    During the morning I researched into MQTT client in flutter and looked into the slider widget and how it functions and how you can visualize it the way you want it to visualize.<br />
    <br />
    In the afternoon I continued my research into the Mqtt client and had a show & grow  meeting with the class. <br />
    Where I told something about my way of working and exploring with flutter.<br />
    After that meeting was finished. I booted up my new PS5.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="6 April 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaWifi />}
  >
    <h3 className="vertical-timeline-element-title">Implementing mqtt into the flutter app</h3>
    <h4 className="vertical-timeline-element-subtitle">Defining the protocol</h4>
    <p>
      Had another slow going morning, I did a workout because I want to get back into a god rhythm so I did a workout after I walked the dog. <br />
      Then I watched some video’s about programming.<br />
      <br />
      During the afternoon I worked on the daily Tasks I set for myself today. <br />
      Implementing MQTT into the flutter app. And writing a protocol for us to use a a group.<br /> 
      First up I looked into the MQTT implementation and added it to my code base. <br />
      It all looked okay but still a bit messy. After that I looked into the protocol to use and I have a good idea on how to do it based on the things I found online.<br /> 
      But I still have to convince my team members it’s the right approach. <br />
      After that I tested my MQTT with an online broker and realized the code I implemented was semi deprecated and I switched to a newer version that also looks way cleaner and maintainable than the version I implemented earlier. <br />
      All in all a sluggish day but stuff got done anyways.<br />
    </p>
    <img src={changing} height={250}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="7 April 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaMobile />}
  >
    <h3 className="vertical-timeline-element-title">Finishing the App UI</h3>
    <h4 className="vertical-timeline-element-subtitle">Taking a look for my Internship period.</h4>
    <p>
      In the morning we as a group discussed what we where going to do for the day and I Decided to set goals to finish the full UI.<br />
      One of the first things I wanted to find out was how to make my sliders and config menu look like the one that is native on IOS. <br />
      I spend a good bit of time during the morning finding a nice library with good documentation so I could learn from it.<br />
      <br />
      In the afternoon I finished the complete UI except for the managing of subjects.<br />
      I spend a good bit of time to look into the Internship canvas and I even solicited for 1.<br />
      For the internship I also talked with my girlfriends father who is a partner in education and told me what is expected from students and what students can expect from the companies during an internship.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="8 April 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaComment />}
  >
    <h3 className="vertical-timeline-element-title">Added final important part for UI</h3>
    <h4 className="vertical-timeline-element-subtitle">Feedback on group project and sememester coach meeting</h4>
    <p>
    In the morning I started working out how to go to a new page with a button and navigate back. And then on that page load in a list. <br />
    During this morning I also had a meeting with my semester coach about Geert Jan about this semester and how I was doing. <br />
    It was a nice meeting and it gave me some good positive vibes.<br />
    <br />
    After that in the afternoon I looked into dynamically adding and deleting items from that list and even added a swipe gesture to show a delete button that deletes a item from the list.<br />
     We also had a very good feedback session with Eva. <br />
     She told us our documentation was very professional. <br />
     The only thing it was missing was some research and description of the impact our product could have on humanity.<br />
    </p>
    <img src={managetopics} height={250}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="9 April 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaStream />}
  >
    <h3 className="vertical-timeline-element-title"></h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    During the morning we had a guest lecture about patents, copyright and trademarks. <br />
    For me it was a really valuable and interesting lecture, since I really like the details and nuances that go into law.<br /> 
    Learned a few nice things about how copyright and trademarks work. And got to ask some nice questions.<br />
<br />
    Workshop about visual prototyping. With some assignments. 
    Learned some interesting stuff again. I knew what an MVP and MLP encapsulate but I did learn more about how to structure a MLP compared to a MVP.<br />
    We got given an assignment to complete to learn to associate the different types of design to things that already exist. I had a lot of fun working out this assignment.<br />
    </p>
    <img src={emotionaldesign} height={250}></img>
    <img src={assignmentemotion} height={250}></img>
    <a href="/fontys-s4-portfolio/docs/Assignment_visualprototyping.pdf" target="_blank">Click to open assignment document in a new tab</a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="12 April 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title">Completed the subject(topic) management functionality</h3>
    <h4 className="vertical-timeline-element-subtitle">Workshop about dialog flow</h4>
    <p>
      During the morning I worked on implementing a dialog box to add a new topic to your list. <br />
      I hoped to also implemented some MQTT calls but I didn’t have the time yet, since most stuff during this project appears to take longer than expected before hand.<br />
    <br />
      Workshop about dialog flow from Geert Jan. It's an interesting tool I have used before in S1 and it was nice getting a better look at it with some guided examples.<br />
    </p>
    <img src={dialogflow} height={250}></img>
    <p>
      For the rest of the afternoon I worked on the app communication and finished up the ability to add topics.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="13 April 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title">Finishing app connection with the RPI</h3>
    <h4 className="vertical-timeline-element-subtitle">Workshop testing</h4>
    <p>
    During the morning I worked on updating / recreating my Curriculum Vitae for my internship period. And I added some MQTT calls in the mobile app.<br />
    During my lunch break I got a call about a possible internship, I’m hope I will get invited for an interview. <br />
    <br />
    In the afternoon we had a workshop about testing. During the workshop we got some explanation about the o so familiar use cases.<br />
     And created them for our trio project. <br />
     After the workshop was over Me and Bart worked together of getting the kinks out of the protocol and fully implemented the required publish messages to send settings updates to the RPI.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="14 April 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaFilePowerpoint />}
  >
    <h3 className="vertical-timeline-element-title">Thinking about project impact</h3>
    <h4 className="vertical-timeline-element-subtitle">Workshop about testing</h4>
    <p>
      In the morning we had feedback on our progress from Geert Jan and he approved of our idea to test the sentiment value this weekend with a small script during the Grand Prix. 
      We also wrote up our project impact and updated our vision.
    </p>
    <img src={projectimpact} height={250}></img>
    <p>During the afternoon there was a workshop about testing from Erik.</p>
    <img src={testingtypes} height={250}></img>
      <p>After the workshop I created the powerpoint presentation for our Rehearsel tomorrow.</p>
      <img src={PPrehearsel} height={250}></img>
  </VerticalTimelineElement>

    <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="15 April 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaComment />}
  >
    <h3 className="vertical-timeline-element-title">Finally finished V1 of the app.</h3>
    <h4 className="vertical-timeline-element-subtitle">Rehearsel presentation and guest lecture</h4>
    <p>
      In the morning I finished up the loading of settings from the MQTT and setting those in the app.<br />
      Now when the app starts up it has the values that are set on the RPI.<br />
      <br />
      Starting the afternoon with a class meeting where each group went one by one with rehearsing their presentation.<br />
      The feedback we got was positive in a broad sense. <br />
      The 2 remarks we had: “Show the concept at the beginning visualized so that listeners don’t keep guessing what it is about”, “research impact cloud on the person, and how it makes you feel connected”.<br />
      <br />
      At 15:00 We had a guest lecture about Artificial Intelligence in Arts.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="16 April 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title">Wrote testing script for the upcoming Grand Prix</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    I basically spent the whole day working on the Weekend testing program, it contains multiple functionalities is dynamically written. And during the development I learned a lot about the social API and even wrote down and tested some specific calculations we can do with the returned data.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="19 April 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaBook />}
  >
    <h3 className="vertical-timeline-element-title">Analysing data and compacting it into text.</h3>
    <h4 className="vertical-timeline-element-subtitle">Searching online and writing down a summary.</h4>
    <p>
    In the morning we discussed our test results and I worked on writing down a small report about the results of the testing done during the weekend. <br />
    After seeing the test data I came up with another idea for the product, It could be more interactive / responsive if you could fill in subjects and the Wünderwolk connects you with other people with the same subjects.  <br />
    The Wünderwolk will then listen in on the mood in the room and collect and process that to visualize to all others. <br />
    <br />    
      In the afternoon I worked on looking into what makes people feel connected and wrote this down in a document. <br />
    </p>
    <img src={maxwin} height={250}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="20 April 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title">Internship interview</h3>
    <h4 className="vertical-timeline-element-subtitle">testing, testing and testing 1 more time.</h4>
    <p>
    Internship interview with Philips. Was a good and pleasant conversation about myself, the project and the Internship period.<br />
    Fingers crossed and let’s wait.<br />
    <br />
    I helped Bart and Jarno with looking for internships and we did an end-to-end test together.<br />
    <br />
    In the afternoon followed a workshop about testing part 3 from Ronald.<br />
    After this quick workshop we got an assignment to make a testplan and more specifically an acceptation test plan.
    </p>
    <img src={accepttest} height={250}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="21 April 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaBook />}
  >
    <h3 className="vertical-timeline-element-title">Reflection on the project</h3>
    <h4 className="vertical-timeline-element-subtitle">What color values work well?</h4>
    <p>
    Yeeeey, got hired for my internship at Philips. <br />
    Feedback session with Geert Jan: we talked about our tests we did during the weekend and what the results told us.<br />
    As a group we went through the learning goals and matched our work with them.<br />
    <br />
    In the afternoon I wrote a small reflection about working this project.<br />
    <br />
    “For the past few weeks I worked on the Wünderwolk project together with Bart and Jarno.<br />
    As a group we had a clear understanding of each others skill sets and we used this to our advantage.<br />
    I think as a group we have made quite a good amount of progress in retrospect, however when we where working on it it sometimes felt like we weren’t working fast enough. <br />
    This stems from us giving each other the room to take breaks when we where out of energy. <br />
    I think giving this room benefited the projected in the end because It gives people the chance to recharge and come back with fresh energy and a drive to get it done. 
    As a group we had some discussions about what to do and how to do it, but these where very constructive and healthy.<br />
    Overall I enjoyed working with Bart and Jarno.”<br />
    <br />
    We pair programmed for the rest of the afternoon and discussed and tested colors and weather effects on the cloud.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="22 April 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaPray />}
  >
    <h3 className="vertical-timeline-element-title">Fixing some small issues.</h3>
    <h4 className="vertical-timeline-element-subtitle">Fingers crossed it still works when put in the encasing.</h4>
    <p>
    During the morning I worked on fixing the API call string encapsulation in the Python code.<br />
    <br />
    In the afternoon I worked on getting android apk and IOS code signed. So that we can use the app on the phone itself.<br />
    Then we as a group worked on the light effects and testing the MLP. Using the rain function etc.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="23 April 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaBrush />}
  >
    <h3 className="vertical-timeline-element-title">Finishing touches.</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      During the morning we prepared our demo and presentation for Monday and peer programmed and fine tuned the weather effects even more and looked into some code things that could be worked on to make the MLP the best it can be. <br />
      <br />
      In the afternoon we discussed what our future plans would be for our project. (Assignment from Eva).<br />
      And we did the final touches for the presentation.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="26 April 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaPray />}
  >
    <h3 className="vertical-timeline-element-title">BACK AT SCHOOL!!</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    First time back to school in a longtime. As a group we setup our project ready for display.<br />
    After a nice lunch provided by Judith we got provided some information about the upcoming client projects. <br />
    It was a hard choice but in the end I’m happy with the outcome. All of the projects offered something unique. <br />
    I got the project from hand picked agencies that revolves around Recreating a person voice and how to use this.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="28 April 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaWpexplorer />}
  >
    <h3 className="vertical-timeline-element-title">Starting up the client project</h3>
    <h4 className="vertical-timeline-element-subtitle">Playing around with Voice AI to get to know it in a fun way.</h4>
    <p>
      First time meeting with the group for the client project, I think we have a fun group of 4 dutch guys. <br />
      The project we are going to work on is based around Tacotron a text to speech architecture concept. <br />
      We have setup a trello, created a product ideas file and started researching into the possibilities. <br />
      For now that’s just messing around with the different ai voice generators and thinking of use cases.<br />
      During the afternoon we each went our separate ways for the research.<br />
      I decided to generate my own voice on a online platform and installed a highly regarded Voice cloning tool on my laptop to try and recreate Olav Mol the famed dutch F1 commentator.<br />
    </p>
    <img src={voiceAIprogram} height={250}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="29 April 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaWpexplorer />}
  >
    <h3 className="vertical-timeline-element-title">Workshop brainstorming.</h3>
    <h4 className="vertical-timeline-element-subtitle">Writing down fun and cool ideas and doing a bit of research into the possibilities and technologies.</h4>
    <p>
    Workshop creative deep diving from Judith. <br />
    We wrote down our visions of the project individually and then went into a seperate call to brainstorm possible ideas with our client project. <br />
    <br />
      As a group we continued the brainstorm in the afternoon and did some research into Voice AI, Text to Speech and how the human voice works.<br />
    </p>
    <img src={brainstorm} height={250}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="30 April 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaClipboard />}
  >
    <h3 className="vertical-timeline-element-title">Working out ideas and defining them more.</h3>
    <h4 className="vertical-timeline-element-subtitle">First meeting with client and asking him our questions we prepared.</h4>
    <p>
      As a group today we started to think of a lot of ideas and possibilities with the Tacotron technology. <br />
      We spoke with Mijke about our ideas and how we could refine them or think of even more crazy ideas to come to great innovative ideas. <br />
      She advised us to make a Miro board and we started working on that.<br /> 
      We also updated our trello board.<br />
      During the afternoon we had a meeting with the client, he told us to link our great ideas to companies they have collaborated with in the past. <br />
      Or just link or ideas in general to businesses.<br />
       He also answered our questions. Does tacotron need to be used? No, but the concept of tacotron is using Voice AI in a creative and fresh way.
    </p>
    <img src={tacotronideas} height={250}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="10 May 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaLightbulb />}
  >
    <h3 className="vertical-timeline-element-title">Updating each other and getting feedback.</h3>
    <h4 className="vertical-timeline-element-subtitle">Thinking about impact and value of our top ideas.</h4>
    <p>
    During the morning we discussed our progress and what should be done today, we decided to choose our top 3 ideas and work them out a bit more.<br />
    We also had feedback from Mijke who told us we where ahead of the curve but shouldn’t stop thinking of new ideas. And that we should work out the impact of our ideas.<br />
    <br />
    So In the afternoon we thought of some more ideas and then went on to work out the impact and business value for our 3 ideas we picked.<br />
    We think we did a good job on it and hope to learn some useful stuff during the workshop tomorrow that we have at school. <br />
    Been al long time we had one of those.<br />
    </p>
    <img src={ourselection} height={250}></img>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="11 May 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">Day @ School</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      In the morning we had a workshop and we evaluated our top 3 ideas with hypothesis, storyboards and a value proposition.<br />
      <br />
      We continued working on this in the afternoon.<br />
      We then had a pretty lengthy and interactive feedback session with Judith and Ronald about our top 3 ideas. <br />
      They gave us valuable feedback and told us to talk to experts / people that could make use of our ideas or that could give us valuable insight in how the idea could add / create value.<br />
      After we finished our work as a group I did somethings to get my internship rounded off.<br />
      My project proposal wasn’t correctly worded and needed some tweaking for it to be accepted.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="12 May 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaMicrophone />}
  >
    <h3 className="vertical-timeline-element-title">Working out our concept.</h3>
    <h4 className="vertical-timeline-element-subtitle">preparing our interview</h4>
    <p>
    Today we talked over what should be done for our project. <br />
    We wrote down questions for our interview with Evert, and questions for our meeting with Samet (Handpicked agencies). <br />
    After that we started working on our concept for our most liked idea Audio Film.<br />
    During the afternoon we continued working on the concept, we designed a few wireframes for the website that we will potentially build if this project get’s approved.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="17 May 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title">Updating our portfolio's</h3>
    <h4 className="vertical-timeline-element-subtitle">and talking through our project</h4>
    <p>
      In the morning we updated our storyboards and talked our idea through as a group. <br />
      For the afternoon we have decided to have a meeting with Geert Jan and work each on our portfolio’s. <br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="18 May 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaEnvelope />}
  >
    <h3 className="vertical-timeline-element-title">Our idea got killed :(</h3>
    <h4 className="vertical-timeline-element-subtitle">Meeting with Evert.</h4>
    <p>
    Excited for the meeting with Evert, hope he can give us some valuable insight into movie and audio.<br />
    We had a meeting with handpicked agencies at 10:00 they steered us in a completely different direction meaning we have to go back to the drawing board. <br />
    We are all a bit bitter at the moment. And went each for a walk / extended break.<br />
    <br />
    In the afternoon we started thinking about concepts but we didn’t really make a lot of progress, we where stuck in the same headspace.<br />
    I also had my feedback for my duo / trio project portfolio.<br /> 
    It was a positive feedback session, they told me that my technical aspects where fine and that for this last project I should try and focus on the vision and impact of a product more and also describe this thoroughly in my documentation.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="19 May 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaDraftingCompass />}
  >
    <h3 className="vertical-timeline-element-title">Day @ School.</h3>
    <h4 className="vertical-timeline-element-subtitle">working out new concepts.</h4>
    <p>
      School day, we had a very nice in person lecture / presentation by Huub.<br />
      He presented us concepts and thoughts about ethics in technology. <br />
      He recommended a few books. Gave us different visions of ethics and technology and gave us an assignment to think about a smart toilet and the ethics that could get involved with that.<br />
      <br />
      After lunch we thought about all thinks we could make for racingnews365. <br />
      Started by checking out multiple other sports news sites and see what they have compared to racing news. <br />
      We also wrote down all words that come to mind with Formula 1 since this is racings point focus. We spitballed our Ideas and we wrote them down on a whiteboard. <br />
      We came up with 2 main concepts to Wizard of Oz. We are going to make a concept where the site has a voice over guidance. <br />
      A concept where there is an interactive chat bot with voice with a driver. <br />
      And one completely different concept where a google home reads the news from the site using the driver voice if the driver is involved in the interview.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="20 May 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaEnvelope />}
  >
    <h3 className="vertical-timeline-element-title">Empathising as a developer.</h3>
    <h4 className="vertical-timeline-element-subtitle">Making a wizard of oz concept example.</h4>
    <p>
      To start the morning we had a workshop from Judith about empathising. <br />
      We also had an assignment for this workshop. But I couldn’t complete it since I had a semester coach meeting during the explanation of it.<br />
      <br />
      In the afternoon me and Daan worked on making a small Wizard of Oz video for the google home news reader. <br />
      To read out the news a voice model would be used. Instead of audio fragments from actual interviews. 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="21 May 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaBed />}
  >
    <h3 className="vertical-timeline-element-title">Oh no I woke up late.</h3>
    <h4 className="vertical-timeline-element-subtitle">create chatbot example in html.</h4>
    <p>
        I slept in so I missed the morning. :O<br />
        In the afternoon we worked on another wizard of Oz for the chatbot. We downloaded the site and added our chatbot as we envision it.<br />
    </p>
    <img src={chatbot} height={250}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="25 May 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaMarker />}
  >
    <h3 className="vertical-timeline-element-title">Generating Voice Models.</h3>
    <h4 className="vertical-timeline-element-subtitle">cutting together audio for a dataset.</h4>
    <p>
        For today we decided to start diving a bit in the technical. <br />
        We are basically waiting for confirmation / approval so we are gonna work on some generic technical challenges so we can instantly get started once we get approval.<br />
        <br />
        Me and Daan started training a voice model for Olav Mol with the Real Time Voice cloning project.<br />
        <br />
        After properly installing the tools needed in the morning with Daan and finding out who to use as a practice model in the morning. <br />
        I continued the afternoon cutting together an audio file with audio from David Croft (Sky Sport F1 commentator) and training text with it. <br />
        The results are okay but Not marvellous. <br />
        It’s going to be a real challenge to figure out how to train a model to make it sound natural and smooth.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="26 May 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaGlasses />}
  >
    <h3 className="vertical-timeline-element-title">Workshop portfolio and continue work on voice cloning</h3>
    <h4 className="vertical-timeline-element-subtitle">Reading a very interesting paper about listening to people.</h4>
    <p>
    Workshop about the portfolio in the morning for the rest of the time until the afternoon we spend our time finding other voice cloning tools and trying to work out a way we can make a decent enough sounding voice model.<br />
    <br />
    In the afternoon we all worked on our portfolio’s and talked about the best approaches to write our work down.<br />
    I also took the time to read Eva’s Paper about listening and social media. After reading I immediately thought of ways to show active listening without immediate judgement and prevent people from using a post as a means to an end.<br />
    1. Show people that have seen / read it without judging. E.g. 420k people have read this and are still contemplating it’s meaning.<br />
    2. Another extra emoji which is automatically given when someone has read a post but doesn’t feel the need to respond. It’s an ear of sorts showing someone has listened.<br />
    3. The new social media features like twitters spaces. Where people can just talk like a podcast but people can request to speak and or can be invited to speak. Opens up more social interaction and gives people the option to just listen.<br /><br />
    I’m not saying any of these ideas is a solution or even beneficial, it’s just some of my first thoughts while reading. Overall I really liked subject and the paper and I would like to read more about it in the future if interesting material is presented.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="27 May 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaMarker />}
  >
    <h3 className="vertical-timeline-element-title">Meeting with handpicked agencies.</h3>
    <h4 className="vertical-timeline-element-subtitle">Workshop critical thinking</h4>
    <p>
      Preparing our presentation and trying to make a few more models. And looking into how to train the models properly.<br/>
      <br/>
      Meeting with Handpicked agencies in the afternoon. <br/>
      Eva joined us in the meeting to support us and help us process the given feedback. <br/>
      It was very helpful and we also got given a clear concept to work out. <br/>
      We are going to look into reading news snippets in different ways and how sharing the news could be made interesting. <br/>
      For example a WhatsApp message with some voice ai generated msg. <br/>
      <br/>
      After the meeting we had a workshop from Eva about Critical Thinking with the main subject being her paper about listening on social media.<br/>
      She asked us Philosophical questions about Listening and critical thinking. She also explained us ways to help us to critical think.<br/>
      <br/>
      To finish the afternoon we had a very broad and extensive brainstorm session guided by Eva we thought of some really cool fresh ideas that are still linked to racingnews365.<br/>
      Eva also gave us suggestions to test our concepts and how to validate with our target audience.<br/>
       We should also look into what the future can bring for this subject.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="28 May 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaGlasses />}
  >
    <h3 className="vertical-timeline-element-title">Creating audio files for concepts</h3>
    <h4 className="vertical-timeline-element-subtitle">Creating a telegram bot</h4>
    <p>
      Worked on audio files and tested different types of messages to make the news messages more interesting. <br />
      Our first good result was a message with f1 radio notification sound, f1 engine sound in background and AI Vettel congratulating Max Verstappen on the Monaco win.<br/>
      <br />
      In the afternoon I worked out a concept for a telegram morning briefing. Using a mp3 file and sending this in a telegram notification channel only. People can join <br />this and get push notifications when a new news message is available. <br />
      Me and Glenn continued until 16:00 to work out this prototype we already have a first working version of the bot sending voice messages in a telegram channel.<br />
    </p>
    <img src={checo} height={250}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="31 May 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title">Programming :)</h3>
    <h4 className="vertical-timeline-element-subtitle">And even more programming :)</h4>
    <p>
      In the morning I worked on programmatically editing the generated audio fragments into a board radio effect.<br />
      So that messages can sound like it’s being spoken by a driver over the radio.<br />
      <br />
      At the start of the afternoon we talked Geert Jan up to speed and continued working on our telegram-audiomessage-chat-bot<br />
      We implemented a text to speech module and improved upon our project structure and made more types of audio editing.<br />
    </p>
    <img src={telegramgit} height={250}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="1 June 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaSchool />}
  >
    <h3 className="vertical-timeline-element-title">Day @ School. As a group we discussed our progress and worked on our portfolios</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    Tried working out what we could do with our prototype and how we can shape it so that it is a cool and fun to use.
    </p>
    <img src={school} height={250}></img>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="2 June 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title">Audo distortion filter</h3>
    <h4 className="vertical-timeline-element-subtitle">Code cleanup</h4>
    <p>
    During the morning there was a workshop git for the basics which I didn’t join. <br />
    The next one about branching I am gonna join even tho I already know about branching. <br />
    I really want to check up if I do actually know everything about it and that I understand it fully.<br /> 
    I relaxed outside in a hammock and tweaked / worked on my distortion filter.<br />
    <br />
    In the afternoon we started a team’s meeting and Me and Glenn worked on cleaning up our code a little and further tweaked / connected out our prototype. <br />
    We thought of ideas on how to make it usable as a tool and how we should couple the generated voice together with the fun audio generator.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="3 June 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaFile />}
  >
    <h3 className="vertical-timeline-element-title">Front end prototype</h3>
    <h4 className="vertical-timeline-element-subtitle">POC documentation & STRP festival</h4>
    <p>
    Morning walk to the bakery and back to my girlfriends place. 
    Then I joined a call with the rest of the group to talk about our front end for our prototype. <br />
    We talked about the technical aspects of it. Then we had a feedback meeting with Judith about our project concept vision and how we can write it down. <br />
    She also told us we should document our POC findings to use in our portfolio.<br />
    <br />
    In the afternoon I started working on some documentation for our project POC’s and concept vision. <br />
    But before I started on that I briefly did a tour and joined the online STRP festival. <br />
    There where some weird things in there I couldn’t really place what it was about.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="4 June 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaFile />}
  >
    <h3 className="vertical-timeline-element-title">POC documentation</h3>
    <h4 className="vertical-timeline-element-subtitle">Visting STRP festival again and preparing presentation.</h4>
    <p>
      Working with the guys on fixing / setting up our front end link to the POC.<br />
      After that I continued work on the POC findings document.<br />
      <br />
      In the afternoon we went over our presentation for next week Monday.<br />
      I also visited the STRP festival again and gave answer to the questions Eva asked.<br />
      <br />
      Which idea/concept/expression is resonating a clear vision according to you and why? <br />
      The bar resonates a clear vision of the importance of communications and the different types one can communicate.<br />
      <br />
      Which idea/concept/expression is the most creative of all according to you and why? <br />
      Acts In Translation by Dalena Tran. It’s a really cool concept because it plays into ambience of city sound. And the intend of the artwork was pretty clear to me compared to some other art works.<br />
      <br />
      What, at STRP, gave an extra insight/input to your own learning process of this specialisation semester? <br />
      The only insight it really gave me is not to judge to early as this is something I sometimes do. Some artworks I wrote off in the beginning ended up being interesting.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="7 June 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaFile />}
  >
    <h3 className="vertical-timeline-element-title">Meeting with client</h3>
    <h4 className="vertical-timeline-element-subtitle">Rewrote POC document and made an interaction flow</h4>
    <p>
    In the morning we had a meeting with handpicked to show our progress and discuss the next steps. <br />
    The results of this meeting where useful. Samet approved of the work we done and gave us a clear to direction to continue with. <br />
    We are going to build a prototype and flesh out the interaction of both the Fan and the news editor.<br />
    <br />
    In the afternoon I rewrote our Vision and POC document in Dutch. I previously wrote a draft of it in English.<br />
    After I finished up the translation and rewriting of that document I started on the design of our final prototype and looked into the interaction flow of the news editor with our final prototype.<br />
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="8 June 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaPencilRuler />}
  >
    <h3 className="vertical-timeline-element-title">Designing the looks</h3>
    <h4 className="vertical-timeline-element-subtitle">Working on portfolio's</h4>
    <p>
    As a group we made a design for our final prototype in Adobe XD we discussed the options that are needed and how we want it to look.<br />
    <br />
    In the afternoon we decided to work on our portfolio’s and collect some samples / demo’s for potential technique’s and designs we can use for our final prototype.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="9 June 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaBrain />}
  >
    <h3 className="vertical-timeline-element-title"></h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      Didn’t do anything today.
      I woke up way too late and decided to do some work in the garden.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="10 June 2021"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaFile />}
  >
    <h3 className="vertical-timeline-element-title">Starting on the final prototype</h3>
    <h4 className="vertical-timeline-element-subtitle">rehearsel presentation</h4>
    <p>
    In the morning I joined the group call and started working on our react version of our web interface. <br />
    And explaining how it works to Glenn and Lars.<br />
    We came quite far with the steps and already connected the flow of the front end with the back-end.<br />
    <br />
    In the afternoon we had a presentation rehearsal with the whole class. <br />
    This was pretty useful to prepare for our final meeting that is coming up with Handpicked agencies.<br />
     In that meeting we are going to show our final prototype and our vision and goals behind it.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="11 June 2021"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaCode />}
  >
    <h3 className="vertical-timeline-element-title">making the design a reality</h3>
    <h4 className="vertical-timeline-element-subtitle">Showing each other our progress</h4>
    <p>
      In the morning and early afternoon I worked on making the designed pages a reality with tailwind CSS and react (nextJS). <br />
      I spent most time reading up on tailwind CSS and making the driver select area.<br />
      <br />
      At 3pm in the afternoon we had a group meeting and discussed our progress and showed each others our work.
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
      </div>
    </div>
  )
}

// rgb(220,220,220)

export default Promotion
