import React, { useRef, useState } from "react";
import Modal from "react-modal";
import avatar1 from "./../images/avatar1.jpg";
import world from "./../images/world.svg";
import value from "./../images/value.svg";
import fight from "./../images/fight.svg";
import logout from "./../images/logout.svg";
import ModalCase from "./modalCase";
import SA1 from "./../images/SANew1.jpg";
import SA2 from "./../images/SANew2.jpg";
import SA3 from "./../images/SANew3.jpg";
import C1 from "./../images/Calears2.jpg";
import C2 from "./../images/Calears4.jpg";
import C3 from "./../images/Calears5.jpg";
import S1 from "./../images/SDS1.jpg";
import S2 from "./../images/SDS2.jpg";
import S3 from "./../images/SDS3.jpg";
import ButtonDownload from "./buttonDownload";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "80%",
    height: "80%",
    padding: "0px",
    display: "flex",
    flex: "1",
    // marginRight: "-50%",
    borderRadius: "20px",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 16px 32px rgba(109,23,153,0.1)",
    backgroundColor: "rgba(255,255,255,1)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  overlay: {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(109,23,153,0.4)",
    background: "rgb(142,0,212)",
    background:
      "linear-gradient(90deg, rgba(109,23,153,0.4) 0%, rgba(101,0,98,0.4) 50%, rgba(255,0,206,0.2) 100%)",
    background:
      "-webkit-linear-gradient(90deg, rgba(109,23,153,0.4) 0%, rgba(101,0,98,0.4) 50%, rgba(255,0,206,0.2) 100%)",
    zIndex: "5000",
  },
  buttonMenu: {
    cursor: "pointer",
    background: "transparent",
    color: "#0000ff",
    borderRightWidth: "3px",
    borderRightStyle: "solid",
    borderRightColor: "white",
    borderLeft: "3px solid white",
    margin: "0",
    width: "100px",
    height: "38px",
  },
  buttonMenuActive: {
    cursor: "pointer",
    background: "transparent",
    color: "#0000ff",
    borderRightWidth: "3px",
    borderRightStyle: "solid",
    borderRightColor: "#AD5AC1",
    borderLeft: "3px solid white",
    margin: "0",
    width: "100px",
    height: "38px",
  },
  caseImg: {
    marginTop: "8px",
    borderRadius: "12px",
  },
  devider: {
    width: "500px",
    height: "1px",
    backgroundColor: "#f2f2f2",
    marginTop: "64px",
    marginBottom: "56px",
    display: "flex",
    alignSelf: "center",
  },
};

