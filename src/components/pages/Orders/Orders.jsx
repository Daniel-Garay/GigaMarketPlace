import React, { useCallback, useState } from 'react';
import ListPage from '../../organism/ListPage/ListPage';
import Table from '../../molecules/Tables/Table';
import { useFetchQuery } from '../../../Hooks/hookFetch';
import { mongoDateToString } from '../../../utils/helpers';
import config from '../../../utils/config';

const Orders = () => {
  const [page, setPage] = useState(1);
  const [searchBy, setSearchBy] = useState('');
  const orders = useFetchQuery({ url: `${config.urlApi}/api/orders/get`, page, searchBy });
  const hasData = orders && orders.data && orders.data.length > 0;
  const { total = 0 } = hasData ? orders.metadata[0] : { total: 0 };

  const handleClickPage = (page) => {
    setPage(page);
  };

  const handleSearch = useCallback((value) => {
    setSearchBy(value);
    setPage(1);
  }, []);

  const columns = [{ columnName: 'Número' }, { columnName: 'Fecha' }];

  return (
    <ListPage title='Órdenes' handleSearch={handleSearch} searchFields='N/A' pathNew='/orders/new'>
      {hasData && (
        <Table
          columns={columns}
          rows={orders.data.map(({ number, sent }) => ({
            _id: number,
            number,
            sent: mongoDateToString(sent),
          }))}
          totalRecords={total}
          onclickPage={handleClickPage}
          routeDetail='/orders'
          readPermission={true}
        />
      )}
    </ListPage>
  );
};

export default Orders;
