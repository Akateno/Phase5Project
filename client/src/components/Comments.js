import React, { useState } from "react";
import NewComment from "./NewComment"




function Comments({ book, onAddComment, user }) {
    const [books, setBooks]=useState(book)
    const [isEditing, setIsEditing] = useState(false);
    console.log(book)

    const userItems = 
    book.comments.map((rc)=>(

    
    
    <div className="reviewsContainer"key={rc.id}>
     
      <div class="text"> {rc.content}</div>
      <div class="actions">
      </div></div>
    ))

  return (
    <div>
        <div>
              <button onClick={() => setIsEditing((isEditing) => !isEditing)}>+</button>
                {userItems}
        </div>
        {
            isEditing? (<NewComment 
              id={books.id}
              onAddComment={onAddComment}
            />):(<p></p>)
        }
    </div>
  );
}
export default Comments;