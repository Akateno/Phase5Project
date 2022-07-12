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
      <div className="homeHeader"> 
      <div class="ui message"><i aria-hidden="true" class="close icon"></i><div class="content"><div class="header">Welcome back!</div><p>This is a special notification which you can dismiss.</p></div></div>
          <h2 class="ui header"><img src="https://react.semantic-ui.com/images/avatar/large/patrick.png" class="ui circular image"/>{user.username} </h2>
          <div role="list" class="ui list"><div role="listitem" class="item"><i aria-hidden="true" class="users icon"></i><div class="content">Semantic UI</div></div><div role="listitem" class="item"><i aria-hidden="true" class="marker icon"></i><div class="content">New York, NY</div></div><div role="listitem" class="item"><i aria-hidden="true" class="mail icon"></i><div class="content"><a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a></div></div><div role="listitem" class="item"><i aria-hidden="true" class="linkify icon"></i><div class="content"><a href="http://www.semantic-ui.com">semantic-ui.com</a></div></div></div>
      </div>
        <h1  className="userMessage">Welcome, {user.username}!</h1>
        <UserList onDeleteBook={handleDeleteBook} book = {books} />
    </div>
  );
  }
  
  export default Home;