import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css';

const Pagination = ({ exercises, setCurrentItems }) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(exercises.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(exercises.length / itemsPerPage));
    window.scrollTo({ top: 1700, behavior: 'smooth' });
  }, [itemOffset, itemsPerPage, exercises]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % exercises.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};

export default Pagination;
