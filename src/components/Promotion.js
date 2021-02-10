import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FaPaintBrush, FaMicrochip, FaGlasses, FaWpexplorer} from "react-icons/fa";
import "../styles/timeline.css";

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
</VerticalTimeline>
      </div>
    </div>
  )
}

// rgb(220,220,220)

export default Promotion
