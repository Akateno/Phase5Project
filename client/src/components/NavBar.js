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
    <div> <header class="ui massive breadcrumb">
      {/* <div class="ui breadcrumb"><a class="section">Home</a>
      <div class="divider">/</div><a class="section">Store</a>
      <div class="divider">/</div>
      <div class="active section">T-Shirt</div></div> */}
      
      
      <div class="divider">
        <Link class="section" to="/home">Home</Link>
        <i aria-hidden="false" class="right chevron icon divider"></i>
      </div>

      <div class="divider">
        <Link class="section" to="/books">Book List</Link>
        <i aria-hidden="true" class="right chevron icon divider"></i>
      </div>

      <div class="divider" >

        <Link class="section" to="/recommendations"> Recomendations </Link>
        <i aria-hidden="true" class="right chevron icon divider"></i>
      </div>

      
    </header>
<div>
        {user ? (
          <div className="logoutButton"><button class="ui icon button" onClick={handleLogoutClick}>Logout</button>
          </div>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div></div>
   

  );
}

export default NavBar;