import { useState } from "react";
import { useHistory } from "react-router";



function BookCard({ id, title, author, image, userID, setId, selectedBook, description, previewLink }) {

     const [errors, setErrors] = useState([]);
     const [visibleComments, setVisibleComments] = useState(false);

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
          previewLink,
        }),
      }).then((r) => {
        if (r.ok) {
          history.push("/home");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
    const handleImageClick  = () => {
      setVisibleComments(!visibleComments)}
  return (
   
    <div className="listcards">
        <div className="listcard" onClick={() => setId(id)}></div>
          <div class="ui card"><div class="image"><img className="cardPic" src={image} alt={title}/></div>
          <div class="content"><div class="header">Name: {title}</div>
          <div class="meta">Author: {author}</div></div>
          <div class="extra content" > <a onClick={handleImageClick}><i aria-hidden="true" class="blue info icon"></i>Description</a></div>{ visibleComments ? <div className="description">{description}</div>: []}
          <div class="extra content"><a><i aria-hidden="true" class="user icon"></i> <button className="addButton" onClick={handleClick} > Recommend </button>
          <button  className="addButton" onClick={addLibrary} > Add to Library</button></a></div>
        </div>
    </div>
    
  );
}
export default BookCard;