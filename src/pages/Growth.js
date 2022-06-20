import React from "react";
import ModalFull from "./../components/modal";
import AnimationOnScroll from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import shield from "./../images/shield.png";
import CardSection4TextRightFlip from "./../components/cardSection4TextRightFlip";
import CardSection2TextRight from "./../components/cardSection2TextRight";
import CardSection3TextRightFlip from "./../components/cardSection3TextRightFlip.js";
import Footer from "./../components/footer.js";

import skills from "./../images/skills.svg";
import leadership from "./../images/leadership.svg";
import awards from "./../images/awards.svg";
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
import fail from "./../images/failures.svg";
import courses0 from "./../images/courses0.svg";
import courses1 from "./../images/courses1.svg";
import courses2 from "./../images/courses2.svg";
import courses3 from "./../images/courses3.svg";
import courses4 from "./../images/courses4.svg";
import models from "./../images/models.jpg";
import book1 from "./../images/book1.jpg";
import book2 from "./../images/book2.jpg";
import book3 from "./../images/book3.jpg";
import book4 from "./../images/book4.jpg";
import book5 from "./../images/book5.jpg";
import book6 from "./../images/book6.jpg";
import book7 from "./../images/book7.jpg";
import book8 from "./../images/book8.jpg";
import book9 from "./../images/book9.jpg";
import book10 from "./../images/book10.jpg";
import book11 from "./../images/book11.jpg";
import book12 from "./../images/book12.jpg";

