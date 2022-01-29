import React from "react";
import { InputText } from "primereact/inputtext";
// import "./inputText.scss";

function inputText(props) {
  return (
    <div>
      {props.type === "bill" ? (
        <div className="">
          <p>Bill</p>
          <span className="p-input-icon-left">
            <i className="pi pi-dollar" />
            <InputText
            //   className="inputTextBox"
            //   value={this.state.value3}
            //   onChange={(e) => this.setState({ value3: e.target.value })}
            //   placeholder="Search"
            />
          </span>
        </div>
      ) : (
        <div className="">
          <p>No of people</p>
          <span className="p-input-icon-left">
            <i className="pi pi-user" />
            <InputText
            //   className="inputTextBox"
            //   value={this.state.value3}
            //   onChange={(e) => this.setState({ value3: e.target.value })}
            //   placeholder="Search"
            />
          </span>
        </div>
      )}
    </div>
  );
}

export default inputText;
