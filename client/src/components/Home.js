import React, {useEffect, useState} from "react"
import UserList from "./UserList"

function Home({ user }) {
const [books, setBooks] = useState([])

  
    // if (user) {
    //   return <h1>Welcome, {user.username}!</h1>;
    // } else {
    //   return <h1>Please Login or Sign Up</h1>;
    // }


  useEffect(() => {
    fetch("/user_books")
      .then((r) => r.json())
      .then((books) => setBooks(books));
  }, []);
 

  function handleDeleteBook(id) {
    const updatedRec = books.filter((book) => book.id !== id);
    setBooks(updatedRec);
  }
  

  return (
    <div className="bookcontainer">
        <h1  className="bookheader">Welcome, {user.username}!</h1>
        <UserList onDeleteBook={handleDeleteBook} book = {books} />
      </div>
  );



  }
  
  export default Home;