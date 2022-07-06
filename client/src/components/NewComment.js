import React, { useState } from "react";
function NewComment({id, contentt, onAddComment}) {
    const [content, setContent] = useState(contentt);
    console.log(id)
    console.log(contentt)
    function handleFormSubmit(e) {
        e.preventDefault();
         fetch(`/comments`, {
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
           .then((addComment) => console.log(addComment));
      }




    return (
    <form className="editRecord" onSubmit={handleFormSubmit}>
    <input  type="text" onChange={(e) => setContent(e.target.value)} value={content} name="name" placeholder="comment.." />
    <input type="submit" value="Save" />
   </form>
    )
  }
  
  export default NewComment;