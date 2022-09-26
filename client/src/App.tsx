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
import UserInfo from "./pages/UserInfo/UserInfo";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import PetInfo from "./pages/PetInfo/PetInfo";
import NewsPost from "./pages/NewsPost/NewsPost";

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
                    <Route path='userInfo' element={<UserInfo/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='registration' element={<Registration/>}/>
                    <Route path='petInfo' element={<PetInfo/>}/>
                    <Route path='newsPost' element={<NewsPost/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
