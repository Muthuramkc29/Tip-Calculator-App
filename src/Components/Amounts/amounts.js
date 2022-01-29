import React from "react";
import styled from "styled-components";

function amounts(props) {
  return (
    <div>
      {props.type === "tipAmount" ? (
        <div>
          <div className="w-100 d-flex justify-content-between align-items-center text-white mb-4">
            <div>
              <p>Tip Amount</p>
              <p>/ person</p>
            </div>
            <div>
              <AmountStyle>
                <p className="amount">$0.00</p>
              </AmountStyle>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-100 d-flex justify-content-between align-items-center text-white mb-4">
            <div>
              <p>Total</p>
              <p>/ person</p>
            </div>
            <div>
              <AmountStyle>
                <p className="amount">$0.00</p>
              </AmountStyle>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default amounts;

const AmountStyle = styled.p`
  .amount {
    font-size: 24px;
    color: hsl(172, 67%, 45%);
    font-weight: 700;
  }
`;
