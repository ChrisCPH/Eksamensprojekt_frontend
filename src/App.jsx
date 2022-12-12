import React, {useRef, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import Welcome from "./pages/Welcome.jsx"
import FindMeals from './pages/FindMeals.jsx';
import MealPlan from "./pages/MealPlan.jsx"
import ViewMeals from "./pages/ViewMeals";
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewMealPlans from "./pages/ViewMealPlans.jsx";

function App(props) {

    const [loggedIn, setLoggedIn] = useState(false)
    const init = {username: "", password: ""};
    const [loginCredentials, setLoginCredentials] = useState(init);

    return (
        <>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} setLoginCredentials={setLoginCredentials} loginCredentials={loginCredentials}/>
            <Routes>
                <Route path="/ViewMeals" element={<ViewMeals/>}/>
                <Route path="/ViewMealPlans" element={<ViewMealPlans/>}/>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/FindMeals" element={<FindMeals/>}/>
                <Route path="/MealPlan" element={<MealPlan loginCredentials={loginCredentials}/>}/>
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </>
    );
}


export default App;