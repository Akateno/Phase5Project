import React from "react"
import RecCard from "./RecCard"
function BookList({book, selectedBook, setId, onAddComment, user, addLike, removeLike}) {
  
    return (
      <div className="listcards">
         {book.map((boo)=>(
          <RecCard
          id={boo.id}
          key={boo.id}
          title={boo.title}
          author={boo.author}
          image={boo.image}
          setId={setId}
          selectedBook={selectedBook}
          likeId = {boo.likes.find(l => l.user_id === user.id )}
          //likeId={boo.likes}
          removeLike={removeLike} 
          addLike={addLike}
          book={book}
          onAddComment={onAddComment}
          user={boo.user}
          />
         ))}
      </div>
    );
  }
  


export default BookList;