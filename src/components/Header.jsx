import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import "../styles/header.css"
import Registration from "../pages/Registration.jsx";


function Header({setErrorMsg, loggedIn, setLoggedIn}) {
    const init = {username: "", password: ""};
        const [loginCredentials, setLoginCredentials] = useState(init);

    return (
        <nav className="topnav">
            <div className="divplacement">
                <NavLink to="/Registration"> Sign up </NavLink>
            <NavLink to="/"> Welcome</NavLink>
            <NavLink to="/AnimalFacts"> Find your recipe  </NavLink>
                {!loggedIn ? (<Login setLoggedIn={setLoggedIn} loginCredentials={loginCredentials} setLoginCredentials={setLoginCredentials} setErrorMsg={setErrorMsg}  />) :
                    (<div>
                        <LoggedIn setLoggedIn={setLoggedIn} loginCredentials={loginCredentials}/>
                    </div>)}
                </div>
        </nav>
    );
}

export default Header;