import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <div  className="navbar"> 
      <header class="ui menu" color="white" >
      
        <div class="active item" >
        <Link class="section" to="/home">Home</Link>
        <i aria-hidden="false" class="right chevron icon divider"></i>
        </div>

        <div class="item">
        <Link class="section" to="/books">Book List</Link>
        <i aria-hidden="true" class="right chevron icon divider"></i>
        </div>

        <div class="item" >

        <Link class="section" to="/recommendations"> Recomendations </Link>
        <i aria-hidden="true" class="right chevron icon divider"></i>
        </div>

        <div className="right menu">
          {user ? (
          <div class="item"><button  onClick={handleLogoutClick}>Logout</button>
        </div>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
      </header>

    </div>
   

  );
}

export default NavBar;