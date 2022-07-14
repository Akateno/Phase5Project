import React from "react"
import UserBookCard from "./UserBookCard"
function UserList({book, onDeleteBook, selectedBook, setId}) {
  
  
    return (
      <div className="listcards">
         {book.map((boo)=>(
          <UserBookCard
          id={boo.id}
          key={boo.id}
          title={boo.title}
          author={boo.author}
          image={boo.image}
          userId={boo.user_id}
          onDeleteBook={onDeleteBook}
          previewLink={boo.previewLink}
          />
         ))}
      </div>
    );
  }
  


export default UserList;