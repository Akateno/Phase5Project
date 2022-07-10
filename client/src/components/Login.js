import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
   
    <div className="backgroundLogin">
         
         
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