import React from "react";
import ModalFull from "./../components/modal";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import chess from "./../images/chess.jpg";
import CardSection3TextRight from "./../components/cardSection3TextRight";
import CardSection2TextRight from "./../components/cardSection2TextRight";
import CardSection5TextRightFlip from "./../components/cardSection5TextRightFlip.js";

import leader1 from "./../images/leader1.svg";
import leader2 from "./../images/leader2.svg";
import leader3 from "./../images/leader3.svg";

import habit1 from "./../images/habit1.svg";
import habit2 from "./../images/habit2.svg";
import habit3 from "./../images/habit3.svg";
import habit4 from "./../images/habit4.svg";
import habit5 from "./../images/habit5.svg";
import habit6 from "./../images/habit6.svg";
import habit7 from "./../images/habit7.svg";
import habit8 from "./../images/habit8.svg";
import habit9 from "./../images/habit9.svg";
import habit10 from "./../images/habit10.svg";
import habit11 from "./../images/habit11.svg";
import habit12 from "./../images/habit12.svg";

import people1 from "./../images/people1.svg";

import product1 from "./../images/product1.svg";
import product2 from "./../images/product2.jpg";
import product3 from "./../images/product3.svg";
import product4 from "./../images/product4.svg";
import product5 from "./../images/product5.svg";

import Footer from "./../components/footer.js";

