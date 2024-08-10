import { useState } from "react";
import Pagination from "./Pagination";
const ITEM_PER_PAGE = 10;
import "./pagination.css";
const PaginationHome = () => {
  const dataSource = Array(1000)
    .fill("_")
    .map((_, index) => `Data${index + 1}`);
  const [paginatedData, setPaginatedData] = useState(
    dataSource.slice(0, ITEM_PER_PAGE)
  );

  const handlePageChange = (pageNumber) => {
    setPaginatedData(
      dataSource.slice(
        (pageNumber - 1) * ITEM_PER_PAGE,
        pageNumber * ITEM_PER_PAGE
      )
    );
  };

  return (
    <div className="container">
        <h1>Pagination</h1>
      {paginatedData.map((data, index) => {
        return <p key={index}>{data}</p>;
      })}
      <Pagination
        totalSize={dataSource.length}
        itemPerPage={ITEM_PER_PAGE}
        onPageClick={handlePageChange}
      />
    </div>
  );
};

export default PaginationHome;
