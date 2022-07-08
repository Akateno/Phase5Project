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

  const userItems = books.comments.map((rc)=>(
    
    <div className="reviewsContainer"key={rc.id}>
     
      



      <div class="ui comments"><div class="comment"><a class="avatar"><img src="https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"/></a>
      <div class="content"><div class="author">UserName</div>
      <div class="text">Comment: {rc.content}</div>
      <div class="actions"><a class="">Reply</a><a class="">Save</a><a class="">Hide</a>
      </div></div></div></div>
       {/* <button onClick={() => setIsEditing((isEditing) => !isEditing)}>+</button>

        {isEditing ? (
        <NewComment 
          id={book.id}
          contentt={rc.content}
          onAddComment={onAddComment}
          
        />
      ) : (
        <p></p>
      )}  */}

    </div>
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