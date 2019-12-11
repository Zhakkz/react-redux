const update_shopping_cart = (state, action) => {
  if (state === undefined){
     return  {
      cartItems: [],
      orderTotal: 220
    }
  }
  switch (action.type){
    case 'BOOK_ADD_TO_CART':
      return ADD_TO_CART(state,action.payload) 
    case 'BOOK_DECREASE':
      return DEC_BOOK(state,action.payload)
    case 'BOOK_DELETE':
     return DELETE_FROM_CART(state,action.payload) 
    default:
      return state.shoppingCart
  
  }
}
const ADD_TO_CART = (state, payload) => {
  const bookId = payload
  const book = state.bookList.books.find((book) => book.id === bookId)
  const bookIdx = state.shoppingCart.cartItems.findIndex(({id}) => id === bookId)
  const existBook = state.shoppingCart.cartItems[bookIdx]
  let newitem
  if (existBook) {
    newitem = {
      ...existBook,
      count: existBook.count + 1,
      total: existBook.total + book.price
    }
    return {
      ...state.shoppingCart,
      cartItems:[
        ...state.shoppingCart.cartItems.slice(0,bookIdx),
        newitem,
        ...state.shoppingCart.cartItems.slice(bookIdx + 1),
      ]
    }
  } else{
    newitem = {
      id: book.id,
      name: book.title,
      count: 1,
      total: 75
    }
    return { 
      ...state.shoppingCart,
      cartItems:[
        ...state.shoppingCart.cartItems,
        newitem,
      ]}
  }
}

const DEC_BOOK = (state, payload) => {
  const bookId = payload
  const book = state.bookList.books.find((book) => book.id === bookId)
  const bookIdx = state.shoppingCart.cartItems.findIndex(({id}) => id === bookId)
  const existBook = state.shoppingCart.cartItems[bookIdx]
  let newitem = {
      ...existBook,
      count: existBook.count - 1,
      total: existBook.total - book.price
  }
  if (existBook.count === 1) {
    return {
      ...state.shoppingCart,
      cartItems:[
        ...state.shoppingCart.cartItems.slice(0,bookIdx),
        ...state.shoppingCart.cartItems.slice(bookIdx + 1),
      ]
    }
  }
  return {
    ...state.shoppingCart,
    cartItems:[
      ...state.shoppingCart.cartItems.slice(0,bookIdx),
      newitem,
      ...state.shoppingCart.cartItems.slice(bookIdx + 1),
    ]
  }
}
const DELETE_FROM_CART = (state, payload) => {
  const bookId = payload
  const bookIdx = state.shoppingCart.cartItems.findIndex(({id}) => id === bookId)
  return {
    ...state.shoppingCart,
    cartItems:[
      ...state.shoppingCart.cartItems.slice(0,bookIdx),
      ...state.shoppingCart.cartItems.slice(bookIdx + 1),
    ]
  }
}
export default update_shopping_cart