const update_book_list = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
    }
  }
  switch (action.type) {
    case 'FETCH_BOOKS_REQUESTED':
      return {
        ...state.bookList,
        loading: true, 
        books: []
      }
    case 'FETCH_BOOKS_LOADED':
      return {
        ...state.bookList,
        books: action.payload,
        loading: false
      }
    default:
      return {
        ...state.bookList
      }
  }
}


export default update_book_list