import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FaPaintBrush, FaMicrochip, FaGlasses, FaWpexplorer, FaBrain, FaNewspaper, FaTools, FaSwatchbook, FaPencilRuler, FaWalking, FaFile, FaBullseye, FaLaptopCode, FaWindowRestore, FaInfo, FaSearch} from "react-icons/fa";
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
import logo from "../images/IP_Dart_Logo.png";


const Project1 = () => {
  return (
    <div className="section">
      <div className="container">
        <VerticalTimeline className="vertical-timeline-custom-line">
        <div className="promotion-container">
        <img src={logo} height={150} width={150} draggable={false}></img> 
          <Fade bottom cascade>
            <h1>S4 Individual project</h1>
          </Fade>
          <p><i><b>Automatic dart scoring system</b></i></p>
        </div>
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="Info"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaInfo />}
  >
    <h3 className="vertical-timeline-element-title">What is the S4 Individual project about?</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
        The S4 Individual project is a 3 week long project with a few set goals. <br /> 
        The goals are concepting a creative idea, making prototypes / proof of concepts and bringing these together.<br /><br />
        During the project there where a few project phases that I went through to reach my final outcome.<br />
        - Brainstorming<br />
        - Research<br />
        - Concepting<br />
        - Developing proof of concept<br />
        <br />
        I also wanted to make a full prototype, but the time constrainst and undererstimated technical challenge made it not possible to reach this outcome.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="Brainstorming"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaBrain />}
  >
    <h3 className="vertical-timeline-element-title">Project brainstorming phase</h3>
    <h4 className="vertical-timeline-element-subtitle">Eat Sleep Google Repeat</h4>
    <p>
        During the brainstorming phase I thought of multiple project ideas that I could and want to realize.<br />
        Some of these ideas where just formed by me randomly thinking of something or when doing something went "Hey this could be improved with some tech".<br />
        <br />
        I put down my brainstorm results in a document that describes what I want to make "an automatic dart scoring system",<br />
        and how I came up with it and what ideas didn't make the final cut.<br />
    </p>
    <br /><br />
    <a href="/fontys-s4-portfolio/docs/Individual project Idea S4 Kevin Bevers.pdf" target="_blank">Click to open document in a new tab</a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="Researching"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaSearch />}
  >
    <h3 className="vertical-timeline-element-title">Researching how to realize the project</h3>
    <h4 className="vertical-timeline-element-subtitle">What technology fits the project the best, how can I make a proof of concept?</h4>
    <p>
        I looked into already exisiting dart score detection systems on github and on youtube.<br />
        From these I solidified my idea and I knew it was possible to achieve the wished result with a camera detection system.<br />
        Some of the projects I looked into:<br />
        - <a href="https://github.com/hanneshoettinger/opencv-steel-darts">https://github.com/hanneshoettinger/opencv-steel-darts</a> <br />
        - <a href="https://matherm.github.io/2018/02/02/the-score-is-nine/">https://matherm.github.io/2018/02/02/the-score-is-nine/</a> <br />
        - <a href="https://github.com/YellowFive5/DartboardRecognition">https://github.com/YellowFive5/DartboardRecognition</a> <br />
        - <a href="https://github.com/nluede/cvdarts">https://github.com/nluede/cvdarts</a> <br />
        - <a href="https://github.com/vassdoki/opencv-darts">https://github.com/vassdoki/opencv-darts</a> <br /><br /> 
        From these the main take away was that all of them used openCV to recognize things with a camera. <br />
        I also realized that most of them try and pin point of the location of the dart, doing this left my with the question how would you know the score by pin pointing it. The computer doesn't know darts. <br />
        <br />
        After a small search I found this coding challenge with a lot of results of how to do it in code.<br />
        <a href="https://www.101computing.net/darts-scoring-algorithm/">https://www.101computing.net/darts-scoring-algorithm/</a>
        <br /><br /> 
        I also looked into dart scoreboards as I was interested in Also having a nice clean web based dart score visualiser. To go with the detection.
        <br />
        Most of my important research findings I have put into a small research document:
    </p>
    <br /><br />
    <a href="/fontys-s4-portfolio/docs/Creative_Technology_S4_IP_Research_KevinBevers.pdf" target="_blank">Click to open document in a new tab</a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(220,220,220)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(220,220,220)' }}
    date="Concepting"
    iconStyle={{ background: 'rgb(220,220,220)' }}
    icon={<FaPencilRuler />}
  >
    <h3 className="vertical-timeline-element-title">Concepting the project to create a clear vision, with set goals to achieve</h3>
    <h4 className="vertical-timeline-element-subtitle">What? and How?</h4>
    <p>
        After my research I formed my own idea on how to approach the challenges that are presented when trying to make a Automatic dart scoring system.<br />
        My concepts where designed to be cheap to setup and easy to maintain.<br />    
        The below image shows the setup I had in mind for the Camera's It's using 2 camera's since that's the minimal viable amount. <br />   
    </p>
    <img src={dartexample} height={400} draggable={false}></img>
    <p>
        The system I came up with during concepting is based on triangulating the dart's location using the 2 camera's.<br /> 1 of the camera's decides the x axis the other decides the y axis. <br />        <br />
        then programatically placing this grid over a dartboard with coordinates 0,0 at center bull I can calculate what the thrown score is.        <br />
        <br /><br />
        I also designed a scoreboard interface, I'm not completely satisfied with it, but it will suffice in bringing over the general idea of the project.
    </p>
    <img src={scoreboarddesign1} height={200} draggable={false}></img>
    <br /><br />
    <a href="/fontys-s4-portfolio/docs/First scoreboard design draftxd.xd" target="_blank">Click to open document in a new tab</a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: 'rgb(211,211,211)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(211,211,211)' }}
    date="Developing a proof of concept"
    iconStyle={{ background: 'rgb(211,211,211)' }}
    icon={<FaTools />}
  >
    <h3 className="vertical-timeline-element-title">Making a proof of concept</h3>
    <h4 className="vertical-timeline-element-subtitle">Can you make it? and if you can how would it work?</h4>
    <p>
        Making a proof of concept proved to be way more challenging than originally anticipated.<br />
        I'm finding real trouble in setting up the camera system. For even simple finger detection, and then trying to pin point it.<br />
        Some of this trouble can be pin pointed on some issues I had with setting up my python development environment.<br />
        I tested some stuff with the camera system to make a proof of concept, it is possible to make it however it requires a good bit of knowledge of how opencv works to built it.<br />
        One of the main take aways is that the sytem needs a way for the users to calibrate the system to their dartboard setup.<br />
        After this camera challenge appeared to not be feasible in the given time period, I moved on to a area I have more expertise in the Modular web base scoreboard<br />
        This scoreboard web app I developed works with web sockets and the idea is that It can be easily controlled using an API the scoring system can call.<br />
    </p>
    <img src={pocsetup} height={300}></img>
  </VerticalTimelineElement>

</VerticalTimeline>
      </div>
    </div>
  )
}

// rgb(220,220,220)

export default Project1
