import React from "react";
import styled from "styled-components";
// import "./button.scss";

function button(props) {
  return (
    <div>
      <ButtonStyle>
        <button
          className="btn-class"
          onClick={() => {
            props.setSelectedTip(props.percentage / 100);
          }}
        >
          {props.percentage}%
        </button>
      </ButtonStyle>
    </div>
  );
}

export default button;

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
`;
