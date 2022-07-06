import React, {useEffect, useState} from "react"
import RecList from "./RecList"

function Recommendations() {
  const [books, setBooks] = useState([])
  const [id, setId] = useState(null);

  

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

  function handleDeleteBook(id) {
    const updatedRec = books.filter((book) => book.id !== id);
    setBooks(updatedRec);
  }

  //adding comments link 


  const selectedBook = books.find((a) => a.id === id);
 

    return (
      <div className="bookcontainer">
          <h1  className="bookheader">Community Recommended Books</h1>
          <RecList onDeleteBook={handleDeleteBook} onUpdateBook={handleUpdateBook} book = {books} setId={setId} selectedBook={selectedBook}/>
        </div>
    );
  }
  


export default Recommendations;