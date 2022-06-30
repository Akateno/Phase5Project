import React from "react";




function BookCard({ book, id, title, author, image, user, likes, onUpdateBook }) {

  
   console.log(book)
  function handleLikeClick() {
    const updateObj = {
      likes: book.likes + 1,
    };

    fetch(`/recommendations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(onUpdateBook);
  }
   
    

  return (
   
    <div className="cards">
      <div className="card">
        <img  className="cardPic" src={image} alt={title} />
        <div className="cardDetails">
          <h2>Name: {title}</h2>
        <h3><em>Author: {author}</em> </h3>
        <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
        <h4>Reccomended by : {user}</h4>

        <button className="addButton"  > Finished Reading </button>
       
        </div>
      </div>
    </div>
    
  );
}
export default BookCard;