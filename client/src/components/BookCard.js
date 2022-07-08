import { useState } from "react";
import { useHistory } from "react-router";
import { Card, Icon, Image } from 'semantic-ui-react'


function BookCard({ id, title, author, image, userID, setId, selectedBook }) {

     const [errors, setErrors] = useState([]);
    
     const history = useHistory();
     function handleClick() {
         fetch("/recommendations", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             title,
             author,
             image,
           }),
         }).then((r) => {
           if (r.ok) {
             history.push("/recommendations");
           } else {
             r.json().then((err) => setErrors(err.errors));
           }
         });
       }

    function addLibrary() {
      fetch("/user_books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          author,
          image,
        }),
      }).then((r) => {
        if (r.ok) {
          history.push("/home");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  return (
   
    <div className="cards">
      <div className="card" onClick={() => setId(id)}>
      </div>
      <div class="ui card"><div class="image"><img className="cardPic" src={image} alt={title}/></div><div class="content"><div class="header">Name: {title}</div><div class="meta">Author: {author}</div><div class="description">New York Times Best Seller</div></div><div class="extra content"><a><i aria-hidden="true" class="user icon"></i> <button className="addButton" onClick={handleClick} > Recommend </button>
      <button  className="addButton" onClick={addLibrary} > Add to Library</button></a></div></div>
    </div>
    
  );
}
export default BookCard;