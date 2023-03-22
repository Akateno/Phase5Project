import React, {useEffect, useState} from "react"
import BookList from "./BookList"
require("dotenv").config();
function Books() {
  // require("dotenv").config();
  const [books, setBooks] = useState([])
  const [id, setId] = useState(null);

  const [fbook, setFbook]=useState("")
 const [apiKey, setApiKey]=useState("")

  
  const selectedBook = books.find((a) => a.id === id);

    function handleChange(e){
      const fbook = e.target.value
      setFbook(fbook) 
    }
    
    function HandleSubmit(e){
      e.preventDefault();
       
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${fbook}&key=${apiKey}&maxResults=40`)
          .then((r) => r.json())
          .then((book) => setBooks(book.items));
    }

    return (
      
      <div className="bookcontainer">
          <form onSubmit={HandleSubmit} className="search" >
            <div class="ui fluid icon input">
              <input onChange={handleChange} type="text"  name="comment" placeholder="searchbooks.." />
            </div>
            <button className="ui button" type="submit">
              search
            </button>
          </form>
          <h1  className="bookListHeader"> Browse book selection</h1>
          <div className="booklistHeader">
              <div>
                <h1  className="bookheader">Search Any Subject!</h1>
              </div>
          </div>
          <BookList book = {books} selectedBook={selectedBook} setId={setId}/>
     </div>
    );
  }
  


export default Books;