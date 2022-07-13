import "../App.css";
import header from "../img/Frame.png"
import labeldiv from "../img/Frame2.png"
import React from "react";
import Button from "@mui/material/Button";



function Final() {


  return (
  <div className="Final">
    <header>
        <div className="Header-IMG">
          <img src={header} />
        </div>
      </header>
      <body className="Final-Body">
      <div className="App-Conteiner">
          <div className="App-Conteiner-div1">
            <div className="App-Conteiner-form">
            <img src={labeldiv} />
            </div>
          </div>
          <div className="App-Conteiner-div2">
            <div className="App-Conteiner-form2">
            <img src={labeldiv} />
            </div>
            <Button className="App-Button">
              Teste
            </Button>
          </div>
        </div>
      </body>
  </div>
  );
};

export default Final;
