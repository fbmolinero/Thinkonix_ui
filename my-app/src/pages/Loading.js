import "../App.css";
import header from "../img/Frame.png"
import React, { useState } from "react";

function Loading() {

  const status = localStorage.getItem('status')
  const status2 = localStorage.getItem('status2')


  return (
  <div className="Loading">
    <header>
        <div className="Header-IMG">
          <img src={header} />
        </div>
      </header>
      <body className="Loading-Body">

      </body>
  </div>
  );
};

export default Loading;
