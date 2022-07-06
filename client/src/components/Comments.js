import React, { useState } from "react";
import NewComment from "./NewComment"




function Comments({ book }) {
    const [books, setBooks]=useState(book)
    const [isEditing, setIsEditing] = useState(false);
    console.log(book)
    
    function onAddComment(newComment) {
        const updatedComments = [...books, newComment];
        setBooks(updatedComments);
      }

  const userItems = book.comments.map((rc)=>(
    
    <div className="reviewsContainer"key={rc.id}>
      <p>Comment: {rc.content}</p>
      <button onClick={() => setIsEditing((isEditing) => !isEditing)}>+</button>

        {isEditing ? (
        <NewComment 
          id={book.id}
          contentt={rc.content}
          onAddComment={onAddComment}
          
        />
      ) : (
        <p></p>
      )}

    </div>
  ))

  return (
    <div>
        <div>
               <h3 className="userReviews">User Comments</h3> 
              
              
                {userItems}
        </div>
    </div>
  );
}
export default Comments;