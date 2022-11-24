import React, {useRef, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import Welcome from "./pages/Welcome.jsx"
import AnimalFacts from "./pages/AnimalFacts"

function App(props) {

    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/AnimalFacts" element={<AnimalFacts/>}/>
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </>
    );
}


export default App;