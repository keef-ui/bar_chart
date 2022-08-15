import React, { useState} from "react";
import PaginNation from "./components/pagination/";
import jsonData from "./chart-data";
import BarChart from "./components/barchart/";
import layout from "./styles/layout.scss"

export default function RaceChart() {
  const [current, setCurrent] = useState(0);

  const onPageChange = (currentPage) => {
    setCurrent(currentPage);
  };

  const chartTitle = "World Population By Year";
  const yearList = jsonData.map((item) => item.Year); //Used for pagination links
  const barData = [...jsonData[current].Countries].sort(
    (a, b) => a.Population - b.Population
  );
  const currentYear = jsonData[current].Year;

  return (
    <>
      <div className='layout'>
        <BarChart
          data={barData}
          year={currentYear}
          title={chartTitle}
        />
        <PaginNation
          setCurrent={setCurrent}
          paginationRange={yearList}
          onPageChange={onPageChange}
          currentPage={current}
        />
      </div>
    </>
  );
}
