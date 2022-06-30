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
          <h1  className="bookheader"> Books List</h1>
          <BookList book = {books} selectedBook={selectedBook} setId={setId}/>
        </div>
    );
  }
  


export default Books;