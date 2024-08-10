import { useState } from "react";

const Pagination = ({ totalSize, itemPerPage, onPageClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(totalSize / itemPerPage);
  const pagesPills = Array(totalPage)
    .fill("_")
    .map((_, index) => index + 1);
  return (
    <div>
      {pagesPills.map((pageNo, index) => {
        const isFirstPage = pageNo === 1;
        const isLastPage = pageNo === totalPage;
        const isPageInRange = Math.abs(pageNo - currentPage) <= 1;
        if (isFirstPage || isLastPage || isPageInRange) {
          return (
            <button
              key={index}
              onClick={() => {
                onPageClick(pageNo);
                setCurrentPage(pageNo);
              }}
              className={pageNo === currentPage ? "active" : null}
            >
              {pageNo}
            </button>
          );
        }
        if (pageNo === 2 || pageNo + 1 === totalPage) {
          return <button key={index}>...</button>;
        }
        return null;
      })}
    </div>
  );
};
export default Pagination;
