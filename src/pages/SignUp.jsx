import React from 'react';
import "../styles/header.css"

function SignUp() {

    return (
        <>
        <div className="divplacement">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" htmlFor="Username">Username </label>
                    <input className="form__input" type="text" id="Username" placeholder="Username here"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password here"/>
                </div>

            </div>
            <div class="footer">
                <button type="submit" class="btn">Register</button>
            </div>
        </div>
        </>
    );
}

export default SignUp;