// import logo from "./logo.svg";
import "./App.scss";
import InputTextDiv from "./Components/InputText/inputText";
import Button from "./Components/Button/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Amounts from "./Components/Amounts/amounts";
import CustomInputBox from "./Components/InputText/customInputBox";
import { useEffect, useState } from "react";

function App() {
  // const percents = [5, 10, 15, 25, 50];
  const [bill, setBill] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [customSelectedTip, setCustomSelectedTip] = useState(0);
  const [numberOfPerson, setNumberOfPerson] = useState(0);
  // const [tipAmount, setTipAmount] = useState(0.0);
  const [tipAmountPerson, setTipAmountPerson] = useState(0.0);
  const [tipAmountTotal, setTipAmountTotal] = useState(0.0);
  const [sumbit, setSubmit] = useState(false);
  const [reset, setReset] = useState(false);
  // console.log(bill);
  // console.log(selectedTip);
  // console.log(numberOfPerson);

  useEffect(() => {
    setTipAmountPerson(0);
    setTipAmountTotal(0);
    // setBill(0);
    // setSelectedTip(0);
    // setNumberOfPerson(0);
    setCustomSelectedTip(0);
  }, [reset]);

  const calculateTip = (prevState) => {
    if (selectedTip !== 0) {
      setTipAmountPerson(((bill * selectedTip) / numberOfPerson).toFixed(2));
      setTipAmountTotal(
        (bill / numberOfPerson + (bill * selectedTip) / numberOfPerson).toFixed(
          2
        )
      );
    } else {
      setTipAmountPerson(
        ((bill * customSelectedTip) / numberOfPerson).toFixed(2)
      );
      setTipAmountTotal(
        (
          bill / numberOfPerson +
          (bill * customSelectedTip) / numberOfPerson
        ).toFixed(2)
      );
    }
    setSubmit((prevState) => !prevState);
    if (sumbit) {
      setReset((prevState) => !prevState);
    }
    // setTimeout(() => {
    //   setReset((prevState) => !prevState);
    //   setSubmit((prevState) => !prevState);
    // }, 6000);
    // setReset((prevState) => !prevState);
  };

  return (
    <div className="App">
      <div class="container d-flex flex-column justify-content-center align-items-center gap-5 containerFlex">
        <p className="containerFlex__h3">
          SPLI<br></br>TTER
        </p>
        <div className="containerFlex__splitterDiv p-4">
          <div class="d-flex flex-column gap-4 pb-1 w-100">
            <InputTextDiv type="bill" initialBill={bill} setBill={setBill} />
            <div>
              <p>Selected tip %</p>
              <div className="d-flex flex-wrap gap-2 buttonDiv">
                {/* {percents.map((percent, index) => {
                  index = percents.indexOf("percent");
                  <Button key={index} percentage={percent} />;
                })} */}
                <Button
                  percentage={10}
                  selectedTip={selectedTip}
                  setSelectedTip={setSelectedTip}
                />
                <Button
                  percentage={15}
                  selectedTip={selectedTip}
                  setSelectedTip={setSelectedTip}
                />
                <Button
                  percentage={20}
                  selectedTip={selectedTip}
                  setSelectedTip={setSelectedTip}
                />
                <Button
                  percentage={25}
                  selectedTip={selectedTip}
                  setSelectedTip={setSelectedTip}
                />
                <Button
                  percentage={50}
                  selectedTip={selectedTip}
                  setSelectedTip={setSelectedTip}
                />
                <CustomInputBox
                  customSelectedTip={customSelectedTip}
                  setCustomSelectedTip={setCustomSelectedTip}
                />
              </div>
            </div>
            <InputTextDiv
              numberOfPerson={numberOfPerson}
              setNumberOfPerson={setNumberOfPerson}
            />
          </div>
          <div className="h-100 bg-dark-div">
            <div>
              <div className="pt-4 px-4 pb-5">
                <Amounts
                  type="tipAmount"
                  tipAmountPerson={tipAmountPerson}
                  setTipAmountPerson={setTipAmountPerson}
                />
                <Amounts
                  tipAmountTotal={tipAmountTotal}
                  setTipAmountTotal={setTipAmountTotal}
                />
              </div>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <button className="reset-button" onClick={calculateTip}>
                  {sumbit ? "RESET" : "SUBMIT"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
