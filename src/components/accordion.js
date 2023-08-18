import { useState } from "react";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordian">
      {data.map((el) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        ></AccordionItem>
      ))}
    </div>
  );
}

export default function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  // function handleToggle() {
  //   onOpen(isOpen ? null : num);
  // }
}


