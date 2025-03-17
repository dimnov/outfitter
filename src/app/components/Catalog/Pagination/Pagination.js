"use client";

import { useEffect } from "react";
import NextButton from "./Buttons/NextButton";
import PreviousButton from "./Buttons/PreviousButton";
import PagesList from "./PagesList/PagesList";

import styles from "./Pagination.module.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (pageNum) => {
    onPageChange(pageNum);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const disablePrev = currentPage === 1;
  const disableNext = currentPage === totalPages;

  return (
    <div className={styles.pagination}>
      <PreviousButton onClick={handlePrev} disabled={disablePrev} />
      <PagesList onClick={handlePageClick} currentPage={currentPage} pages={pages} />
      <NextButton onClick={handleNext} disabled={disableNext} />
    </div>
  );
}

export default Pagination;
