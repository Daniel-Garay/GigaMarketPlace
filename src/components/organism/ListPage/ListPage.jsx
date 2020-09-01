import React from 'react';
import ListPageFilter from './ListPageFilter';
import ListPageHeader from './ListPageHeader';
import { ListPageStyle, Content } from './listPageStyle';
import { noob } from '../../../utils/utils';

const ListPage = (props) => {
  const { title, searchFields, children, handleSearch, pathNew } = props;

  return (
    <ListPageStyle>
      <ListPageHeader title={title} pathNew={pathNew} />
      <Content>
        <ListPageFilter placeHolder={`Buscar por: ${searchFields}`} onChange={handleSearch} />
        {children || <p>No hay datos</p>}
      </Content>
    </ListPageStyle>
  );
};

ListPage.defaultProps = { title: '', searchFields: '', handleSearch: noob, pathNew: '' };

export default ListPage;
