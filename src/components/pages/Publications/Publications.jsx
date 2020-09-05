import React, { useCallback, useState } from 'react';
import ListPage from '../../organism/ListPage/ListPage';
import Table from '../../molecules/Tables/Table';
import { useFetchQuery } from '../../../Hooks/hookFetch';
import config from '../../../utils/config';

const Publications = () => {
  const [page, setPage] = useState(1);
  const [filters] = useState({ price: { $ne: 0 } });
  const [searchBy, setSearchBy] = useState('');
  const products = useFetchQuery({
    url: `${config.urlApi}/api/products/get`,
    page,
    filters,
    searchBy,
  });
  const hasData = products && products.data && products.data.length > 0;
  const { total = 0 } = hasData ? products.metadata[0] : { total: 0 };

  const handleClickPage = (page) => {
    setPage(page);
  };

  const handleSearch = useCallback((value) => {
    setSearchBy(value);
    setPage(1);
  }, []);

  const columns = [{ columnName: 'Nombre' }, { columnName: 'Precio' }];

  return (
    <ListPage title='Publicaciones' handleSearch={handleSearch} searchFields='Nombre'>
      {hasData && (
        <Table
          columns={columns}
          rows={products.data.map(({ _id, description, price }) => ({
            _id,
            description,
            price,
          }))}
          totalRecords={total}
          onclickPage={handleClickPage}
          routeDetail='/publications'
          readPermission={true}
        />
      )}
    </ListPage>
  );
};

export default Publications;
