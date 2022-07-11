import React, { useState } from "react";

function NewComment({id, onAddComment}) {
    const [content, setContent] = useState("");
    console.log(id)
  
    
    function handleFormSubmit(e) {
        e.preventDefault();
         fetch(`/recommendations/${id}/comments`, {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
            content,
            recommendation_id: id, 
           }),
         })
           .then((r) => r.json())
           .then((addComment) => onAddComment(addComment));
      }
 

    return (
    <form className="addComment" onSubmit={handleFormSubmit}>
    {/* <input  type="text" onChange={(e) => setContent(e.target.value)} value={content} name="name" placeholder="comment.." /> */}
    <div class="ui fluid icon input">
      <input  type="text" onChange={(e) => setContent(e.target.value)} value={content} name="comment" placeholder="comment.." />
    </div>
    <button className="ui button" type="submit">
          Add
     </button>
    {/* <input type="submit" value="Save" /> */}
   </form>
    )
  }
  
  export default NewComment;