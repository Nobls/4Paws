import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import Services from "./pages/Services/Services";
import Shop from "./pages/Shop/Shop";
import News from "./pages/News/News";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contacts from "./pages/Contacts/Contacts";
import Registration from "./pages/Registration/Registration";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path='services' element={<Services/>}/>
                    <Route path='shop' element={<Shop/>}/>
                    <Route path='news' element={<News/>}/>
                    <Route path='about' element={<AboutUs/>}/>
                    <Route path='contacts' element={<Contacts/>}/>
                    <Route path='registration' element={<Registration/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
