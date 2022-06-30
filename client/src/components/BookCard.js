import { useState } from "react";
import { useHistory } from "react-router";



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

    //   const handleImageClick  = () => {
    //     setVisibleDetails(!visibleDetails)
    // }
    

  return (
   
    <div className="cards">
      <div className="card" onClick={() => setId(id)}>
        <img  className="cardPic" src={image} alt={title} />
        <div className="cardDetails">
          <h2>Name: {title}</h2>
        <h3><em>Author: {author}</em> </h3>
        <button className="addButton" onClick={handleClick} > Add to Rec</button>
        <button  className="addButton" > Leave Review</button>
        </div>
      </div>
    </div>
    
  );
}
export default BookCard;