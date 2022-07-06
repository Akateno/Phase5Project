import React, {useState} from "react";
import Comments from "./Comments"




function BookCard({ likeId, id, title, author, image, user, onUpdateBook, onDeleteBook, selectedBook, setId }) {

  const [like, setLike]=useState(false)
  const [visibleDetails, setVisibleDetails] = useState(false);

  


    function handleClick() {
      fetch(`/likes`, {
         method: "POST",
         headers: {
         "Content-Type": "application/json",
         },
        body: JSON.stringify({
        recommendation_id : id 
        }),
      })
       .then((r) => r.json())
       .then((items) => setLike(true));
    }
   
    const handleImageClick  = () => {
    setVisibleDetails(!visibleDetails)}

    function handleDeleteClick() {
   
      fetch(`/likes/${likeId}`, {
      method: "DELETE",
      });
     ;
    }
   
    
   
    return (
   
      <div className="cards">
      <div className="card" onClick={() => setId(id)}>
        <img  className="cardPic" src={image} alt={title} />
        <div className="cardDetails">
          <h2>Name: {title}</h2>
        <h3><em>Author: {author}</em> </h3>
        <h4>Reccomended by : {user}</h4>

       
          <button className="like" onClick={handleClick} > Like </button>
          

          <button className="dislike" onClick={handleDeleteClick} > Unlike </button>
        
          <h3 className="addReview" onClick={handleImageClick}>Comments </h3>   

          { visibleDetails ? <Comments book={selectedBook} /> : []}
        </div>
      </div>
    </div>
    
  );
}

export default BookCard;