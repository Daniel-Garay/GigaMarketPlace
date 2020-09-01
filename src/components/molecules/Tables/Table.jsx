import React, { useState, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPaperclip, FiDownload } from 'react-icons/fi';
import { FaRegTrashAlt } from 'react-icons/fa';
import Pagination from '../Pagination/Pagination';
import TableStyle from './tableStyle';
import config from '../../../utils/config';

const Table = ({ columns, rows, totalRecords, onclickPage, routeDetail, readPermission }) => {
  const history = useHistory();

  const [perPage] = useState(config.rowsPerPage);
  const refTable = useRef(null);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const handleClickRow = useCallback((event, id, status) => {
    const { nodeName } = event.target;

    if (nodeName === 'svg') return;

    if (routeDetail === '/rips/detail') {
      if (status !== 'Error') return;
    }

    if (readPermission && routeDetail) {
      history.push(`${routeDetail}/${id}`);
    } else if (!readPermission) {
      console.log('Sin permisos');
    }
  }, []);

  const getClassTitle = (item) => {
    if (!item) return '';
    if (item.toString() === 'Estado') {
      return 'txt-center';
    }
    if (item.toString() !== 'Estado') {
      return 'txt-left';
    }

    return '';
  };

  const handleClickPaginate = useCallback((numberPage) => {
    onclickPage(numberPage);
    scrollToRef(refTable);
  }, []);

  const getColumn = (position, data, cell) => {
    const column = columns[position - 1];

    if (!column) return '';

    if (column.type === 'options') {
      return (
        <div className='options'>
          {column.options.map((option) => {
            if (option.type === 'report' && data[cell]) {
              return (
                <FiPaperclip
                  className='report'
                  onClick={() => option.action(data._id, data.loadId)}
                  title={option.tooltip}
                />
              );
            }

            if (option.type === 'download') {
              return (
                <FiDownload
                  className='report'
                  onClick={() => option.action(data._id, data.loadId)}
                  title={option.tooltip}
                />
              );
            }

            if (option.type === 'delete') {
              return (
                <FaRegTrashAlt
                  className='report'
                  onClick={() => option.action(data._id, data.loadId)}
                  title={option.tooltip}
                />
              );
            }

            return '';
          })}
        </div>
      );
    }

    return data[cell];
  };

  const getRow = (data) => {
    const cells = Object.keys(data);
    const row = [];
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];

      if (cell !== '_id') {
        row.push(
          <td key={`${data[cell]}-${data._id}`} className='txt-left'>
            {getColumn(i, data, cell)}
          </td>,
        );
      }
    }

    return row;
  };

  return (
    <>
      {rows && (
        <>
          <TableStyle ref={refTable} primary={true} multipleFields={columns.length > 5}>
            <thead>
              <tr>
                {columns &&
                  columns.map(({ columnName }) => (
                    <th key={columnName} className={getClassTitle(columnName)}>
                      {columnName}
                    </th>
                  ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((data) => {
                return (
                  <tr
                    key={`row${data._id}`}
                    onClick={(event) => handleClickRow(event, data._id, data.status)}
                  >
                    {getRow(data)}
                  </tr>
                );
              })}
            </tbody>
          </TableStyle>

          <Pagination
            perPage={perPage}
            totalRecords={totalRecords}
            clickPaginate={handleClickPaginate}
          />
        </>
      )}
    </>
  );
};

export default Table;
