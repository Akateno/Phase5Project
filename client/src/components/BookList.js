import React from "react"
import BookCard from "./BookCard"
function BookList({book, selectedBook, setId}) {
  
  
    return (
      <div className="cards">
         {book.map((boo)=>(
          <BookCard
          id={boo.id}
          key={boo.id}
          title={boo.title}
          author={boo.author}
          image={boo.image}
          userID={boo.user_id}
          setId={setId}
          selectedBook={selectedBook}
          />
         ))}
      </div>
    );
  }
  


export default BookList;