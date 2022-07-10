import React, {useState} from "react";
import Comments from "./Comments"




function BookCard({ likeId, id, title, author, image, user, onAddComment, selectedBook, setId }) {

  const [like, setLike]=useState(false)
  const [visibleComments, setVisibleComments] = useState(false);

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
    setVisibleComments(!visibleComments)}

    function handleDeleteClick() {
   
      fetch(`/likes/${likeId}`, {
      method: "DELETE",
      });
     setLike(false);
    }
    
    
    return (
   
      <div className="cards">
      <div className="card" onClick={() => setId(id)}>

      <div class="ui card"><div class="image"><img className="cardPic" src={image} alt={title}/></div>
      <div class="content"><div class="header">Name: {title}</div>
      <div class="meta">Author: {author}</div>
      <div class="description">Reccomended by : {user} {like? (<button class="ui icon button" onClick={handleDeleteClick}  > Unlike </button>): (<button class="ui icon button" onClick={handleClick} > Like </button>)}</div></div>
      <div class="extra content" > <a onClick={handleImageClick}><i aria-hidden="true" class="comment icon"></i>Comments </a></div>{ visibleComments ? <Comments onAddComment={onAddComment} book={selectedBook} /> : []}</div>
      
        {/* <img  className="cardPic" src={image} alt={title} />
        <div className="cardDetails">
          <h2>Name: {title}</h2>
          <h3><em>Author: {author}</em> </h3>
          <h4>Reccomended by : {user}</h4>

           {like? (<button className="dislike" onClick={handleDeleteClick}  > Unlike </button>): (<button className="like" onClick={handleClick} > Like </button>)} 
          
           <h3 className="addReview" onClick={handleImageClick}>Comments </h3>     

          { visibleDetails ? <Comments book={selectedBook} /> : []}
        </div> */}
      </div>
    </div>
    
  );
}

export default BookCard;