import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
   
    <div className="homeBackground" >
        
        
        
        <div className="title"><h1 class="ui header"><div className="title"> BookShare <FontAwesomeIcon icon={faCoffee} /> </div></h1></div>
        <h3 class="ui dividing header"></h3>
             {showLogin ? (
           <>
            <LoginForm onLogin={onLogin} setShowLogin={setShowLogin} />
          
            {/* <h3 className="signIn">
            Don't have an account? &nbsp;
            <button className="signInbutton"color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
            </h3> */}
            </>
           ) : (
             <>
            <SignUp onLogin={onLogin} setShowLogin={setShowLogin} />
          
            {/* <h3 className="logIn">
            Already have an account? &nbsp;
            <button className="loginButton" color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
            </h3> */}
             </>
              )}
              <div className="recordBack"></div>
              
    </div>
  );
   
     
}

export default Login;