import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FaPaintBrush, FaMicrochip, FaGlasses, FaWpexplorer, FaBrain} from "react-icons/fa";
import "../styles/timeline.css";
import visionboard1 from  "../images/CreativeTechnologyVisionBoard.jpg"
import visionboard2 from "../images/CreativeTechGeneralVision_KevinBevers.jpg";

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
</VerticalTimeline>
      </div>
    </div>
  )
}

// rgb(220,220,220)

export default Promotion
