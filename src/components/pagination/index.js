import React ,{useEffect}from "react";
import classnames from "classnames";
import "./pagination.scss";

const Pagination = (props) => {
  const {
    onPageChange,
    paginationRange,
    currentPage,
    className
  } = props;


  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange.length-1;

  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      {/* Left navigation arrow */}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 0
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber,index) => {
        // Render  Page links
        return (
          <li
            className={classnames("pagination-item", {
              selected: index === currentPage
            })}
            key={pageNumber}
            onClick={() => onPageChange(index)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