function ModalFull(props) {
  function afterOpenModal(e) {
    props.onAfterOpen(e, "After Modal Opened");
  }

  function onModalClose(event) {
    let data = { name: "example", type: "closed from child" };
    props.onCloseModal(event, data);
  }

  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const [isActiveOne, setActiveOne] = useState(true);
  const [isActiveTwo, setActiveTwo] = useState(false);
  const [isActiveThree, setActiveThree] = useState(false);

  const goToOne = () => {
    setActiveOne(true);
    oneRef.current.scrollIntoView({ behavor: "smooth" });
    setActiveTwo(false);
    setActiveThree(false);
  };
  const goToTwo = () => {
    setActiveTwo(true);
    twoRef.current.scrollIntoView({ behavor: "smooth" });
    setActiveOne(false);
    setActiveThree(false);
  };

  const goToThree = () => {
    setActiveThree(true);
    threeRef.current.scrollIntoView({ behavor: "smooth" });
    setActiveOne(false);
    setActiveTwo(false);
  };

  return (
    <div>
      <Modal
        isOpen={props.IsModalOpened}
        onAfterOpen={(e) => afterOpenModal(e)}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={() => {
          onModalClose();
        }}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={200}
      >
        <div
          style={{
            display: "flex",
            flex: "1",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100px",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "32px",
              paddingBottom: "32px",
              justifyContent: "space-between",
              borderRight: "1px solid #f2f2f2",
            }}
          >
            <img
              src={avatar1}
              style={{ height: "40px", width: "40px", borderRadius: "24px" }}
              alt="avatar"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "160px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                style={
                  isActiveOne
                    ? customStyles.buttonMenuActive
                    : customStyles.buttonMenu
                }
                onClick={goToOne}
              >
                <img
                  src={world}
                  style={{ height: "38px", width: "38px" }}
                  alt="avatar"
                />
              </button>
              <button
                style={
                  isActiveTwo
                    ? customStyles.buttonMenuActive
                    : customStyles.buttonMenu
                }
                onClick={goToTwo}
              >
                <img
                  src={value}
                  style={{ height: "38px", width: "38px" }}
                  alt="avatar"
                />
              </button>
              <button
                style={
                  isActiveThree
                    ? customStyles.buttonMenuActive
                    : customStyles.buttonMenu
                }
                onClick={goToThree}
              >
                <img
                  src={fight}
                  style={{ height: "38px", width: "38px" }}
                  alt="avatar"
                />
              </button>
            </div>
            <a onClick={(e) => onModalClose(e)}>
              <img
                src={logout}
                style={{ height: "32px", width: "32px" }}
                alt="avatar"
              />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flex: "1",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "100px",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: "32px",
                paddingRight: "32px",
                borderBottom: "1px solid #f2f2f2",
              }}
            >
              <p style={{ fontSize: "18px", flex: "1" }}>
                Selected Product Design Case Studies
              </p>
              <ButtonDownload
                src="Case_Studies_2022_Tom_Parandyk.pdf"
                text="Show More Case Studies"
              />
            </div>
            <div
              style={{
                display: "flex",
                flex: "1",
                width: "100%",
                flexDirection: "column",
                // paddingTop: "32px",
                // paddingBottom: "32px",
                overflowY: "auto",
                scrollBehavior: "smooth",
              }}
            >
              <section ref={oneRef}>
                <ModalCase
                  sectionName="Smart Albums"
                  about="Pixellu delivers solutions for busy professional photographers. Smart Albums is one of their most successful tool for wedding album creation. "
                  problem="Designed in 2014, Smart Albums utilizes early Google Material guidelines. Last year I was tasked to redesign the interface, interactions layer, and user experience to modernize the solution."
                  research="We've interviewed hundreds of photographers to define the overall problem space. We found out the existing customers never mentioned outdated interface design as a burning problem. Inconsistencies between the software design and marketing campaigns were only noticeable by new customers on the branding level."
                  prototyping="We've tested several color versions, including greyscale and color icons and four shades of gray for background colors. We found benefits to reducing the number of icons/buttons using a progressive disclosure pattern. "
                  decisions={[
                    "Change from light to dark theme for better contrast and content viewing.",
                    <br />,
                    <br />,
                    "Redesign for consistent buttons style - all squares/rectangles with the same border radius, no ovals.",
                    <br />,
                    <br />,
                    "Redesign for consistent iconography - all line icons with the same colors for states, no mixed libraries.",
                    <br />,
                    <br />,
                    "Simplify the secondary navigation bar from the UX and UI perspective to declutter and make room for custom folders.",
                  ]}
                  takeaways="Keep redesigning even if a solution works well. The software can be continuously improved. Be mindful of existing patterns and behaviors adopted by the users."
                  onClick={() =>
                    window.open(
                      "https://dribbble.com/shots/18165008-SmartAlbums-Re-Design",
                      "_blank"
                    )
                  }
                >
                  <img style={customStyles.caseImg} src={SA1} />
                  <img style={customStyles.caseImg} src={SA2} />
                  <img style={customStyles.caseImg} src={SA3} />
                </ModalCase>
              </section>
              <div style={customStyles.devider}>
                <div style={{ height: "1px" }} />
              </div>
              <section ref={twoRef}>
                <ModalCase
                  sectionName="Calears Digital Wallet"
                  about="Paymeter is a fintech startup devoted to making personal finances efficient and convenient. My task was to design a new mobile app as a centerpiece of their user experience."
                  problem="The existing Paymeter app was launched years ago as a quick MVP. The design was never a focus for the team of five engineers. Almost all flows had major UX issues and did not match the modern way of managing information in the fintech space."
                  research="We've worked closely with two central financial banks primarily to define what type of features the new app should not have. We've also focused on onboarding flow since the existing one had major UX issues."
                  prototyping="We've prototyped and tested three variants of the onboarding flow. Each used a different data validation pattern and interface style. The final solution aims to reduce the number of onboarding steps while keeping the maximum data security for compliance reasons."
                  decisions={[
                    "Simplify the account creation process by keeping one input per screen in a stepper flow.",
                    <br />,
                    <br />,
                    "Highlight the more common choices in the first onboarding step to minimize the choice overload. Break the boxiness by polling the visuals outside the card boundaries.",
                    <br />,
                    <br />,
                    "Remove select your language step - use the device's default language instead.",
                    <br />,
                    <br />,
                    "Combine two steps, document type and document photo using sensible default pattern.",
                    <br />,
                    <br />,
                    "Shortened initial onboarding to get the user in the app quickly with payment setup moved to after the account setup.",
                  ]}
                  takeaways="Design and technology have to go hand in hand to create the most optimized user experience. Identity validation becomes more straightforward when the latest technology lies underneath."
                  onClick={() =>
                    window.open(
                      "https://dribbble.com/shots/18129591-FinTech-Product-Design",
                      "_blank"
                    )
                  }
                >
                  <img style={customStyles.caseImg} src={C1} />
                  <img style={customStyles.caseImg} src={C2} />
                  <img style={customStyles.caseImg} src={C3} />
                </ModalCase>
              </section>
              <div style={customStyles.devider}>
                <div style={{ height: "1px" }} />
              </div>
              <section style={{ marginBottom: "100px" }} ref={threeRef}>
                <ModalCase
                  sectionName="Security Datasheet Library"
                  about="TotalSDS provides compliance solutions to big pharma, hospitals, and health centers. The existing library of safety datasheets consists of over 100000 records. Employees use safety datasheets to learn about detergents and other chemical products to prevent misuse and accidents."
                  problem="Design over ten years ago, the legacy solution provides the necessary information but lacks modern UX patterns. My task was to improve the information architecture, user experience, and interface design."
                  research="We've divided users into two groups, internal and external. Internal users had more time for extensive interview sessions, and external users provided actual examples of real-world edge cases."
                  prototyping={[
                    "We went through four rounds of design, starting with low fidelity wireframes and finishing with high fidelity Figma prototypes. The high-fidelity prototypes included the 18 most essential use cases as a base for user testing sessions.",
                    <br />,
                    <br />,
                    "We've discovered a functional challenge in the main feature during testing. The legacy solution required users to duplicate records between their location's libraries and a master library with all datasheets. I've suggested a more intuitive pattern of assigning data sheets to locations directly inside one library. After testing, users defined the assignment pattern as more intuitive and straightforward.",
                    <br />,
                    <br />,
                    "We've used design system components created in Figma to represent the high-fidelity layouts. The final design included refactoring the design system to align it with the PrimeNG Angular components framework and enable faster front-end implementation.",
                  ]}
                  decisions={[
                    "Redesign UX and UI using the design system aligned with implemented components in the framework convenient for the engineering team.",
                    <br />,
                    <br />,
                    "Create an extendable filters menu to fit two primary personas, new and power users, and make the most of the progressive disclosure pattern.",
                    <br />,
                    <br />,
                    "Use a more intuitive pattern of assigning data sheets to locations directly inside one library rather than duplicating the records between libraries. After testing, users defined the assignment pattern as more intuitive and straightforward.",
                  ]}
                  takeaways="Information architecture provides a stable foundation for the prototyping phase where stakeholders align around validated concepts and not individual opinions. Design systems play an essential role in the delivery process, alignment, and hand-off between design and engineering teams."
                  onClick={() =>
                    window.open(
                      "https://dribbble.com/shots/18123408-Security-Documents-Management-System",
                      "_blank"
                    )
                  }
                >
                  <img style={customStyles.caseImg} src={S1} />
                  <img style={customStyles.caseImg} src={S2} />
                  <img style={customStyles.caseImg} src={S3} />
                </ModalCase>
              </section>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalFull;
