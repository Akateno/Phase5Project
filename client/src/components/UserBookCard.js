import React from "react";

function BookCard({ id, title, author, image, user,onDeleteBook  }) {

   function handleDeleteClick() {
   
    fetch(`/user_books/${id}`, {
      method: "DELETE",
    });
    onDeleteBook(id);
  }
   
   
  return (
   
    <div className="cards">
      <div className="card">
        <img  className="cardPic" src={image} alt={title} />
        <div className="cardDetails">
          <h2>Name: {title}</h2>
        <h3><em>Author: {author}</em> </h3>
          <button className="addButton" onClick={handleDeleteClick} > Finished Reading </button>
        </div>
      </div>
    </div>
    
  );
}
export default BookCard;