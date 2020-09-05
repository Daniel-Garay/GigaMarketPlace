import React, { useCallback, useEffect, useState, useRef } from 'react';
import ListPage from '../../organism/ListPage/ListPage';
import { fetchData } from '../../../Hooks/hookFetch';
import { mongoDateToString } from '../../../utils/helpers';
import config from '../../../utils/config';
import { LogStyle, Level } from './logStyle';

const LogList = () => {
  const perPage = 40;
  const [page, setPage] = useState(1);
  const [searchBy, setSearchBy] = useState('');
  const [logs, setLogs] = useState([]);
  const [metadata, setMetadata] = useState([]);
  const { total = 0 } = metadata.length > 0 ? metadata[0] : { total: 0 };
  const pages = Math.ceil(total / perPage);
  const lofRef = useRef(null);

  const getLogs = async () => {
    const url = `${config.urlApi}/api/log/get`;
    const body = { perPage, page, searchBy };
    const { data, metadata } = await fetchData(url, 'POST', null, body);
    setLogs([...logs, ...data]);
    setMetadata(metadata);
  };

  useEffect(() => {
    window.scrollTo(0, lofRef.current.offsetTop);
  }, []);

  useEffect(() => {
    getLogs();
  }, [page, searchBy]);

  const handleSearch = useCallback((value) => {
    setSearchBy(value);
    setPage(1);
    setLogs([]);
  }, []);

  const onScroll = () => {
    if (lofRef.current.scrollTop >= 1200 * page + 1) {
      if (page <= pages) {
        setPage(page + 1);
      }
    }
  };

  return (
    <ListPage
      title='Log del procesador'
      handleSearch={handleSearch}
      searchFields='Nível - Mensaje'
      canCreate={false}
    >
      <LogStyle ref={lofRef} onScroll={onScroll}>
        {logs.length > 0 &&
          logs.map(({ level, message, timestamp, meta }) => (
            <>
              <details>
                <summary>
                  <p className='item'>
                    <span className='date'>{mongoDateToString(timestamp)}</span>
                    <Level level={level}>{` ${level} `}</Level>
                    <span className='message'>{message}</span>
                  </p>
                </summary>
                <p className='body'>{JSON.stringify(meta, undefined, 4)}</p>
              </details>
            </>
          ))}
      </LogStyle>
    </ListPage>
  );
};

export default LogList;
