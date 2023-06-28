import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          num={index}
          title={item.title}
          key={index}
          curOpen={curOpen}
          onCurOpen={setCurOpen}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}
