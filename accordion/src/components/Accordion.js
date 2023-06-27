import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          num={index}
          title={item.title}
          text={item.text}
          key={index}
        />
      ))}
    </div>
  );
}
