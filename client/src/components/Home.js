import React, {useEffect, useState} from "react"
import UserList from "./UserList"

function Home({ user }) {
const [books, setBooks] = useState([])



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
      <div className="homeHeader"> 
      <div class="ui message"><i aria-hidden="true" class="close icon"></i><div class="content"><div class="header">Welcome back!</div><p>This is a special notification which you can dismiss.</p></div></div>
          <h2 class="ui header"><img src={user.image} class="ui circular image"/>{user.name} </h2>
          <div role="list" class="ui list"><div role="listitem" class="item"><i aria-hidden="true" class="users icon"></i><div class="content"><a target="_blank" href="www.linkedin.com/in/erickkvargas">LinkedIn</a></div></div><div role="listitem" class="item"><i aria-hidden="true" class="marker icon"></i><div class="content">{user.city}, {user.state}</div></div><div role="listitem" class="item"><i aria-hidden="true" class="mail icon"></i><div class="content"><a href={user.email}>{user.email}</a></div></div><div role="listitem" class="item"><i aria-hidden="true" class="linkify icon"></i><div class="content"><a  target="_blank" href="https://github.com/Akateno">GitHub</a></div></div></div>
      </div>
        <h1  className="userMessage">Welcome, {user.username}!</h1>
        <UserList onDeleteBook={handleDeleteBook} book = {books} />
    </div>
  );
  }
  
  export default Home;