export default function Growth() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openFromParent() {
    setIsOpen(true);
  }
  function handleCloseModal(event, data) {
    // console.log(event, data);
    setIsOpen(false);
  }

  function handleAfterOpen(event, data) {}
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
          <p style={{ fontSize: "16px" }}>
            I believe change is the only constant. <br />
            <br />
            I've been upskilling myself continuously throughout my career. I
            love to learn on the job, keep up with the latest book releases and
            finish new online courses. <br />
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={leadership}>
          <p style={{ fontSize: "16px" }}>
            Managing and mentoring people has its challenges, but my team's
            final success and delivered value outshine the hard times and
            inevitable struggles.
            <br />
          </p>
        </CardSection2TextRight>

        <h1 style={{ marginTop: "100px", marginBottom: "32px" }}>
          Achievements
        </h1>
        <CardSection2TextRight imgOne={awards}>
          <p style={{ fontSize: "16px" }}>
            I believe the journey is more important than the destination, but
            I'm very proud of our team's achievements at Exordo.
            <br />
            <br />
          </p>
        </CardSection2TextRight>

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
          <p style={{ fontSize: "16px" }}>
            I'm goal and outcome-oriented. <br /> <br />I believe product teams
            can achieve the most as autonomous and empowered business units.
            <br />
            <br />
          </p>
        </CardSection3TextRightFlip>

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
          <p style={{ fontSize: "16px" }}>
            I'm relentlessly searching for better experiences and bringing them
            to our community as a Medium writer for UX Collective, the
            Prototypr, and the Bootcamp!
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
          <p style={{ fontSize: "16px" }}>
            I look for simplicity, clarity, and functional convenience when
            designing a new pattern.
            <br />
            <br />
            I've defined new practices in the design and engineering spaces.
            <br />
            <br />
          </p>
        </CardSection3TextRightFlip>

        <CardSection3TextRightFlip
          imgOne={achieve7}
          imgTwo={achieve8}
          textOne={[
            "My first mentoring gig was with Thinkful and lasted for over a year. During that time, I met many young UX and UI designers. ",
            <br />,
            <br />,
            "My main task was to individually guide them through a custom curriculum and work with them on hypothetical user problems.",
            <br />,
            <br />,
            "I'm still in touch with some of my students, even though years have passed.",
          ]}
          textTwo={[
            "Working as a mentor at Dribbble pushes me on the communication and creative levels. I used to organize brainstorming sessions at work before Dribbble. Still, the product team audience is more diverse than a group of UX and UI professionals.",
            <br />,
            <br />,
            "It's incredibly inspiring to see people improve. I've become a better designer since I started mentoring other designers.",
          ]}
        >
          <p style={{ fontSize: "16px" }}>
            I seek other people's feedback and advice and offer one when asked.
            <br />
            <br />
          </p>
        </CardSection3TextRightFlip>

        <CardSection3TextRightFlip
          imgOne={achieve9}
          imgTwo={achieve10}
          textOne={[
            "When I came on board, the company struggled with value delivery. The processes were outdated, the staff wasn't collaborative, and the tech stack wasn't performant. On top of my product design role, I took on an additional responsibility to help transition to a modern stack and goal-driven mindset. ",
            <br />,
            <br />,
            "The team achieved impressive successes in the second year of the transformation.",
          ]}
          textTwo={[
            "I got in the door at the time when the founders began to recognize the value in Marty's Cagan guides to empowered product teams.",
            <br />,
            <br />,
            "During my year-long contract, I've managed to roll out the new guidelines across all product teams.",
            <br />,
            <br />,
            "The transformation wasn't complete by the time when my contract ended, but the new mindset persevered.",
          ]}
        >
          <p style={{ fontSize: "16px" }}>
            I believe everyone in an organization has the potential to innovate.
            <br />
            <br />I take active leadership roles to give product teams the
            ability to innovate.
            <br />
            <br />
          </p>
        </CardSection3TextRightFlip>

        <CardSection3TextRightFlip
          imgOne={achieve11}
          imgTwo={achieve12}
          textOne={[
            "Radical Simplicity framework is a design thinking approach that works radically different from the conventional Design Thinking process.",
            <br />,
            <br />,
            "There are no pre-defined or ordered steps. Instead, we focus on taking action. We can reduce, combine, or abstract system nodes.",
            <br />,
            <br />,
            "Main benefits: ease of unlearning, perspective shift, complexity reduction, and reimagined constraints.",
          ]}
          textTwo={[
            "Radical Insight framework helps me define what to avoid and how to align design direction with the target group I design for.",
            <br />,
            <br />,
            "I ask myself three key questions and create a list of insights for each.",
            <br />,
            <br />,
            "As a user:",
            <br />,
            "What do I know or have?",
            <br />,
            "What am I missing or don't know?",
            <br />,
            "What do I want to do and hate doing?",
          ]}
        >
          <p style={{ fontSize: "16px" }}>
            I like to make sense of the world around me. I believe efficiency in
            asking questions and looking for insights is as essential as feature
            delivery.
            <br />
            <br />
          </p>
        </CardSection3TextRightFlip>

        <h1 style={{ marginTop: "100px", marginBottom: "32px" }}>Failures</h1>
        <CardSection2TextRight imgOne={fail}>
          <p style={{ fontSize: "16px" }}>
            I've learned a lot from my past failures.
            <br />
            <br />I became a better listener. <br />I can concisely communicate
            my ideas. <br />I gather feedback before committing to a decision.
            I'm curious about other people's perspectives.
          </p>
        </CardSection2TextRight>

        <h1 style={{ marginTop: "100px", marginBottom: "32px" }}>Courses</h1>
        <CardSection2TextRight imgOne={courses0}>
          <p style={{ fontSize: "16px" }}>
            I'm a self-taught design professional. I've learned primarily on the
            job from people smarter than me, but I wrapped up a few design
            courses on the way.
            <br />
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={courses1}>
          <p style={{ fontSize: "16px" }}>
            I stay connected with my teammates and customers and keep improving
            my communication skills.
            <br />
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={courses3}>
          <p style={{ fontSize: "16px" }}>
            I started my adventure in engineering to communicate better and get
            efficiently on the same page with developers. Now, I just love to
            build things!
            <br />
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={courses2}>
          <p style={{ fontSize: "16px" }}>
            I love to tweak animations and come up with exciting interactions.
            Jumping into the code and fixing problems give me the ultimate
            control over the final user experience.
            <br />
            <br />
          </p>
        </CardSection2TextRight>
        <CardSection2TextRight imgOne={courses4}>
          <p style={{ fontSize: "16px" }}>
            The power of Machine Learning is breathtaking! I've already built
            chatbots with IBM Watson, and next, I'd like to dive deep into
            personalized experiences.
            <br />
            <br />
          </p>
        </CardSection2TextRight>

        <h1 style={{ marginTop: "100px", marginBottom: "32px" }}>
          Important Books
        </h1>
        <CardSection4TextRightFlip
          imgOne={book1}
          imgTwo={book2}
          imgThree={book3}
          textOne={"The most important things are what we don’t know."}
          textTwo={
            "Coaching and developing the people is the most important responsibility of strong product leaders."
          }
          textThree={
            "It's very difficult to have a meaningful life without meaningful work."
          }
        >
          <p style={{ fontSize: "16px" }}>
            Marty Cagan's books align well with my view on autonomy and
            empowerment of successful product teams. <br />
            <br />
            The validation framework makes a big difference from the typical
            requirements hand-off process.
          </p>
        </CardSection4TextRightFlip>
        <CardSection4TextRightFlip
          imgOne={book4}
          imgTwo={book5}
          imgThree={book6}
          textOne={[
            "I want people who are problems solvers and willing to take initiative.",
            <br />,
            "I want people working for me who act like they own the place.",
          ]}
          textTwo={
            "Believe in people more than they beilive in themselves, and push then to be more courageous."
          }
          textThree={
            "Greatness is not a function of circumstance. Greatness is largely a matter of conscious choice and discipline."
          }
        >
          <p style={{ fontSize: "16px" }}>
            The best coaching and mentoring are invisible to other people.
            Making it part of the processes and routines helps me run product
            teams effectively.
            <br />
            <br />
          </p>
        </CardSection4TextRightFlip>
        <CardSection4TextRightFlip
          imgOne={book7}
          imgTwo={book8}
          imgThree={book9}
          textOne={"All of us are smarter than any of us."}
          textTwo={"We can't always trust what we see when we look inward."}
          textThree={
            "Making the simple complicated is common place; making the complicated simple, that's creativity."
          }
        >
          <p style={{ fontSize: "16px" }}>
            The path to a great product is messy. Listening to my team, helping
            my teammates become more self-aware, and driving change with an
            iterative approach makes the journey enjoyable.
            <br />
            <br />
          </p>
        </CardSection4TextRightFlip>
        <CardSection4TextRightFlip
          imgOne={book10}
          imgTwo={book11}
          imgThree={book12}
          textOne={
            "Resilience is more important than stability. Consistence is more important than intensity."
          }
          textTwo={
            "To talk about new success we need to be ok taking new risks."
          }
          textThree={
            "To try and fail is at least to learn; to fail to try is to suffer the inestimable loss of what might have been."
          }
        >
          <p style={{ fontSize: "16px" }}>
            Since there is no innovation without change and no change without
            risk, I've spent a lot of time learning about the most optimized
            ways of taking calculated risks. Problem space research, long-term
            trends, and risk calculations became the foundation of my product
            strategy creation process.
            <br />
            <br />
          </p>
        </CardSection4TextRightFlip>

        <h1 style={{ marginTop: "100px", marginBottom: "32px" }}>
          Role Models
        </h1>
        <CardSection2TextRight imgOne={models}>
          <p style={{ fontSize: "16px" }}>
            I wish I had access to the internet when I was a teenager.
            Discovering the works of great designers and thinkers changed my
            approach to everything I do and believe.
            <br />
            <br />
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
