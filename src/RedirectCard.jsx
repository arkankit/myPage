import { useState } from "react";

function RedirectCard({ redirectLink, cardImage }) {
  const [transitionValues, setTransitionValues] = useState({
    opacityValue: 0,
    marginValue: "50px",
  });

  function setTransitions() {
    setTransitionValues({ opacityValue: 1, marginValue: "100px" });
  }

  return (
    <a href={redirectLink} target="_blank" rel="noopener noreferrer">
      <img
        style={{
          opacity: transitionValues.opacityValue,
          marginLeft: transitionValues.marginValue,
        }}
        onLoad={setTransitions}
        src={cardImage}
        alt="resume image"
      ></img>
    </a>
  );
}

export default RedirectCard;
