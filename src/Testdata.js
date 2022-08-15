import React, { useState, useEffect } from "react";
import jsonData from "./chart-data";

export default function Testdata(props) {
  let data = props.data;
  let numberOfYears = jsonData.length;
  let yearList = jsonData.map((item) => item.Year);
  let numerToDisplay = 10; //Todo

  useEffect(() => {
    console.log("noy" + numberOfYears);
    console.log("YL" + yearList);

    console.log(jsonData);  

  }, []);

  return (
    <>
      <div> data component</div>

      {jsonData.map((item) => (
        <span key={item.Countries[14].Country}>
          {item.Countries[14].Country}
        </span>
      ))}
    </>
  );
}
