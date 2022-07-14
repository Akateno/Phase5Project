import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Books from "./Books";
import Recommendations from "./Recommendations";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))  
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (

    <div >
      < NavBar user={user} setUser={setUser} />
      <div className="logo">
        <FontAwesomeIcon icon={faCoffee} />
      </div>
      
      <div  >
        {/* <Switch>
          <Route path="booklist">
            <BookList/>
          </Route>
        </Switch> */}
        {user ? (
          <Switch>
            <Route exact path="/home">
              <Home user={user} />
            </Route>
            <Route path="/books">
            <Books/>
            </Route>
            <Route path="/recommendations">
            <Recommendations user={user}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            
           
          </Switch>
        )}
      </div>
    </div>
    
  );
}

export default App;
