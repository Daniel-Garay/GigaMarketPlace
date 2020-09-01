import React, { useCallback, useState } from 'react';
import ListPage from '../../organism/ListPage/ListPage';
import Table from '../../molecules/Tables/Table';
import { useFetchQuery } from '../../../Hooks/hookFetch';
import config from '../../../utils/config';

const Products = () => {
  const [page, setPage] = useState(1);
  const [searchBy, setSearchBy] = useState('');
  const products = useFetchQuery({ url: `${config.urlApi}/api/products/get`, page, searchBy });
  const hasData = products && products.data && products.data.length > 0;
  const { total = 0 } = hasData ? products.metadata[0] : { total: 0 };

  const handleClickPage = (page) => {
    setPage(page);
  };

  const handleSearch = useCallback((value) => {
    setSearchBy(value);
    setPage(1);
  }, []);

  const columns = [
    { columnName: 'Sku' },
    { columnName: 'Descripción' },
    { columnName: 'Precio' },
    { columnName: 'Estado', type: 'state' },
  ];

  return (
    <ListPage
      title='Productos'
      handleSearch={handleSearch}
      searchFields='Descripción, SKU'
      pathNew='/products/new'
    >
      {hasData && (
        <Table
          columns={columns}
          rows={products.data.map(({ _id, sku, description, price, ml }) => ({
            _id,
            sku,
            description: description.split('-').shift(),
            price,
            status: ml && ml.id ? 'Online' : 'Offline',
          }))}
          totalRecords={total}
          onclickPage={handleClickPage}
          routeDetail='/products'
          readPermission={true}
        />
      )}
    </ListPage>
  );
};

export default Products;
