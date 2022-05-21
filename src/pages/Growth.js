import React from "react";
import ModalFull from "./../components/modal";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import shield from "./../images/shield.jpg";
import CardSection3TextRight from "./../components/cardSection3TextRight";
import CardSection2TextRight from "./../components/cardSection2TextRight";
import daily1 from "./../images/daily1-01.svg";
import daily2 from "./../images/daily2-01.svg";
import weekly from "./../images/weekly-01.svg";
import quaterly1 from "./../images/quaterly-okrs.svg";
import quaterly2 from "./../images/quaterly-thinking.svg";

export default function Growth() {
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
                I challenge myself by stepping out of my comfort zone as often
                as possible. Continous change and growth have been the most
                vital driver of my achievements and professional transformation.
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
        <h1 style={{ color: "#1C2327" }}>All Year Round Routines</h1>
        <CardSection2TextRight imgOne={weekly}>
          <p style={{ fontSize: "18px" }}>
            Daily routines are the hardest to stick with successfully, but the
            progress starts here, every morning and every focus time. <br />
            <br />I wasn't always into finding balance through routines. <br />
            <br />
          </p>
        </CardSection2TextRight>

        <h1 style={{ marginTop: "100px" }}>Quaterly Routines</h1>
        <CardSection2TextRight imgOne={quaterly1}>
          <p style={{ fontSize: "18px" }}>
            People tell me I'm a hyper-achiever. I believe in autonomy and team
            empowerment. I find OKRs very helpful in tracking team and personal
            performance. The outcomes matter more than outputs.
            <br />
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={quaterly2}>
          <p style={{ fontSize: "18px" }}>
            The inspiration for Thinking Weeks came from Gates and Musk, who
            spend a lot of focus on learning in a solitary environment. I
            prioritize reading, one-2-one brainstorming discussions, and active
            research over regular meetings during this time.
            <br />
            <br />
          </p>
        </CardSection2TextRight>

        <h1 style={{ marginTop: "100px" }}>Weekly Routines</h1>
        <CardSection2TextRight imgOne={weekly}>
          <p style={{ fontSize: "18px" }}>
            I keep in touch with my team weekly and monthly. I tend to avoid
            recurring calls as those reduce the engagement and kill the sense of
            relationship over time. I make myself available to my team and make
            sure they know they can reach out at any time. I use asynchronous
            check-in software, like Popwork, to create a feeling of cadence and
            make sure to ask essential questions.
          </p>
        </CardSection2TextRight>

        <h1 style={{ marginTop: "100px" }}>Daily Routines</h1>
        <CardSection3TextRight imgOne={daily1} imgTwo={daily2}>
          <p style={{ fontSize: "18px", paddingBottom: "300px" }}>
            Daily routines are the hardest to stick with successfully, but the
            progress starts every morning repeatedly. <br />
            <br />I wasn't always into finding balance through routines. <br />
            <br />
            My creative and curious nature was an obstacle in the past. <br />
            <br />
            I've noticed a positive productivity change since I've developed my
            routines templates (on the left, working day; on the right, break
            day) and started applying them depending on the day.
          </p>
        </CardSection3TextRight>
      </div>
    </div>
  );
}
