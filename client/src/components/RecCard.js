import React, {useState} from "react";
import Comments from "./Comments"

function BookCard({ likeId, id, title, author, image, user, onAddComment, selectedBook, setId, addLike, removeLike }) {

  
  const [visibleComments, setVisibleComments] = useState(false);
  console.log(likeId)

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
       .then((like) => addLike(id, like));
    }
   
    const handleImageClick  = () => {
    setVisibleComments(!visibleComments)}

    function handleDeleteClick() {
   
      fetch(`/likes/${likeId.id}`, {
      method: "DELETE",
      });
      removeLike(id, likeId.id)
    }
    
    
    return (
      <div className="cards">
      <div className="card" onClick={() => setId(id)}>
      <div class="ui card"><div class="image"><img  className="cardPic" src={image} alt={title}/></div>
      <div class="content"><div class="header">Name: {title}</div>
      <div >Reccomended by : {user} {likeId? (<button id={likeId} class="ui red icon button" onClick={handleDeleteClick}  > <i aria-hidden="true" class="heart icon"></i> </button>): (<button class="ui icon button" onClick={handleClick} id={likeId} > <i aria-hidden="true" class="heart icon"></i> </button>)}  </div></div>
      <div class="extra content" > <a onClick={handleImageClick}><i aria-hidden="true" class="comment icon"></i>Comments </a></div>{ visibleComments ? <Comments onAddComment={onAddComment} book={selectedBook} user={user}/> : []}
      </div>
      </div>
      </div>
    
    );
}

export default BookCard;