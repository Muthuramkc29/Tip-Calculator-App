import React from "react";
import styled from "styled-components";

function customInputBox(props) {
  return (
    <div className="d-flex align-items-center">
      <InputBox>
        <input
          type="text"
          className="inputBox"
          placeholder="Custom"
          onChange={(e) => {
            props.onClick();
            props.setCustomSelectedTip(e.target.value);
            props.setSelectedTip(0);
          }}
          // onClick={props.onClick()}
        />
      </InputBox>
      <span className="ms-1 percent">$</span>
    </div>
  );
}

export default customInputBox;

const InputBox = styled.div`
  @import "../../sass/styles.scss";

  .inputBox {
    background-color: hsl(189, 41%, 97%);
    color: hsl(183, 100%, 15%);
    font-weight: 700;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-right: 0.3rem
    border-radius: 0.3rem;
    border: hsl(172, 67%, 45%);
    outline: hsl(172, 67%, 45%);
    width: 70px;
    text-align: right;
  }

  .percent {
    color: hsl(183, 100%, 15%);
    font-weight: 700;
  }
`;
