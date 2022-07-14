import React, { useState } from "react";
import NewComment from "./NewComment"




function Comments({ book, onAddComment, user }) {
    const [books, setBooks]=useState(book)
    const [isEditing, setIsEditing] = useState(false);
    console.log(book)

    const userItems = 
    
    
    
    book.comments.map((rc)=>(

    
    
    <div className="reviewsContainer"key={rc.id}>
      <div class="ui comments"><div class="comment"><a class="avatar"><img src={user.image}/></a>
      <div class="content"><div class="author">{user.username}</div>
      <div class="text"> {rc.content}</div>
      <div class="actions"><a class="">Reply</a><a class="">Save</a><a class="">Hide</a>
      </div></div></div></div>
      </div>
    ))

  return (
    <div>
        
        {/* <div class="ui comments"><div class="comment"><a class="avatar"><img src={user.image}/></a>
      <div class="content"><div class="author">{user.username}</div></div></div></div> */}
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