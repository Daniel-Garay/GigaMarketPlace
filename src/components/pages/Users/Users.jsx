import React, { useCallback, useState } from 'react';
import ListPage from '../../organism/ListPage/ListPage';
import Table from '../../molecules/Tables/Table';
import { useFetchQuery } from '../../../Hooks/hookFetch';
import config from '../../../utils/config';

const Users = () => {
  const [page, setPage] = useState(1);
  const [searchBy, setSearchBy] = useState('');
  const users = useFetchQuery({ url: `${config.urlApi}/api/users/get`, page, searchBy });
  const hasData = users && users.data && users.data.length > 0;
  const { total = 0 } = hasData ? users.metadata[0] : { total: 0 };

  const handleClickPage = (page) => {
    setPage(page);
  };

  const handleSearch = useCallback((value) => {
    setSearchBy(value);
    setPage(1);
  }, []);

  const columns = [{ columnName: 'Nombre' }, { columnName: 'Correo' }];

  return (
    <ListPage
      title='Usuarios'
      handleSearch={handleSearch}
      searchFields='Descripción, SKU'
      pathNew='/users/new'
    >
      {hasData && (
        <Table
          columns={columns}
          rows={users.data.map(({ _id, name, email }) => ({
            _id,
            name,
            email,
          }))}
          totalRecords={total}
          onclickPage={handleClickPage}
          routeDetail='/users'
          readPermission={true}
        />
      )}
    </ListPage>
  );
};

export default Users;
