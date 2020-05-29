import React, { createContext, useState} from 'react';
import { v1 as id } from 'uuid';

export const BooksContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBook] = useState([
        {title: 'Book1', author: 'Author1', id: 1},
        {title: 'Book2', author: 'Author2', id: 2},
        {title: 'Book3', author: 'Author3', id: 3}
    ]);

    const addBook = (title, author) => {
        setBook([...books, {title, author, id:id()}])
    }

    const removeBook = (id) =>{
        setBook( books.filter(book => book.id !== id));
    }
    return ( 
        <BooksContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BooksContext.Provider>

     );
}
 
export default BookContextProvider;