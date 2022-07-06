import React from "react"
import RecCard from "./RecCard"
function BookList({book, onUpdateBook, onDeleteBook, selectedBook, setId}) {
  
  // console.log(book)
    return (
      <div className="cards">
         {book.map((boo)=>(
          <RecCard
          id={boo.id}
          key={boo.id}
          title={boo.title}
          author={boo.author}
          image={boo.image}
          setId={setId}
          selectedBook={selectedBook}

          likeId={boo.likes.map((like)=>
            (like.id))}
          
          book={book}
          onUpdateBook={onUpdateBook}

          user={boo.user.username}
          onDeleteBook={onDeleteBook}
          
          />
         ))}
      </div>
    );
  }
  


export default BookList;