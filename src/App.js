// import "../src/styles/main.scss"; // works on pc
import "./styles/main.scss"; // works on mac

function App() {
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
      <Card />
      <Accordion data={faqs} />
      <AccordionItem />
    </div>
  );
}

function Card() {
  return <div className="card">faqs</div>;
}

function Accordion({ data }) {
  // const [open, setOpen] = useState(null);

  return <div></div>;
}

function AccordionItem({ data }) {}

export default App;
