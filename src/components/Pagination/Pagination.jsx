import { useState, useEffect } from 'react';
import { Button, Page, PagesList, PageElipsed } from './Pagination.styled';
import PropTypes from 'prop-types';

export const Pagination = ({ page, totalPages, onPageChange }) => {
  const [pageNumberLimit] = useState(6);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  //create visible images
  const visiblePages = [...Array(totalPages).keys()].slice(
    minPageNumberLimit,
    maxPageNumberLimit
  );

  const renderPageNumbers = visiblePages.map(number => {
    // this.props

    return (
      <Page
        key={number}
        id={number}
        onClick={e => {
          onPageChange(e.target.innerText);
        }}
        active={page === number + 1 ? true : false}
      >
        {number + 1}
      </Page>
    );
  });

  useEffect(() => {
    const middle = Math.ceil(pageNumberLimit / 2);
    if (page < pageNumberLimit || page - middle <= 0) {
      setMinPageNumberLimit(0);
      setMaxPageNumberLimit(pageNumberLimit);
    } else if (page + middle > totalPages) {
      setMaxPageNumberLimit(totalPages);
      setMinPageNumberLimit(totalPages - pageNumberLimit);
    } else {
      const min = page - middle;
      setMinPageNumberLimit(min);
      setMaxPageNumberLimit(min + pageNumberLimit);
    }
  }, [totalPages, pageNumberLimit, page]);

  let pageIncrementBtn = null;
  if (totalPages > maxPageNumberLimit) {
    pageIncrementBtn = <PageElipsed disabled> &hellip; </PageElipsed>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit > 1) {
    pageDecrementBtn = <PageElipsed disabled> &hellip; </PageElipsed>;
  }
  if (totalPages <= 1) return null;

  return (
    <PagesList>
      {page !== 1 && (
        <Button onClick={() => onPageChange(page - 1)}>Prev</Button>
      )}
      {pageDecrementBtn}
      {renderPageNumbers}
      {pageIncrementBtn}
      {page !== totalPages && (
        <Button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </Button>
      )}
    </PagesList>
  );
};
Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};
