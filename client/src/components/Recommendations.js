import React, {useEffect, useState} from "react"
import RecList from "./RecList"

function Recommendations() {
  const [books, setBooks] = useState([])
  

  useEffect(() => {
    fetch("/recommendations")
      .then((r) => r.json())
      .then((books) => setBooks(books));
  }, []);

  function handleUpdateBook(updatedBook) {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
  }

 

    return (
      <div className="bookcontainer">
          <h1  className="bookheader">Community Recommended Books</h1>
          <RecList onUpdateBook={handleUpdateBook} book = {books}/>
        </div>
    );
  }
  


export default Recommendations;