import update_book_list from './book-list'
import update_shopping_cart from './shopping-cart'


//REDUCER
const reducer = (state , action) => {
  return {
    bookList: update_book_list(state, action),
    shoppingCart: update_shopping_cart(state, action)
  }
};

export default reducer