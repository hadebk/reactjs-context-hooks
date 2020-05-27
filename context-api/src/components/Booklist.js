import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return ( 
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map(book => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
          );
        })}
      </ul>
    </div>
  );
}
 
export default BookList;


/**
 * way 1 to access context.
 * this way of invoke context, can be used with class component only
*/

/*
class BookList extends Component {
   static contextType = ThemeContext;
   state = {  }
   render() {
       const { isLightTheme, light, dark } = this.context;
       const theme = isLightTheme ? light : dark;
       return ( 
           <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
               <ul>
                   <li style={{background: theme.ui}}>The way of kings</li>
                   <li style={{background: theme.ui}}>The name of the wind</li>
                   <li style={{background: theme.ui}}>The final empire</li>
               </ul>
           </div>
        );
   }
}

*/