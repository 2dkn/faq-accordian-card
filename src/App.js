import "../src/styles/main.scss"; // works on pc
// import "./styles/main.scss"; // works on mac
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from "./images";
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
        <img src={image1} alt="" className="bg-pattern-desktop" />
        <img src={image2} alt="" className="bg-pattern-mobile" />
        <img src={image3} alt="" className="icon" />
        <img src={image4} alt="" className="arrow-down" />
        <img src={image5} alt="" className="box" />;
        <img src={image6} alt="" className="woman" />
        <img src={image7} alt="" className="woman-mobile" />
      </div>
      <div className="accordion">
        <h1 className="title">FAQ</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-text">
            <div onClick={() => onToggle(index)} className="accordion-title">
              {faq.title}
            </div>
            {open === index && <div className="accordion-text">{faq.text}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function Accordion({ faqs, open, onToggle }) {}

export default App;
