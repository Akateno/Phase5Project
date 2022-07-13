import React, {useEffect, useState} from "react"
import RecList from "./RecList"

function Recommendations({user}) {
  const [books, setBooks] = useState([])
  const [id, setId] = useState(null);

  
  useEffect(() => {
    fetch("/recommendations")
      .then((r) => r.json())
      .then((books) => setBooks(books));
    }, []);

   
    function onAddComment(newComment) {
      setBooks(books.map(book => {
        if(book.id !== id) {
          return book
        } else {
          return {...book, comments: [...book.comments, newComment]}
        }
      }));
    }
   

    function addLike(bookId, like){
      setBooks(books.map(b => {
        if(b.id === bookId) {
          return {...b, likes: [...b.likes, like]}
        } else{
          return b
        }
      }))
    }

    function removeLike(bookId, likeId) {
      setBooks(books.map(b => {
        if(b.id === bookId){
          return {...b, likes: b.likes.filter(l => l.id !== likeId)}
        } else {
          return b
        }
      }))
    }


    const selectedBook = books.find((a) => a.id === id);
 

    return (
      <div className="bookcontainer">
          
          
            <div className="recHeader">
              <div>
                <h1  className="bookheader">Community Recommended Books</h1>
              </div>
            </div>
            <h4 className="recMessage">Browse Books recommended by your community</h4>
          
          <RecList onAddComment={onAddComment} book = {books} setId={setId} user={user} selectedBook={selectedBook} removeLike={removeLike} addLike={addLike}/>
        </div>
    );
}
  


export default Recommendations;