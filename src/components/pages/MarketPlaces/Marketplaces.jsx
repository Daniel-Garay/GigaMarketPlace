import React, { useCallback, useState } from 'react';
import ListPage from '../../organism/ListPage/ListPage';
import Table from '../../molecules/Tables/Table';
import { useFetchQuery } from '../../../Hooks/hookFetch';
import { getStatus } from '../../../utils/helpers';
import config from '../../../utils/config';

const MarketPlaces = () => {
  const [page, setPage] = useState(1);
  const [searchBy, setSearchBy] = useState('');
  const marketplaces = useFetchQuery({
    url: `${config.urlApi}/api/marketplaces/get`,
    page,
    searchBy,
  });
  const hasData = marketplaces && marketplaces.data && marketplaces.data.length > 0;
  const { total = 0 } = hasData ? marketplaces.metadata[0] : { total: 0 };

  const handleClickPage = (page) => {
    setPage(page);
  };

  const handleSearch = useCallback((value) => {
    setSearchBy(value);
    setPage(1);
  }, []);

  const columns = [{ columnName: 'Nombre' }, { columnName: 'Estado' }];

  return (
    <ListPage
      title='Marketplaces'
      handleSearch={handleSearch}
      searchFields='Nombre'
      pathNew='/marketplaces/new'
    >
      {hasData && (
        <Table
          columns={columns}
          rows={marketplaces.data.map(({ _id, name, status }) => ({
            _id,
            name,
            status: getStatus(status),
          }))}
          totalRecords={total}
          onclickPage={handleClickPage}
          routeDetail='/marketplaces'
          readPermission={true}
        />
      )}
    </ListPage>
  );
};

export default MarketPlaces;
