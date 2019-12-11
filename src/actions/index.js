const booksLoaded = (newBooks) => {
 return {
   type: "FETCH_BOOKS_LOADED",
   payload: newBooks
 }
}

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUESTED'
  }
}

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested()) 
  bookstoreService.getBooks()
  .then((data) => {
    dispatch(booksLoaded(data)) 
  })
}

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADD_TO_CART',
    payload: bookId
  }
}

const bookDecreseFromCart = (bookId) => {
  return {
    type: 'BOOK_DECREASE',
    payload: bookId

  }
}

const bookDeleteFromCart = (bookId) => {
  return {
    type: 'BOOK_DELETE',
    payload: bookId
  }
}

export {
  fetchBooks,
  bookAddedToCart,
  bookDecreseFromCart,
  bookDeleteFromCart
}