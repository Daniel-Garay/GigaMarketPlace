import React, { memo, useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { noob } from '../../../utils/utils';
import { PaginationContainer, Page } from './paginationStyle';

const Pagination = ({ perPage, totalRecords, clickPaginate }) => {
  const [startRecord, setStartRecord] = useState(1);
  const [endRecord, setEndRecord] = useState(1);
  const [pageSelected, setPageSelected] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalRecords / perPage); i++) {
      pages.push(i);
    }

    setPageNumbers(pages);
    setEndRecord(totalRecords <= perPage ? totalRecords : perPage);
  }, [totalRecords]);

  const changePage = (number) => {
    const intNumber = parseInt(number, 10);
    if (intNumber === 0 || intNumber > pageNumbers.length) return;

    setPageSelected(intNumber);
    setStartRecord((intNumber - 1) * perPage + 1);
    const end = intNumber * perPage > totalRecords ? totalRecords : intNumber * perPage;
    setEndRecord(end);
    clickPaginate(number);
  };

  const filterPages = (page) => {
    if (pageSelected > 5 && pageSelected < pageNumbers.length - 5 && pageNumbers.length > 10) {
      return page >= pageSelected - 4 && page <= pageSelected + 4;
    }

    if (pageSelected >= pageNumbers.length - 5 && pageNumbers.length > 10) {
      return page >= pageNumbers.length - 8;
    }

    return page <= 9;
  };

  return (
    <PaginationContainer>
      <div className='info'>
        <p>{`Mostrando ${startRecord} a ${endRecord} de ${totalRecords} entradas`}</p>
      </div>
      <div className='pages'>
        <IoIosArrowBack onClick={() => changePage(pageSelected - 1)} />
        <ul>
          {pageNumbers
            .filter((number) => filterPages(number))
            .map((number) => (
              <Page
                key={number}
                onClick={() => changePage(number)}
                active={pageSelected === number}
              >
                {number}
              </Page>
            ))}
        </ul>
        <IoIosArrowForward onClick={() => changePage(pageSelected + 1)} />
      </div>
    </PaginationContainer>
  );
};

Pagination.defaultProps = { perPage: 0, totalRecords: 0, clickPaginate: noob };

export default memo(Pagination);
