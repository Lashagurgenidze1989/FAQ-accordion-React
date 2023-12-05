export default function AccordionItem(props) {
  // eslint-disable-next-line react/prop-types
  const { activeAccordionNumber, handleClick, itemNumber, title, content } =
    props;
  return (
    <div className="accordionitem">
      <div className="question" onClick={() => handleClick(itemNumber)}>
        <p
          className={`${
            activeAccordionNumber === itemNumber ? "activeQuestion" : ""
          }`}
        >
          {title}
        </p>
        <svg
          className={`arrow ${
            activeAccordionNumber === itemNumber ? "rotate" : ""
          }`}
          width="10"
          height="7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 .799l4 4 4-4"
            stroke="#F47B56"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
      {activeAccordionNumber === itemNumber ? (
        <p className="answer">{content}</p>
      ) : null}
    </div>
  );
}
