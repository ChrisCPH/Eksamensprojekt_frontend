import React, {useState} from 'react';
import "../styles/header.css"


function Registration() {

    const initialState = {username: "", password: "",}

    const [user, setUser] = useState(initialState)
    const handleSubmit = (evt) => {}

    const handleInput = (event) => {
        const target = event.target;
        const id = target.id;
        const value = target.value;
        user[id] = value;
        setUser({...user})
    }


    return (
        <div style={{marginTop:25}}>
            <form onSubmit={handleSubmit}>
                <input id="username" type="text" onChange={handleInput}
                       placeholder="Username" />
                <br/>
                <input id='password' type='text' onChange={handleInput}
                       placeholder='password'/>
                <br/>
                <button > Submit</button>
            </form>
            <p>{JSON.stringify(user)}</p>
        </div>
    );
}

export default Registration;