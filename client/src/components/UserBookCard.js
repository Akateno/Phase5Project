import React from "react";

function BookCard({ id, title, author, image, user,onDeleteBook, previewLink  }) {


   function handleDeleteClick() {
   
    fetch(`/user_books/${id}`, {
      method: "DELETE",
    });
    onDeleteBook(id);
  }
  

  
   
  return (
   

<div className="listcards">
<div className="listcard" ></div>
  <div class="ui card"><div class="image"><img className="cardPic" src={image} alt={title}/></div>
  <div class="content"><div class="header">Name: {title}
  
   
  </div></div>
    <div class="extra content"><a><i aria-hidden="true" ></i> 
      <button class="ui button"> <a className="bookLink" target="_blank" href={previewLink}>Read</a></button>
      <button class=" blue ui button" onClick={handleDeleteClick} > Finished Reading </button></a>
    </div>
</div>
</div>
    
  );
}
export default BookCard;