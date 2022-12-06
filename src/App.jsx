import React, {useRef, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import Welcome from "./pages/Welcome.jsx"
import AnimalFacts from "./pages/AnimalFacts"
import FindMeals from './pages/FindMeals.jsx';
import CreateMealPlan from "./pages/CreateMealPlan.jsx"

function App(props) {

    const [loggedIn, setLoggedIn] = useState(false)
    const init = {username: "", password: ""};
    const [loginCredentials, setLoginCredentials] = useState(init);

    return (
        <>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} setLoginCredentials={setLoginCredentials} loginCredentials={loginCredentials}/>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/FindMeals" element={<FindMeals/>}/>
                <Route path="/CreateMealPlan" element={<CreateMealPlan loginCredentials={loginCredentials}/>}/>
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </>
    );
}


export default App;