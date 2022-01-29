// import logo from "./logo.svg";
import "./App.scss";
import InputTextDiv from "./Components/InputText/inputText";
import Button from "./Components/Button/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Amounts from "./Components/Amounts/amounts";
import CustomInputBox from "./Components/InputText/customInputBox";

function App() {
  const percents = [5, 10, 15, 25, 50];

  return (
    <div className="App">
      <div class="container d-flex flex-column justify-content-center align-items-center gap-5 containerFlex">
        <p className="containerFlex__h3">
          SPLI<br></br>TTER
        </p>
        <div className="containerFlex__splitterDiv p-4">
          <div class="d-flex flex-column gap-4 pb-1 w-100">
            <InputTextDiv type="bill" />
            <div>
              <p>Selected tip %</p>
              <div className="d-flex flex-wrap gap-2 buttonDiv">
                {/* {percents.map((percent, index) => {
                  index = percents.indexOf("percent");
                  <Button key={index} percentage={percent} />;
                })} */}
                <Button percentage={10} />
                <Button percentage={15} />
                <Button percentage={20} />
                <Button percentage={25} />
                <Button percentage={50} />
                <CustomInputBox />
              </div>
            </div>
            <InputTextDiv />
          </div>
          <div className="h-100 bg-dark-div">
            <div>
              <div className="pt-4 px-4 pb-5">
                <Amounts type="tipAmount" />
                <Amounts />
              </div>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <button className="reset-button">RESET</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
