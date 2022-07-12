import React, {useEffect, useState} from "react"
import BookList from "./BookList"
function Books() {
  const [books, setBooks] = useState([])
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch("/books")
      .then((r) => r.json())
      .then((books) => setBooks(books));
  }, []);

  const selectedBook = books.find((a) => a.id === id);




    return (
      
      <div className="bookcontainer">

          <form className="search" >
            <div class="ui fluid icon input">
              <input  type="text"  name="comment" placeholder="searchbooks.." />
            </div>
            <button className="ui button" type="submit">
              search
            </button>
          </form>



          <h1  className="bookListHeader"> Browse book selection</h1>
          <BookList book = {books} selectedBook={selectedBook} setId={setId}/>
     </div>
    );
  }
  


export default Books;