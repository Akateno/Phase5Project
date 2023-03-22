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
        
             {showLogin ? (
           <>
            <LoginForm onLogin={onLogin} setShowLogin={setShowLogin} />
            </>
           ) : (
             <>
            <SignUp onLogin={onLogin} setShowLogin={setShowLogin} />
             </>
              )}
        <div className="recordBack"></div>  
    </div>
  );
   
     
}

export default Login;