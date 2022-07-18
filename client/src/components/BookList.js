import React from "react"
import BookCard from "./BookCard"
function BookList({book, selectedBook, setId}) {
  
  
    return (
      <div className="listcards">
         {book.map((boo)=>(
          <BookCard
          
          id={boo.id}
          key={boo.id}
          title={boo.volumeInfo.title}
          author={boo.volumeInfo.authors}
          // image={boo.volumeInfo.imageLinks.thumbnail}
          description={boo.volumeInfo.description}
          previewLink={boo.volumeInfo.previewLink}

          image={
            boo.volumeInfo.imageLinks === undefined
              ? ""
              : boo.volumeInfo.imageLinks.thumbnail
          }




          userID={boo.user_id}
          setId={setId}
          selectedBook={selectedBook}
          />
          
         ))}
         
      </div>
    );
  }
  


export default BookList;