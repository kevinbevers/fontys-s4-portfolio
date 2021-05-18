import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import "react-vertical-timeline-component/style.min.css";
import {FaCode, FaCodepen, FaFile, FaFlask, FaImages, FaInfoCircle, FaProjectDiagram, FaStar, FaThumbsUp} from "react-icons/fa";
import "../styles/timeline.css";
import ReactTooltip from "react-tooltip";
// Images
import I from "../icons/icon-I.png";
import C from "../icons/icon-C.png";
import D from "../icons/icon-D.png";
import P from "../icons/icon-P.png";

const Project2 = () => {
  return (<>
    <div className="section">
      <div className="container">
        <p><b>every header is clickable for more info.</b><br /> For more info about my thoughts and work during the duo / trio project look at my <a href="/fontys-s4-portfolio/s4timeline">S4timeline</a></p>
          <div className="trigger area">
            <p className="no-margin text2"><a className="click" data-tip data-for='inspiration' data-event='click'><b><FaStar color="white"/> Inspiration</b>(Wanting to make something that would make use of a mobile app)</a></p>
          </div>
          <div className="triggertoidea area">
            <img src={I} height={128} className="logoLeft"></img>
            <p className="no-margin text2"><a className="click" data-tip data-for='concept' data-event='click'><b><FaFile color="white"/> Project concept document</b></a></p>
          </div>
          <div className="idea area">
            <p className="no-margin text3"><a className="click" data-tip data-for='portfolio' data-event='click'><b><FaFile color="white"/> Portfolio goals</b></a></p>
          </div>
          <div className="ideatoconcept area">
            <img src={C} height={128} className="logoLeft"></img>
            <p className="no-margin text3"><pre className="no-margin"><a className="click" data-tip data-for='research' data-event='click'><b><FaFile color="white"/> Research document</b></a>              <a className="click" data-tip data-for='tech' data-event='click'><b><FaFile color="white"/> Technical justification document</b></a>                          <a className="click" data-tip data-for='mock' data-event='click'><b><FaImages color="white"/> Mock-up & technical design</b></a></pre></p>
          </div>
          <div className="concept area">
            <p className="no-margin text3"><a className="click" data-tip data-for='arch' data-event='click'><b><FaFile color="white"/> Architectural document</b></a></p>
          </div>
          <div className="concepttorealisation area">
            <img src={D} height={128} className="logoLeft"></img>
            <p className="no-margin text3"><pre className="no-margin"><a className="click" data-tip data-for='proto' data-event='click'><b><FaCodepen color="white"/> Prototype</b></a>                                 <a className="click" data-tip data-for='class' data-event='click'><b><FaProjectDiagram color="white"/> Class Diagram</b></a></pre></p>
          </div>
          <div className="realisation area">
            <p className="no-margin text3"><a className="click" data-tip data-for='first' data-event='click'><b><FaCode color="white"/> First version of the product</b></a></p>
          </div>
          <div className="realisationtoevaulation area">
          <img src={P} height={128} className="logoLeft"></img>
          <p className="no-margin text3"><a className="click" data-tip data-for='test' data-event='click'><b><FaFlask color="white"/> Test Plan</b></a></p>
          </div>
          <div className="evaulation area">
          <p className="no-margin text3"><a className="click" data-tip data-for='accept' data-event='click'><b><FaThumbsUp color="white"/> Acceptance Tests</b></a></p>
          </div>
        </div>
    </div>

<ReactTooltip id='inspiration' clickable={true} effect={"solid"} place={"bottom"} backgroundColor={"black"} arrowColor={"black"}>
<span>The inspiration that catalyzed this duo / trio project is a simple one, we where assigned to try work with the technnologies that intrigue us and at the same time try to create impact with the project.<br /> <br />
In our eyes the easiest way to create impact on people is to use emotions.<br />
We thought of a bunch of ideas that included Camera vision at first because all 3 of us have used it in the individual project. <br />
But after a few feedback sessions with different teachers we concluded that we should focus more on the impact of our project, but offcourse we also want to make something cool<br />
That's when we came with the idea for the Wünderwolk.<br /><br />
 All 3 of us could include our main course in the creation of the project and it had a link with emotions through the visualizing of them via weather effects.<br />
At first we didn't plan to visualize the emotions through weather but rather through color. <br /> after multiple talks with teachers and people in our enviroment we decided to use weather effects instead.<br />
These weather effects came out to be a very nice addition to the project.<br />
<br />
<b>Documents linked to this:</b>
<ul>
  <li><a className="docLink" href="https://teams.microsoft.com/l/file/A825B318-7465-47A9-A353-921ED43EE1C6?tenantId=c66b6765-b794-4a2b-84ed-845b341c086a&fileType=docx&objectUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno%2FGedeelde%20documenten%2FDuo%20Kevin%20-%20Jarno%2Fold%2Fideeen.docx&baseUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno&serviceName=teams&threadId=19:9554e7a1180e4883b3457eee819ecdd1@thread.tacv2&groupId=0ad488e1-2226-4088-920e-12214225b809" target="_blank">Document filled with our ideas</a></li>
</ul>
</span>
</ReactTooltip>
<ReactTooltip id='concept' clickable={true} effect={"solid"} place={"bottom"} backgroundColor={"black"} arrowColor={"black"}>
<span>
  To explain our idea to other people and get it more clear for ourselves as a group we described our concept in detail in our research document.<br />
  Why is it in the research document and not in a seperate document? Ask Bart. <br />
  The text we wrote down for it describes our vision of the concept and the possible impact the concept could have as well a little story of how we think the product would play out.<br />
<br />
<b>Documents linked to this:</b>
<ul>
  <li><a className="docLink" href="https://teams.microsoft.com/l/file/09A66572-7724-48DC-82EA-95DA13603BB5?tenantId=c66b6765-b794-4a2b-84ed-845b341c086a&fileType=docx&objectUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno%2FGedeelde%20documenten%2FDuo%20Kevin%20-%20Jarno%2Fw%C3%BCnderwolk%2Fresearch.docx&baseUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno&serviceName=teams&threadId=19:9554e7a1180e4883b3457eee819ecdd1@thread.tacv2&groupId=0ad488e1-2226-4088-920e-12214225b809" target="_blank">Project concept described in our research document</a></li>
</ul>
</span>
</ReactTooltip>
<ReactTooltip id='portfolio' clickable={true} effect={"solid"} place={"bottom"} backgroundColor={"black"} arrowColor={"black"}>
<span>
  To confirm we have everything to proof our learning goals we made a document that links each learning goal to a deliverable.<br />
<br />
<b>Documents linked to this:</b>
<ul>
  <li><a className="docLink" href="https://teams.microsoft.com/l/file/CD9BBC63-B739-4952-973D-35E6FC569777?tenantId=c66b6765-b794-4a2b-84ed-845b341c086a&fileType=xlsx&objectUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno%2FGedeelde%20documenten%2FDuo%20Kevin%20-%20Jarno%2Fold%2Fportfolio%20leeswijzer.xlsx&baseUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno&serviceName=teams&threadId=19:9554e7a1180e4883b3457eee819ecdd1@thread.tacv2&groupId=0ad488e1-2226-4088-920e-12214225b809" target="_blank">Excel document linking portfolio goals to deliverables.</a></li>
</ul>
</span>
</ReactTooltip>
<ReactTooltip id='research' clickable={true} effect={"solid"} place={"bottom"} backgroundColor={"black"} arrowColor={"black"}>
<span>
  We did a lot of research to find out how we could realize our concept in the best way possible. <br />
  We looked into different options for communication between the app that controls the Wünderwolk.<br />
  We looked into colors and how they reflect emotion.<br />
  We looked into different types of micro controllers and summed up their positives and negatives. <br />
  We basically researched all important topics of our concept before working the concept out.<br />
<br />
<b>Documents linked to this:</b>
<ul>
  <li><a className="docLink" href="https://teams.microsoft.com/l/file/09A66572-7724-48DC-82EA-95DA13603BB5?tenantId=c66b6765-b794-4a2b-84ed-845b341c086a&fileType=docx&objectUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno%2FGedeelde%20documenten%2FDuo%20Kevin%20-%20Jarno%2Fw%C3%BCnderwolk%2Fresearch.docx&baseUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno&serviceName=teams&threadId=19:9554e7a1180e4883b3457eee819ecdd1@thread.tacv2&groupId=0ad488e1-2226-4088-920e-12214225b809" target="_blank">Research document.</a></li>
</ul>
</span>
</ReactTooltip>
<ReactTooltip id='tech' clickable={true} effect={"solid"} place={"bottom"} backgroundColor={"black"} arrowColor={"black"}>
<span>
Our technical justification document explains our choices.<br />
And makes it so we can justify our choice to each other and our product owner.<br />
<br />
<b>Documents linked to this:</b>
<ul>
  <li><a className="docLink" href="https://teams.microsoft.com/l/file/4498E9C9-0580-4810-AB5E-9CB9F823A591?tenantId=c66b6765-b794-4a2b-84ed-845b341c086a&fileType=docx&objectUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno%2FGedeelde%20documenten%2FDuo%20Kevin%20-%20Jarno%2Fw%C3%BCnderwolk%2FTechnical%20justification%20document.docx&baseUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno&serviceName=teams&threadId=19:9554e7a1180e4883b3457eee819ecdd1@thread.tacv2&groupId=0ad488e1-2226-4088-920e-12214225b809" target="_blank">Technical justification document.</a></li>
</ul>
</span>
</ReactTooltip>
<ReactTooltip id='mock' clickable={true} effect={"solid"} place={"bottom"} backgroundColor={"black"} arrowColor={"black"}>
<span>
  To make concepts more clear a mock-up is always helpful that is why we decided to make multiple mock ups that visualizes our concept.<br />
  We also worked out technical difficulties before hand by describing their inner workings in our design document. <br />
  All of this helps us sketch a clear picture of the concept so we can more easily develop it.<br />
<br />
<b>Documents linked to this:</b>
<ul>
  <li><a className="docLink" href="https://teams.microsoft.com/l/file/09A66572-7724-48DC-82EA-95DA13603BB5?tenantId=c66b6765-b794-4a2b-84ed-845b341c086a&fileType=docx&objectUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno%2FGedeelde%20documenten%2FDuo%20Kevin%20-%20Jarno%2Fw%C3%BCnderwolk%2Fresearch.docx&baseUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno&serviceName=teams&threadId=19:9554e7a1180e4883b3457eee819ecdd1@thread.tacv2&groupId=0ad488e1-2226-4088-920e-12214225b809" target="_blank">Mock-ups in research document.</a></li>
  <li><a className="docLink" href="https://teams.microsoft.com/l/file/CE4479E9-F452-4A49-9955-1767562F2717?tenantId=c66b6765-b794-4a2b-84ed-845b341c086a&fileType=docx&objectUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno%2FGedeelde%20documenten%2FDuo%20Kevin%20-%20Jarno%2Fw%C3%BCnderwolk%2Fdesign.docx&baseUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno&serviceName=teams&threadId=19:9554e7a1180e4883b3457eee819ecdd1@thread.tacv2&groupId=0ad488e1-2226-4088-920e-12214225b809" target="_blank">Technical design in our design document</a></li>
</ul>
</span>
</ReactTooltip>
<ReactTooltip id='arch' clickable={true} effect={"solid"} place={"bottom"} backgroundColor={"black"} arrowColor={"black"}>
<span>
To make sure our technical choices will work and prevent confusion within the team during development we made a few diagrams that define our system architecture.<br />
We made these based on the C4 models a well known standard within software development.<br/>
<br />
<b>Documents linked to this:</b>
<ul>
  <li><a className="docLink" href="https://teams.microsoft.com/l/file/CE4479E9-F452-4A49-9955-1767562F2717?tenantId=c66b6765-b794-4a2b-84ed-845b341c086a&fileType=docx&objectUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno%2FGedeelde%20documenten%2FDuo%20Kevin%20-%20Jarno%2Fw%C3%BCnderwolk%2Fdesign.docx&baseUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno&serviceName=teams&threadId=19:9554e7a1180e4883b3457eee819ecdd1@thread.tacv2&groupId=0ad488e1-2226-4088-920e-12214225b809" target="_blank">Design document contains different images of our architecture.</a></li>
  <li><a className="docLink" href="https://stichtingfontys.sharepoint.com/sites/S4CreativeTechnologySpring21-DuoKevin-Jarno/Gedeelde%20documenten/Duo%20Kevin%20-%20Jarno/Component_Diagram.png" >Component diagram</a></li>
  <li><a className="docLink" href="https://stichtingfontys.sharepoint.com/sites/S4CreativeTechnologySpring21-DuoKevin-Jarno/Gedeelde%20documenten/Duo%20Kevin%20-%20Jarno/SysDiagram.png" >System diagram</a></li>
</ul>
</span>
</ReactTooltip>
<ReactTooltip id='proto' clickable={true} effect={"solid"} place={"bottom"} backgroundColor={"black"} arrowColor={"black"}>
<span>
To validate our technical ideas we made proof of concepts for each part of the project. <br />
These can be found in our github repo.<br />
<br />
<b>Documents linked to this:</b>
<ul>
  <li><a className="docLink" href="https://github.com/jarno1227/WunderWolk" target="_blank">Our github repo that contains our proof of concepts and our Prototype.</a></li>
  <li><a className="docLink" href="https://stichtingfontys.sharepoint.com/sites/S4CreativeTechnologySpring21-DuoKevin-Jarno/Gedeelde%20documenten/Duo%20Kevin%20-%20Jarno/IMG_20210413_125923.jpg" target="_blank">Prototype of our physical cloud displaying colors</a></li>
</ul>
</span>
</ReactTooltip>
<ReactTooltip id='class' clickable={true} effect={"solid"} place={"bottom"} backgroundColor={"black"} arrowColor={"black"}>
<span>
To support our architecture we made a class diagram to show the inner working of our program in a simple overview..<br />
This diagram shows the relation between our different classes. <br />
<br />
<b>Documents linked to this:</b>
<ul>
  <li><a className="docLink" href="https://teams.microsoft.com/l/file/CE4479E9-F452-4A49-9955-1767562F2717?tenantId=c66b6765-b794-4a2b-84ed-845b341c086a&fileType=docx&objectUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno%2FGedeelde%20documenten%2FDuo%20Kevin%20-%20Jarno%2Fw%C3%BCnderwolk%2Fdesign.docx&baseUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno&serviceName=teams&threadId=19:9554e7a1180e4883b3457eee819ecdd1@thread.tacv2&groupId=0ad488e1-2226-4088-920e-12214225b809" target="_blank">Class diagram can be found in our design document.</a></li>
</ul>
</span>
</ReactTooltip>
<ReactTooltip id='first' clickable={true} effect={"solid"} place={"bottom"} backgroundColor={"black"} arrowColor={"black"}>
<span>
    We made a first complete version of our concept and we showed this off at the demo day we had at school.<br />
    this was a complete physical cloud encased in a terrarium and the cloud could be controlled using a cross platform mobile app.<br />
    the communication between the Pi controlling the cloud and the app went via an MQTT broker.<br />
<br />
<b>Documents linked to this:</b>
<ul>
  <li><a className="docLink" href="https://github.com/jarno1227/WunderWolk" target="_blank">Our github repo that contains our code for our first version of the concept.</a></li>
  <li><a className="docLink" href="https://www.youtube.com/watch?v=_SrE1Y2ml-k" target="_blank">After movie of our school day where we showed of our first version of the product.</a></li>
</ul>
</span>
</ReactTooltip>
<ReactTooltip id='test' clickable={true} effect={"solid"} place={"bottom"} backgroundColor={"black"} arrowColor={"black"}>
<span>
To make sure our product works as expected we wrote multiple tests and described the wanted outcomes of these tests in a test plan.<br />
this test plan also describes why and how the tests should be executed. <br />
<br />
<b>Documents linked to this:</b>
<ul>
  <li><a className="docLink" href="https://teams.microsoft.com/l/file/55A405F9-768A-4B39-95C1-C2A3C82B3796?tenantId=c66b6765-b794-4a2b-84ed-845b341c086a&fileType=docx&objectUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno%2FGedeelde%20documenten%2FDuo%20Kevin%20-%20Jarno%2Fw%C3%BCnderwolk%2FTestplan%20Assignment.docx&baseUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno&serviceName=teams&threadId=19:9554e7a1180e4883b3457eee819ecdd1@thread.tacv2&groupId=0ad488e1-2226-4088-920e-12214225b809" target="_blank">test plan document.</a></li>
  <li><a className="docLink" href="https://github.com/jarno1227/WunderWolk" target="_blank">written tests, ready for automation in our github repo.</a></li>
</ul>
</span>
</ReactTooltip>
<ReactTooltip id='accept' clickable={true} effect={"solid"} place={"bottom"} backgroundColor={"black"} arrowColor={"black"}>
<span>
To verify our concept is ready for production it needs to pass a set criteria. these set criteria should be tested and are called acceptance tests.<br />
In our test plan we have described multiple criteria and how to test these criteria.<br />
<br />
<b>Documents linked to this:</b>
<ul>
  <li><a className="docLink" href="https://teams.microsoft.com/l/file/55A405F9-768A-4B39-95C1-C2A3C82B3796?tenantId=c66b6765-b794-4a2b-84ed-845b341c086a&fileType=docx&objectUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno%2FGedeelde%20documenten%2FDuo%20Kevin%20-%20Jarno%2Fw%C3%BCnderwolk%2FTestplan%20Assignment.docx&baseUrl=https%3A%2F%2Fstichtingfontys.sharepoint.com%2Fsites%2FS4CreativeTechnologySpring21-DuoKevin-Jarno&serviceName=teams&threadId=19:9554e7a1180e4883b3457eee819ecdd1@thread.tacv2&groupId=0ad488e1-2226-4088-920e-12214225b809" target="_blank">test plan document containing our acceptance tests.</a></li>
</ul>
</span>
</ReactTooltip>
  </>)
}

export default Project2
