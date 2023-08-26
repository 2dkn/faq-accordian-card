import "../src/styles/main.scss"; // works on pc
// import "./styles/main.scss"; // works on mac
import backgroundImage from "../src/images/bg-pattern-desktop.svg";
import MobileImage from "../src/images/bg-pattern-mobile.svg";
import iconImage from "../src/images/favicon-32x32.png";
import arrowImage from "../src/images/icon-arrow-down.svg";
import boxImage from "../src/images/illustration-box-desktop.svg";
import womanImage from "../src/images/illustration-woman-online-desktop.svg";
import womanMobileImage from "../src/images/illustration-woman-online-mobile.svg";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    if (index === open) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  const faqs = [
    {
      title: "How many team members can I invite?",
      text: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      title: "What is the maximum file upload size?",
      text: "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      title: "How do I reset my password?",
      text: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      title: "Can I cancel my subscription?",
      text: "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      title: "Do you provide additional support?",
      text: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];

  return (
    <div>
      <Card open={open} faqs={faqs} onToggle={toggleAccordion} />
      <Accordion open={open} faqs={faqs} />
    </div>
  );
}

function Card({ faqs, open, onToggle }) {
  return (
    <div className="container">
      <div className="image">
        <img
          src={
            (backgroundImage,
            MobileImage,
            iconImage,
            arrowImage,
            boxImage,
            womanImage,
            womanMobileImage)
          }
          alt=""
        />
      </div>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-text">
            <div onClick={() => onToggle(index)}>{faq.title}</div>
            {open === index && <div>{faq.text}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function Accordion({ faqs, open, toggleAccordion }) {}

export default App;
