import React, { useState } from "react";
import Login from "./login";
import Signup from "./Signup";

export default function SignInPage () {
    const [viewSignUp, setSignUp] = useState(false);
    const toggleForm = () =>{
        setSignUp(!viewSignUp);
    }
    return(
        <div className="signin-container">
            {viewSignUp ? <Signup /> : <Login />}
           <h3>
            {viewSignUp ?
                <> Already have an account? <button onClick={toggleForm}>Log In</button></>
                : <> Don't have an accoutn? <button onClick={toggleForm}>Sign Up</button> </>
            } 
           </h3>
        </div>
    );
};