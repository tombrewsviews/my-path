import React from "react";
import ModalFull from "./../components/modal";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import shield from "./../images/shield.png";
import CardSection3TextRight from "./../components/cardSection3TextRight";
import CardSection2TextRight from "./../components/cardSection2TextRight";
import CardSection3TextRightFlip from "./../components/cardSection3TextRightFlip.js";
import skills from "./../images/skills.svg";
import leadership from "./../images/leadership.svg";

import awards from "./../images/awards-01.svg";
import achieve from "./../images/achieve.svg";
import achieve2 from "./../images/achieve2.svg";
import achieve3 from "./../images/achieve3.svg";
import achieve4 from "./../images/achieve4.svg";
import achieve5 from "./../images/achieve5.svg";
import achieve6 from "./../images/achieve6.svg";
import achieve7 from "./../images/achieve7.svg";
import achieve8 from "./../images/achieve8.svg";
import achieve9 from "./../images/achieve9.svg";
import achieve10 from "./../images/achieve10.svg";
import achieve11 from "./../images/achieve11.svg";
import achieve12 from "./../images/achieve12.svg";

export default function Growth() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openFromParent() {
    setIsOpen(true);
  }
  function handleCloseModal(event, data) {
    // console.log(event, data);
    setIsOpen(false);
  }

  function handleAfterOpen(event, data) {
    // console.log(event, data);
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
          backgroundColor: "#1C2327",
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
              <p style={{ color: "#D9B531", fontWeight: "600" }}>ワン</p>
              <p
                style={{
                  color: "#D9B531",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Challenge One
              </p>
              <h1
                style={{
                  fontSize: "90px",
                  color: "#fff",
                  marginTop: "20px",
                  marginLeft: "-5px",
                }}
              >
                Growth
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
                I step out of my comfort zone as often as possible. Continous
                change and growth are the most important drivers behind my
                achievements and professional transformation.
              </p>
            </div>
            <AnimationOnScroll
              animateIn="animate__heartBeat"
              animatePreScroll={false}
              initiallyVisible={true}
            >
              <img
                src={shield}
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
        <h1 style={{ color: "#1C2327", marginBottom: "32px" }}>Growth Paths</h1>
        <CardSection2TextRight imgOne={skills}>
          <p style={{ fontSize: "18px" }}>
            My <br />
            <br />
            More <br />
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={leadership}>
          <p style={{ fontSize: "18px" }}>
            My <br />
            <br />
            More
            <br />
            <br />
          </p>
        </CardSection2TextRight>

        <h1 style={{ marginTop: "100px", marginBottom: "32px" }}>
          Achievements
        </h1>
        <CardSection2TextRight imgOne={awards}>
          <p style={{ fontSize: "18px" }}>
            Awards
            <br />
            <br />
          </p>
        </CardSection2TextRight>

        <CardSection3TextRightFlip
          imgOne={achieve}
          imgTwo={achieve2}
          textOne={[
            "I've created the Horizontal and Vertical design concepts as part of my work on the Views framework and to simplify front-end engineering concepts for less-technical designers.",
            <br />,
            <br />,
            "Horizontal and Vertical abstraction of flex-grow, flex-shrink, flex-basis, and flex-direction properties was more intuitive for designers. Eventually, it made its way to design tools like Figma and Framer.",
          ]}
          textTwo={[
            "Panels UX pattern started as an experiment aimed at high feature portability between applications. Each panel contained well-defined functionality and could be ported at any stage in the flow.",
            <br />,
            <br />,
            "Microsoft and HMH featured Panels successfully in their products; Microsoft introduced it in Azure's cloud management app. HMH built an interactive library for secondary students in the US.",
          ]}
        >
          <p style={{ fontSize: "18px" }}>
            Patterns
            <br />
            <br />
          </p>
        </CardSection3TextRightFlip>

        <CardSection3TextRightFlip
          imgOne={achieve3}
          imgTwo={achieve4}
          textOne={[
            "As part of my consulting contract with BNP Paribas, I've defined a new UX pattern to help financial professionals confidently operate approval processes.",
            <br />,
            <br />,
            "The Drill-In pattern enables the preview of all affected data across the system after executing an action. After the fact, reviewing all impacted data becomes an essential step in critical accounting transactions.",
          ]}
          textTwo={[
            "I've got a unique opportunity to contribute to an open-source framework called Views to design a simplified flow management pattern. The goals were to clarify the nesting of components and enable the designers to contribute directly to code.",
            <br />,
            <br />,
            "My state machine pattern has two states called Together and Separate and allows the creation of any UX flow while keeping a straightforward structure. ",
          ]}
        >
          <p style={{ fontSize: "18px" }}>
            Patterns2
            <br />
            <br />
          </p>
        </CardSection3TextRightFlip>

        <CardSection3TextRightFlip
          imgOne={achieve5}
          imgTwo={achieve6}
          textOne={[
            "My top priority goal at SoftCo was to improve the existing Purchase-2-Pay platform and release the redesigned version as soon as possible.",
            <br />,
            <br />,
            "Together with the engineering team, we had to make the most of Vaadin's front-end framework, the primary technical constraint. ",
            <br />,
            <br />,
            "Customers loved the new version, and the company recorded 400% revenue growth the following year.",
          ]}
          textTwo={[
            "Patient self-service apps were the highest priority at Greyfinch. One of them, the Appointment Widget, allows patients to schedule dental visits without calling the office. It generated quarter-million dollars for our customers in the first three months since its launch.",
            <br />,
            <br />,
            "This widget was designed in a modular, embeddable way to enable use across websites and environments.",
          ]}
        >
          <p style={{ fontSize: "18px" }}>
            KPIs
            <br />
            <br />
          </p>
        </CardSection3TextRightFlip>

        <CardSection3TextRightFlip
          imgOne={achieve7}
          imgTwo={achieve8}
          textOne={["I've .", <br />, <br />, "Hori"]}
          textTwo={["Pan.", <br />, <br />, "Micr."]}
        >
          <p style={{ fontSize: "18px" }}>
            Mentoring
            <br />
            <br />
          </p>
        </CardSection3TextRightFlip>

        <CardSection3TextRightFlip
          imgOne={achieve9}
          imgTwo={achieve10}
          textOne={["I've .", <br />, <br />, "Hori"]}
          textTwo={["Pan.", <br />, <br />, "Micr."]}
        >
          <p style={{ fontSize: "18px" }}>
            Transformation
            <br />
            <br />
          </p>
        </CardSection3TextRightFlip>

        <CardSection3TextRightFlip
          imgOne={achieve11}
          imgTwo={achieve12}
          textOne={["I've .", <br />, <br />, "Hori"]}
          textTwo={["Pan.", <br />, <br />, "Micr."]}
        >
          <p style={{ fontSize: "18px" }}>
            Processes
            <br />
            <br />
          </p>
        </CardSection3TextRightFlip>
      </div>
    </div>
  );
}
