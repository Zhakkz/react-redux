import React, { Component } from 'react';
import BookListItem from '../book-list-item'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {withBookstoreService} from '../hoc'
import { fetchBooks, bookAddedToCart } from '../../actions/index'

import './book-list.css'
import Spinner from '../spinner';

class BookListContainer extends Component {

  componentDidMount() {
   this.props.fetchBooks()
  }

  render() {
    const {books, loading, onAddedToCart} = this.props;
    if(loading) {
      return (
        <Spinner/>
      )
    }
    return (
      <BookList books={books} onAddedToCart={onAddedToCart}/>
    )
  }
}

const BookList = ({books, onAddedToCart}) => {
  return (
    <div>
      <ul>
        {
          books.map((book) => {
            return (
              <li 
                  key={ book.id }
              >
                    <BookListItem book={ book } onAddedToCart={() => onAddedToCart(book.id)}/>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

const mapStateToProps = ({bookList:{ books, loading }}) => {
  return { books, loading }
}
const mapDispatchToProps = (dispatch, { bookstoreService }) => { 
   return {
     fetchBooks: fetchBooks(dispatch,bookstoreService),
     onAddedToCart: (id) => {dispatch(bookAddedToCart(id))}
   }
 } 

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer))