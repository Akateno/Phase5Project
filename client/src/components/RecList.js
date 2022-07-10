import React from "react"
import RecCard from "./RecCard"
function BookList({book, selectedBook, setId, onAddComment}) {
  
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

          // likeId={boo.likes.map((like)=>
          //   (like.id))}
          
          book={book}
          onAddComment={onAddComment}

          user={boo.user.username}
         
          
          />
         ))}
      </div>
    );
  }
  


export default BookList;