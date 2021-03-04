import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FaPaintBrush, FaMicrochip, FaGlasses, FaWpexplorer, FaBrain, FaNewspaper, FaTools, FaSwatchbook, FaPencilRuler, FaWalking, FaFile, FaBullseye, FaLaptopCode} from "react-icons/fa";
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
</VerticalTimeline>
      </div>
    </div>
  )
}

// rgb(220,220,220)

export default Promotion
