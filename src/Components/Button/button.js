import React, { useState } from "react";
import styled from "styled-components";
// import "./button.scss";

function Button(props) {
  const [active, setActive] = useState(false);

  const toggledButtonClass = active ? "btn-class-active" : "btn-class";
  // const [buttonStates, setButtonStates] = useState({
  //   activeObject: null,
  //   objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  // });
  // const index = props.key;
  // const toggleActiveButton = (index) => {
  //   setButtonStates({
  //     ...buttonStates,
  //     activeObject: buttonStates.objects[index],
  //   });
  // };

  // const toggleActiveClass = (index) => {
  //   if (buttonStates.objects[index] === buttonStates.activeObject) {
  //     return "btn-class active";
  //   } else {
  //     return "btn-class inactive";
  //   }
  // };

  return (
    <div>
      <ButtonStyle>
        <button
          key={props.key}
          // className={props.toggleActiveClass()}
          className={toggledButtonClass}
          onClick={(prevState) => {
            props.setSelectedTip(props.percentage / 100);
            setActive((prevState) => !prevState);
            // props.toggleActiveButton();
          }}
        >
          {props.percentage}%
        </button>
      </ButtonStyle>
    </div>
  );
}

export default Button;

const ButtonStyle = styled.div`
  @import "../../sass/styles.scss";

  .btn-class {
    background-color: hsl(183, 100%, 15%);
    color: white;
    padding-inline: 1.5rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    border-radius: 0.3rem;
    border: none;
    outline: none;

    &:hover {
      background-color: hsl(172, 67%, 45%);
      color: hsl(0, 0%, 36%);
      font-weight: 700;
    }
  }

  .inactive {
    background-color: hsl(183, 100%, 15%);
    color: white;
  }

  .btn-class-active {
    background-color: hsl(172, 67%, 45%);
    color: hsl(0, 0%, 36%);
    padding-inline: 1.5rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    border-radius: 0.3rem;
    border: none;
    outline: none;
  }
`;
