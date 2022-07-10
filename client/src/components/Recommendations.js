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

   function onAddComment(newComment) {
        const updatedComments = [...books, newComment];
        setBooks(updatedComments);
   }

  //adding comments link 


  const selectedBook = books.find((a) => a.id === id);
 

    return (
      <div className="bookcontainer">
          <h1  className="bookheader">Community Recommended Books</h1>
          <RecList onAddComment={onAddComment} book = {books} setId={setId} selectedBook={selectedBook}/>
        </div>
    );
  }
  


export default Recommendations;