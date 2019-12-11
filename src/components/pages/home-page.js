import React, {Fragment} from 'react';
import BookListContainer from '../book-list';
import ShoppingCartTable from '../shopping-cart-table'

const HomePage = () => {
  return (
    <Fragment>
      <BookListContainer />
      <ShoppingCartTable />
    </Fragment>
  );
}

export default HomePage 