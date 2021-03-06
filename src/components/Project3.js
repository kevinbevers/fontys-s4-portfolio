import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import "react-vertical-timeline-component/style.min.css";
import {FaCode, FaCodepen, FaFile, FaFlask, FaImages, FaInfoCircle, FaProjectDiagram, FaStar, FaThumbsUp} from "react-icons/fa";
import "../styles/timeline.css";
import taco1 from "../images/Taco1.png";
import taco2 from "../images/Taco2.png";
import taco3 from "../images/Taco3.png";
import taco4 from "../images/Taco4.png";
import taco5 from "../images/Taco5.png";
import taco6 from "../images/Taco6.png";

const Project3 = () => {
  return (<>
      <div className="section">
        <div className="container">
          <h1>Client project story</h1>
          {/* Intro */}
          <h2 className="storyTitle">Story intro</h2>
          <p className="story">
          Before I can take you through my journey of the Client Project, I first need to tell you how The Client Project came about, what it entails, why it was one of my choices and what I personally wanted to gain out of working on it.
          </p>
          <p className="story">
          The Client Project was planned from the start of the semester, but I never really knew what it entailed precisely. I assumed it was an assignment from a business or corporation with strict guidelines and a list of requirements and that we then needed to follow up on that and created their desired IT product for free. 
The Client Project turned out to be nothing like that, I realized this when we were introduced to the assignments we could choose. I read each description of each project assignment and it became clear every assignment was an opened ended question that needed to be answered. 
After seeing this I off course immediately became more alive. The first thing that goes through your mind; A heck yes, we can make whatever we imagine we aren’t going to build accountant application #9001.
          </p>
          <p className="story">
          The options we had all had themes that combined them, but each project was also unique. This was maybe most apparent in the 2 projects that revolved around the use of Voice AI. One of these projects was the one I ended up working on.
The project of the greenhouse company with Voice AI was revolved around creating a distinctive and pleasant voice that doesn’t exist yet. While The project of handpicked agencies revolved around Voice cloning and using a voice that already exists in an interesting way. You can see that they have touching grounds but when furthering elaborated you can clearly see 1 project is about Creating a voice and everything that goes into it while the other project is about the use of Voice AI and where and how you can purposefully apply it.
The examples given for the project about the use of Voice AI gave me more food for thought and more freedom in approach that is why I ultimate chose for this Tacotron project by handpicked agencies
You might be left wondering why Voice AI? Why not the assignment with Internet of Things? Why not the assignment for GLOW? We know you would have loved telling your dad that you are working on an assignment with and for the GLOW event. And yes, that might be true, I however had the feeling that the Voice AI assignment would give me the most challenge in development and would really push me into reading and learning about new and upcoming technologies.
The only thing left would be the IOT assignment there is one short reason I didn’t chose for this in my personal opinion there is already too much stuff with IOT going on, IOT can be fun, but the assignment was clearly directed on a social dilemma with IOT devices and I didn’t feel like solving that dilemma. It seemed like an undirected and vague assignment in which I wouldn’t be able to do what I do best and that is develop.
          </p>
          {/* Chapter 1 */}
          <h2 className="storyTitle">Chapter 1 – Introductions with the group and the project</h2>
          <p className="story">The journey of our Client Project began the 28th of April.
This was the first time we met as a group, The first thing we did was get acquainted with each other as we haven’t really spoken or seen each other during the semester. After our introduction to each other we started looking into the project assignment and spitballed our thoughts about it and explained to each other how we each interpreted the assignment.
</p>
          <p className="story">After that group session we were all roughly on the same page and ready to start working on the project. The first things we did where creating a Trello Board to keep track of our tasks and make a Miro Board to draw out our ideas and eventually refine them.</p>
          <p className="story">Over the course of the first week, we continued our thought train about Tacotron and came up with a bunch of ideas that we really liked. We had a first meeting with the client, and he told us we should try and link the ideas we came up with to companies that handpicked had worked with in the past. I think this was done to push us into a business mindset of see what is profitable first then start thinking about what is cool and what works. I don’t really like this mindset as it flushes out creativity for the sake of fast and easy profits.</p>
          <p className="story">And the start of the second week we came out of the gates swinging and got told we were ahead of the curve in the sense of idea development and the research and documentation we did in that regard. That was nice to hear and gave us a boost to further work out our ideas. The day at location we had that week we were told to make a top 2 or top 3 of ideas and work each of those ideas out further. We did this and really put in the effort for it. We wrote down business values per idea, we wrote down the value for the user per idea, we made a mindmap per idea, we researched and selected a target audience per idea, we made hypotheses for each idea and even made multiple personas per idea.</p>
          <p className="story">After some feedback on our miro board and the work we had done so far. We got told we had some good and solid ideas that had good potential, and to further explore these ideas we should ask people that are experienced in the fields that our ideas applied about their thoughts and how we could potentially improve and refine these ideas to really make a great product. </p>
          <p className="story">With all this feedback we thought we were set for a great meeting with the guys from handpicked agencies and setup the meeting with one of the experts straight after the meeting we had planned with handpicked.</p>
          <p className="story">Then during the meeting with handpicked we got pushed of our ideas into making something for 1 of their clients RacingNews365. We were lost for words when we heard this and didn’t really push back against it immediately during the meeting. With this new assignment from the handpicked guys use Voice AI for RacingNews365 and brainstorm new ideas. After this we immediately had the meeting with Evert, originally this meeting was about audio in films and the importance of narrators. It ended up being a meeting to talk about how to pick yourselves back up and go back to the drawing board. Evert gave us some valuable tips for this and brainstormed with us for some ideas.</p>
          {/* Chapter 2 */}
          <h2 className="storyTitle">Chapter 2 – Back to the drawing board</h2>
          <p className="story">After a major setback we recovered and started working on new ideas within the given restrictions. Too be honest I was really bumped out for the first week of the recovery run. We did so much ideation and work on our top 3 ideas. And them not even considering one of those ideas really left a sour taste in my mouth. </p>
          <p className="story">But nonetheless we pushed on and started working out a few of our new ideas with the Wizard of Oz method. In this method you go and create a quick prototype using mostly paper scissor tactics. Cutting together a few demo videos of how our ideas could look when built. The 4 ideas we had where all focused on RacingNews365 (one of the restrictions)</p>
          <ul className="story">
            <li><b>Idea 1:</b> was to have a personalized login with a Tacotron (Voice AI) welcome message and possible news flash personalized to the logged in user.</li>
            <li><b>Idea 2:</b>  was a commentator reading you the news once you scroll over the news.</li>
            <li><b>Idea 3:</b>  was to have a google Home or other smart home devices read out News from RacingNews365 when asked by a user. This news would be read out loud with the voice of a driver or commentator from formula 1.</li>
            <li><b>Idea 4:</b>  was to provide a way to personalize your smart home device with a voice from a formula 1 driver or commentator.</li>
          </ul>
          <p className="story">We presented all the ideas to Handpicked agencies. They chose idea 2 and told us to further develop it but don’t think to restrained on the website and start looking into ways of sharing news with Voice AI. For this meeting Eva was present to assist us since the previous meeting went a bit poorly in our opinion. Eva being there really helped us understand the message from the client and I personally think it made him a bit milder seeing a teacher was present.</p>
          <p className="story">This new assignment that we got from Handpicked during the meeting got us on track for our final idea.
We started a big brainstorm session guided by Eva; this session was started by writing down 1 concept line down. It is a How question.
The question we came up with: “How can we bring racing news to racing fans by voice in a fun way?”.
Based on this question we were all 4 assigned to write down ideas that come to mind when we read this. After we had done this, we collected the most interesting ideas. We then went on to make a word cloud around each of our keywords: “Fun”, “News”, “Voice” and wrote down what came to mind when reading those.
</p>
          <p className="story">After making the word cloud we listed the most meaningful words around each keyword and used this to support our final idea. E.g., a Voice adds emersion and conveys thought.</p>
          <p className="story">With the session being finished we had already almost figured out our final prototype. The things that stood out were: “Making a message more fun by adding a board radio effect to it.”, “Update messages”, “Expectations, recaps”. All these pointed us towards the final idea making a prototype where a news editor can create and tweak speech messages with text. These speech messages are spoken out by drivers and get shared via social media.</p>                            
          {/* Chapter 3 */}
          <h2 className="storyTitle">Chapter 3 – Bringing the concept to life</h2>
          <p className="story">After a few weeks of making prototypes, trying out techniques and working out concepts we finally arrived at the point where we were going make that 1 and final prototype that would be used for us to demonstrate our concept.</p>
          <p className="story">This final prototype was based upon a previous demo prototype that we used to showcase our idea and show off the techniques we are going to use.
But this prototype was only a back end NodeJS API we built, this API could create and server audio files that were generated with text to speech and modified with background noises. The thing that was still missing was a front-end to go with it to really showcase the user flow we had in mind. So, we decided that we would make the page designs together as a group. The media guys designed in Adobe XD and me and Glenn (tech guys) gave feedback on usability as well as some design opinions.
</p>
          <p className="story">Me and Glenn then decided to peer program our way through the project, mainly as I have had experience with the chosen software and techniques, and I would go along explaining it to him as well as continuously receiving his opinion and view on my execution. This worked well and we made fast progress with most of the front-end. After 2 days of working on the front-end we had the whole flow programmed and ready to go. The only thing that was missing was a connection with our back end. We set out to first write down what we need to send and what we want to receive from our back end before developing it into the API. Once we developed out our back-end API, we connected it with the front end using Axios calls. After this was all finished, we tested our flow and tweaked some things like being able to add a title and made some of our API calls more advanced like our final call to share was upgraded to receive the list of selected social media’s and do something with it.</p>
          <p className="story">After this version of our final prototype was done, we showcased it to multiple teachers. One of the teachers gave us a final and pretty valuable feedback point. Mijke told us that it would be cool and maybe even necessary to be able to tweak background noises. She told us we didn’t need to fully develop this and could use a wizard of Oz technique of only having it as a front-end page that doesn’t do anything. But that doesn’t cut it for me. So, I decided to fully develop the page and integrate it fully into the flow and send the settings over to the back-end to be used in the processing of the background noise This means in our final prototype you can fully tweak background settings to your liking.</p>
          <p className="story">In the end all our API calls are dynamic and easily readable / configurable. It’s securely setup with API tokens and keys stored in a .env file and it’s built using a modern JavaScript framework (React). To realize the design, I went out of my comfort zone and didn’t use Bootstrap, but I went on to use Tailwind for this project. Tailwind was one of the CSS frameworks I really wanted to give a shot and try, and this project suited it perfectly.</p>
          <div className="inline-block">
            <img src={taco1} width={250}></img>
            <img src={taco2} width={250}></img>
            <img src={taco3} width={250}></img>
            <img src={taco4} width={250}></img>
            <img src={taco5} width={250}></img>
            <img src={taco6} width={250}></img>
          </div>
          {/* Chapter 4 */}
          <h2 className="storyTitle">Chapter 4 – Reflecting on the project and myself</h2>
          <p className="story">Normally most of the reflecting I do during a project revolves around code. This time it’s going to be a little bit different.</p>
          <p className="story">I think that the project we got assigned / chosen was a very fun and challenging one, even more so than expected. Us getting a big setback in the middle was really a blow and it really sucked in the first 2 weeks after that setback. 
But looking back at it in the end we recovered rather well and that gives me a good feeling.
</p>
          <p className="story">The difficulties for this project for me where mostly issues with the useability of the technique in current software. The technique itself is graspable although some parts of it remain vague to me for example the inner working of waveglow. 
I always follow the philosophy of understanding the basics before diving into the details and I also applied that to this project. I wouldn’t say that I have dived into the deep of Voice AI. 
But this project definitely helped me understand it’s basics. And that is something I wouldn’t of looked into and learned weren’t it for this project.
</p>
          <p className="story">I also think as a group we matched rather well with each other and this project. Ee made a project that focused on formula 1 fans, and it so happens to be all 4 of us are formula 1 fans. This really gave us great help with inside and understanding of the target audience because we are the target audience.</p>
          <p className="story">As for the reflection on myself and my personal growth I don’t really know where to start.</p>
          <p className="story">I guess I will start with my goals for this semester and how I have worked towards them, I will maybe even throw an end conclusion in there.</p>
          <p className="story">The goals I had for this semester where as follows: “Get better at making ideas into concepts”, “Take a more laid-back position in the group instead of dominating the meetings”, “Pick up some general tips and tricks”</p>
          <p className="story">So the first one; “Get better at making ideas into concepts”. For this one I do really feel like I have improved at this and not only for the sole reason we have had 3 project this semester which each needed to start with ideas and be built into concepts. I do think a big part of improving at this is doing it more. But I also got a lot of tips and a few workshops into how to do this. And even tho you won’t pick up and use everything at once I do feel like I have improved at this. I have always had good ideas in my opinion but this semester I also worked out a few of them and even thought of a million new ideas.</p>
          <p className="story">For the second one; “Take a more laid-back position in the group instead of dominating the meetings”. This one is only really here because of some feedback I received last semester about my group work. The feedback I got was positively loaded but the improvement I could do was sometimes let other group members put our their opinion and not shatter that opinion or thought 5 seconds after it has been spoken out. I have a very outspoken opinion in most cases and always do my say during a meeting. Although being outspoken and doing your say is a really good thing as well as giving remarks about other ideas etc. It can sometimes negatively influence group work if the other group members feel like they can’t share their ideas anymore because they are expecting “heavy” feedback. So for this semester I do think I dialed it down a few notches and I’m not sure how I like it. On the one hand it maybe made it more pleasant for group members to share their opinions and do their work. But it left me felt unsatisfied with some parts of some projects. Because I didn’t want to bombard the other group members with an outspoken opinion about some of the work done or concepts created. Overall, this semester has given me the opportunity to try it out. And I’ll certainly be tweaking my approach to group project during the rest of my education / professional career.</p>
          <p className="story">For the third one; “Pick up some general tips and tricks”. This one isn’t really directed at anything specific. But one thing I try to do each semester is to pick up some general tips and tricks. Through any means. For example, just talking to a teacher, they usually slip in a tip or 2 in most conversations. If I would need to list a few tips and tricks I gained it would mostly be some things I picked up during workshops. The one that comes to mind writing this down is: “When working out a concept start at the basics, don’t dive into the details or technical difficulties”. This one helped me for sure in the later 2 projects of the semester as during my individual project I was stuck for a while and this was because of me wanting to delve into the technique to much. A thing I picked up and really liked was this: “Final polish is important because if a person didn’t care enough to fix those small things, why should a user respect the experience?”. This is a statement that I fully agree with and final polish is something I always try to add. I think picking up tips and tricks went quite well and I have written down a bunch in my feedback notebook and in my timeline.</p>
          <p className="story">I think I learned quite a bit this semester and I have also found a role that I fit in at least for this part of the development cycle. It is bringing the concept to life through prototypes. I felt that I had a good grip of how to bring the concept to life and me and my groups have made real good use of my technical expertise during the development of prototypes. To fit all this in to one word. I have been a Prototype creator this semester. This is not to say that I also worked out concepts and did a bunch of documentation. But the area I really felt comfortable was making prototypes.</p>
          <p className="">
            <b>All documents created during this project:</b> <a href="/fontys-s4-portfolio/docs/clientproject_kevinbevers.zip" target="_blank">click here to download zip.</a><br />
            <b>Our Miro board where we did most of our concepting and ideation:</b> <a href="https://miro.com/app/board/o9J_lGrpMrw=/">https://miro.com/app/board/o9J_lGrpMrw=/</a>
          </p>
        </div>
      </div>
  </>)
}

export default Project3