export default function Processes() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openFromParent() {
    setIsOpen(true);
  }
  function handleCloseModal(event, data) {
    console.log(event, data);
    setIsOpen(false);
  }

  function handleAfterOpen(event, data) {
    console.log(event, data);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F8E088",
        position: "relative",
        zIndex: "1",
      }}
    >
      <div style={{ zIndex: "10", position: "relative" }}>
        <ModalFull
          IsModalOpened={modalIsOpen}
          onCloseModal={handleCloseModal}
          onAfterOpen={handleAfterOpen}
        />
      </div>
      <div
        style={{
          height: "100vh",
          backgroundColor: "#271C25",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimationOnScroll animateIn="fadeIn" duration={0.5}>
          <div
            style={{
              width: "1000px",
              justifyContent: "space-between",
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                zIndex: "1",
              }}
            >
              <p style={{ color: "#D9B531", fontWeight: "600" }}>二つ</p>
              <p
                style={{
                  color: "#D9B531",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Challenge Two
              </p>
              <h1
                style={{
                  fontSize: "90px",
                  color: "#fff",
                  marginTop: "20px",
                  marginLeft: "-5px",
                }}
              >
                Processes
              </h1>
              <p
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "400",
                  marginTop: "0px",
                  lineHeight: "1.7",
                }}
              >
                The creative and rebellious voice in me always wants to reinvent
                the status quo, but well-defined processes became a steady
                foundation for my team and me.
              </p>
            </div>
            <AnimationOnScroll
              animateIn="animate__swing"
              animatePreScroll={false}
              initiallyVisible={true}
            >
              <img
                src={chess}
                style={{
                  width: "550px",
                  height: "auto",
                  marginTop: "50px",
                }}
                alt="world"
              />
            </AnimationOnScroll>
          </div>
        </AnimationOnScroll>
      </div>
      <div
        style={{
          alignSelf: "center",
          width: "1000px",
          paddingTop: "100px",
          backgroundColor: "#F8E088",
        }}
      >
        <h1 style={{ color: "#1C2327", marginBottom: "32px" }}>Leadership</h1>
        <CardSection2TextRight imgOne={leader1}>
          <p style={{ fontSize: "16px" }}>
            The best athletes aren't focused on being the best but on constant
            self-improvement. When you stop stressing about the outcome and
            focus on the process, a considerable burden is lifted off your
            shoulders. Research shows that concentrating on the process is best
            for performance and motivation.
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={leader2}>
          <p style={{ fontSize: "16px" }}>
            I like this visual as much as I want to know the why behind my work.
            Purpose and impact drive my motivation towards improvement and
            delight. I believe impeccably designed software has the power to
            change people's lives.
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={leader3}>
          <p style={{ fontSize: "16px" }}>
            With the proper focus, mission, goals, and actions leading a product
            team towards success is a matter of communication.
            <br />
            <br />I tend to set ambitious goals and follow up with ambitious
            actions. The best long-term goal for a product team is to dominate,
            not compete.
          </p>
        </CardSection2TextRight>

        <h1
          style={{ color: "#1C2327", marginTop: "100px", marginBottom: "32px" }}
        >
          Coaching
        </h1>
        <CardSection5TextRightFlip
          imgOne={habit1}
          imgTwo={habit2}
          imgThree={habit3}
          textOne={"My top priority is the success of my people."}
          textTwo={"I focus on what I can control and influence."}
          textThree={
            "I define clear measures of success and a plan to achieve them."
          }
        >
          <p style={{ fontSize: "16px" }}>
            Coaching is a long-term process that requires everyone to be willing
            and open-minded. <br />
            <br />I prefer to coach rather than manage, depending on the person.
            Good connection and honest communication are paramount for coaching
            to be effective.
          </p>
        </CardSection5TextRightFlip>
        <CardSection5TextRightFlip
          imgOne={habit4}
          imgTwo={habit5}
          imgThree={habit6}
          textOne={
            "I ensure all perspectives get heard and, when necessary, break ties and make decisions."
          }
          textTwo={"I prioritize and achieve the most important goals."}
          textThree={
            "I'm good at identifying the biggest problem, bringing it to the front and center, and tackling it first."
          }
        >
          <p style={{ fontSize: "16px" }}>
            Coaching and mentoring are the most challenging elements of the
            leadership process and the most exciting at the same time.
          </p>
        </CardSection5TextRightFlip>
        <CardSection5TextRightFlip
          imgOne={habit7}
          imgTwo={habit8}
          imgThree={habit9}
          textOne={
            "I collaborate more effectively by building high-trust relationships."
          }
          textTwo={
            "When I face a problem or opportunity, my first step is to ensure the right team is in place."
          }
          textThree={
            "I don't tell people what to do. I offer stories and ask questions to guide them to the best decisions."
          }
        >
          <p style={{ fontSize: "16px" }}>
            <br />
          </p>
        </CardSection5TextRightFlip>
        <CardSection5TextRightFlip
          imgOne={habit10}
          imgTwo={habit11}
          imgThree={habit12}
          textOne={
            "I start by profoundly understanding other people's needs and perspectives."
          }
          textTwo={
            "I look for smarts and hearts: ability to learn fast, willingness to work hard, integrity, grit, empathy, and a team-first attitude."
          }
          textThree={
            "I don't tell people what to do. I offer stories and ask questions to guide them to the best decisions."
          }
        >
          <p style={{ fontSize: "16px" }}>
            <br />
          </p>
        </CardSection5TextRightFlip>

        <h1
          style={{ color: "#1C2327", marginTop: "100px", marginBottom: "32px" }}
        >
          People
        </h1>
        <CardSection2TextRight imgOne={people1}>
          <p style={{ fontSize: "16px" }}>
            I use the One Minute Manager's Game Plan in my interactions with direct reports. It's the simplest and most effective way to give feedback regardless of the results. <br /> <br />
            The trick is to give feedback as soon as possible, focus on the behavior, not on the person, and act with sincerity.
          </p>
        </CardSection2TextRight>

        <h1
          style={{ color: "#1C2327", marginTop: "100px", marginBottom: "32px" }}
        >
          Product
        </h1>
        <CardSection2TextRight imgOne={product1}>
          <p style={{ fontSize: "16px" }}>
            The Design Thinking process is at the foundation of my creative
            approach. I would call myself a full-stack designer with a strong
            inclination toward engineering. <br /> <br />
            I've done the research, ideation, prototyping, and testing in the
            past, including tracking usability metrics and KPIs with tools like
            Mixpanel and Amplitude.
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={product2}>
          <p style={{ fontSize: "16px" }}>
            I've done quantitative and qualitative research in the past. Each
            technique has its advantages, but I find interviews to work best at
            sparking the highest level of empathy with the customer. <br />{" "}
            <br />
            It's a lot of work to talk to customers consistently. The most
            efficient process I've implemented in the past is using tools like
            EnjoyHQ or DoveTail to organize and easily search through the
            research.
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={product3}>
          <p style={{ fontSize: "16px" }}>
            I get the best insights from opportunity radars, problem
            prioritization graphs, affinity maps, customer journeys, and service
            blueprints.
            <br /> <br />
            Deep problem understanding gets me closer to appreciating the world
            around me.
            <br />
            <br />I fall in love with the problem first before pondering on the
            solutions.
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={product4}>
          <p style={{ fontSize: "16px" }}>
            The objective of the discovery phase is to find new, delightful, and convenient ways to address a problem.
            <br /> <br />
            It's important to ask whether the solution is valuable, usable, feasible, commercially viable, and critical to track key metrics across design iterations.
            <br />
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={product5}>
          <p style={{ fontSize: "16px" }}>
            The most efficient way to tap into the wisdom of the product team
            and align design and engineering is through live brainstorming
            sessions.
            <br />
            <br />
            It's great to get everyone together on a call and keep asking
            questions until we get a deep collective understanding of the
            problems we are trying to solve.
          </p>
        </CardSection2TextRight>
      </div>
      <Footer
        backgroundColor="rgb(242 236 236)"
        onClick={openFromParent}
      ></Footer>
    </div>
  );
}
