import React from "react";
import './Pagination.css'

const Pagination = ({currentPage, totalPages, itemsPerPage, totalItems, onPageChange, onPageSizeChange}) =>{
    const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handleFirst = () => onPageChange(1);
  const handlePrev = () => currentPage > 1 && onPageChange(currentPage - 1);
  const handleNext = () => currentPage < totalPages && onPageChange(currentPage + 1);
  const handleLast = () => onPageChange(totalPages);

  return (
    <div className="pagination-info-container">
      <select
        className="page-size-selector"
        value={itemsPerPage}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
      >
        {[10, 20, 30, 50].map(size => (
          <option key={size} value={size}>{size}</option>
        ))}
      </select>

      <span className="item-range">
        {startItem}-{endItem} of {totalItems}
      </span>

      <div className="arrow-controls">
        <button onClick={handleFirst} disabled={currentPage === 1}>{'«'}</button>
        <button onClick={handlePrev} disabled={currentPage === 1}>{'‹'}</button>
        <button onClick={handleNext} disabled={currentPage === totalPages}>{'›'}</button>
        <button onClick={handleLast} disabled={currentPage === totalPages}>{'»'}</button>
      </div>
    </div>
  );
}

export default Pagination