import React from "react";
import ModalFull from "./../components/modal";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import clock from "./../images/clock.jpg";
import CardSection3TextRight from "./../components/cardSection3TextRight";
import CardSection2TextRight from "./../components/cardSection2TextRight";
import daily1 from "./../images/daily1-01.svg";
import daily2 from "./../images/daily2-01.svg";
import weekly from "./../images/weekly-01.svg";
import quaterly1 from "./../images/quaterly-okrs.svg";
import quaterly2 from "./../images/quaterly-thinking.svg";
import yearly from "./../images/yearly.svg";
import yearly1 from "./../images/yearly1.svg";
import yearly2 from "./../images/yearly2.svg";
import Footer from "./../components/footer.js";

export default function Routines() {
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
          backgroundColor: "#1C1E27",
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
              <p style={{ color: "#D9B531", fontWeight: "600" }}>三つ</p>
              <p
                style={{
                  color: "#D9B531",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Challenge Three
              </p>
              <h1
                style={{
                  fontSize: "90px",
                  color: "#fff",
                  marginTop: "20px",
                  marginLeft: "-5px",
                }}
              >
                Routines
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
                Well-balanced routines help me get things done every day. I use
                routines to execute long and short-term goals, stay in touch
                with my team, and keep motivation flowing.
              </p>
            </div>
            <AnimationOnScroll
              animateIn="animate__tada"
              animatePreScroll={false}
              initiallyVisible={true}
            >
              <img
                src={clock}
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
        <h1 style={{ marginBottom: "32px" }}>All Year Round Routines</h1>
        <CardSection2TextRight imgOne={yearly}>
          <p style={{ fontSize: "18px" }}>
            Strategic objectives must be tracked continuously and over time to
            properly analyze customer and market behavior within the context of
            opportunity cost and cost of inaction.
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={yearly1}>
          <p style={{ fontSize: "18px" }}>
            The reality in the tech space changes quickly. I track how the
            industry evolves and obsess over new excellent products to make sure
            my product team stays current.
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={yearly2}>
          <p style={{ fontSize: "18px" }}>
            Team celebrations build engagement and motivation. I like to
            organize online events where we share stories, play games, or hang
            out before taking time off.
          </p>
        </CardSection2TextRight>

        <h1 style={{ marginTop: "100px", marginBottom: "32px" }}>
          Quaterly Routines
        </h1>
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

        <h1 style={{ marginTop: "100px", marginBottom: "32px" }}>
          Weekly Routines
        </h1>
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

        <h1 style={{ marginTop: "100px", marginBottom: "32px" }}>
          Daily Routines
        </h1>
        <CardSection3TextRight imgOne={daily1} imgTwo={daily2}>
          <p style={{ fontSize: "18px", paddingBottom: "100px" }}>
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
      <Footer
        backgroundColor="rgb(242 236 236)"
        onClick={openFromParent}
      ></Footer>
    </div>
  );
}
