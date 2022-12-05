import React, {useState} from 'react';
import "../styles/header.css"
import Axios from 'axios';

function SignUp() {
const [usernameSignup, setUsernameSignup] = useState('')
    const [passwordSignup, setPasswordSignUp] = useState('')


    const register = () => {
    Axios.post('http://localhost:8080/Eksamensprojekt_war_exploded/', {
            username: usernameSignup,
            password: passwordSignup,
        }).then((response) => {
            console.log(response);
    });

    };

    return (
        <>
        <div className="divplacement">
            <div className="App">
                <div className="registration">
                    <label className="form__label" htmlFor="Username">Username </label>
                    <input className="form__input" type="text" id="Username" placeholder="Username here" onChange={(e) => {
                        setUsernameSignup(e.target.value);
                    }}/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password here" onChange={(e) => {
                        setPasswordSignUp(e.target.value);
                    }}/>
                </div>

            </div>
            <div class="footer">
                <button onClick={register} type="submit" class="btn">Register</button>
            </div>
        </div>
        </>
    );
}

export default SignUp;