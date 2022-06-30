import React from "react"
import RecCard from "./RecCard"
function BookList({book, onUpdateBook}) {
  
  
    return (
      <div className="cards">
         {book.map((boo)=>(
          <RecCard
          id={boo.id}
          key={boo.id}
          title={boo.title}
          author={boo.author}
          image={boo.image}
          likes={boo.likes}
          book={book}
          onUpdateBook={onUpdateBook}

          user={boo.user.username}
          
          />
         ))}
      </div>
    );
  }
  


export default BookList;