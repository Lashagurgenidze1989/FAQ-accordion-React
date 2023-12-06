import { useState } from "react";
import "./Accordioncard.css";
import AccordionItem from "../AccordionItem";
import { DATA } from "../accordionCard/data";

export default function Accordioncard() {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);

  const handleClick = (activeNumber) => {
    if (activeAccordionNumber === activeNumber) {
      setActiveAccordionNumber(null);
    } else {
      setActiveAccordionNumber(activeNumber);
    }
  };

  return (
    <div className="accordionCard">
      <h1>FAQ</h1>
      <img
        className="illustration"
        src="/images/illustration-woman-online-mobile.svg"
        alt="ilustration"
      />
      <img id="box" src="/images/illustration-box-desktop.svg" alt="" />

      {DATA.map((item) => (
        <AccordionItem
          key={item.itemNumber}
          activeAccordionNumber={activeAccordionNumber}
          handleClick={handleClick}
          itemNumber={item.itemNumber}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}
