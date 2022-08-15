import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import barchart from "./barchart.scss"

const BarComponent = (props) => {
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <rect
        x={-3}
        y={7}
        width={props.width}
        height={props.height}
        fill="rgba(0, 0, 0, .07)"
      />
      <rect width={props.width} height={props.height} fill={props.color} />
      <rect
        x={props.width - 5}
        width={5}
        height={props.height}
        fill={props.borderColor}
        fillOpacity={0.2}
      />
      <text
        x={-4}
        y={props.height / 2 - 8}
        textAnchor="end"
        dominantBaseline="central"
        fill="black"
        style={{
          fontWeight: 900,
          fontSize: 15,
        }}
      >
        {props.data.indexValue}
      </text>
      <text
        x={"88%"}
        y={props.height / 2 }
        textAnchor="end"
        dominantBaseline="central"
        style={{
          fontWeight: 400,
          fontSize: 13,
        }}
      > 
        {props.data.value}
      </text>
    </g>
  );
};

export default function BarChart(props) {

  const barData = [...props.data]; // chart data

  return (
    <>
      <div className="barchart-container">
        <h2 className="barchart-title">
          {props.title} <br />
          <span >
            {props.year}
          </span>
        </h2>
        <div  className="barchart-canvas">
          <ResponsiveBar
            layout="horizontal"
            margin={{ top: 10, right: 120, bottom: 26, left: 100 }}
            data={barData}
            indexBy="Country"
            keys={["Population"]}
            colors={{ scheme: "spectral" }}
            colorBy="indexValue"
            borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
            enableGridX={false}
            enableGridY={false}
            axisLeft={null}
            axisBottom={null}
            padding={0}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.4]] }}
            isInteractive={false}
            barComponent={BarComponent}
            motionStiffness={170}
            motionDamping={26}
          />
        </div>
      </div>
    </>
  );
};
