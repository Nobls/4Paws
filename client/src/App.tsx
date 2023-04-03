import React, {useEffect, useState} from 'react';
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
import UsersAccount from "./pages/UsersAccount/UsersAccount";
import PetAccount from "./pages/PetAccount/PetAccount";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import {useAppDispatch, useAppSelector} from "./redux/hook/hook";
import {fetchAuthMe, selectedIsAuth} from "./redux/slices/auth";
import {ModalServices} from "./components/modalServices/ModalServices";
import {AdminNews} from "./admin/AdminNews";
import {AdminServices} from "./admin/AdminServices";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Loading} from "./components/loading/Loading";
import ProductsDog from "./pages/Product/ProductDog";
import ProductsCat from "./pages/Product/ProductCat";
import ProductsBird from "./pages/Product/ProductBird";

function App() {

    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(selectedIsAuth)
    const [loading, setLoading] = useState<any>(true)

    useEffect(() => {
        dispatch(fetchAuthMe())
            .then(() => setLoading(false))
    }, [dispatch])

    if (loading) {
        return <Loading/>
    }

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path='services' element={<Services/>}/>
                    <Route path='services/:id' element={<ModalServices/>}/>
                    <Route path='shop' element={<Shop/>}/>
                    <Route path='news' element={<News/>}/>
                    <Route path='about' element={<AboutUs/>}/>
                    <Route path='contacts' element={<Contacts/>}/>
                    <Route path='auth/user/:id/userInfo' element={<UserInfo/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='registration' element={<Registration/>}/>
                    <Route path='petInfo/:id' element={<PetInfo/>}/>
                    <Route path='news/:id' element={<NewsPost/>}/>
                    <Route path='auth/user/:id' element={<UsersAccount/>}/>
                    <Route path='petAccount/:id' element={<PetAccount/>}/>
                    <Route path='adminPanel' element={<AdminPanel/>}/>
                    <Route path='news/:id/edit' element={<AdminNews/>}/>
                    <Route path='services/:id/edit' element={<AdminServices/>}/>

                    <Route path='shop/dog/dryFoodDog/:dryFoodDogId' element={<ProductsDog/>}/>
                    <Route path='/shop/dog/preservesForDogs/:preservesForDogsId' element={<ProductsDog/>}/>
                    <Route path='/shop/dog/vitaminsForDogs/:vitaminsForDogsId' element={<ProductsDog/>}/>
                    <Route path='/shop/dog/homeForDogs/:homeForDogsId' element={<ProductsDog/>}/>
                    <Route path='/shop/dog/toysForDogs/:toysForDogsId' element={<ProductsDog/>}/>
                    <Route path='/shop/dog/carryingForDogs/:carryingForDogsId' element={<ProductsDog/>}/>
                    <Route path='/shop/dog/cosmeticsForDogs/:cosmeticsForDogsId' element={<ProductsDog/>}/>
                    <Route path='/shop/dog/clothesForDogs/:clothesForDogsId' element={<ProductsDog/>}/>
                    <Route path='/shop/dog/dishesForDogs/:dishesForDogsId' element={<ProductsDog/>}/>
                    <Route path='/shop/dog/ammunitionForDogs/:ammunitionForDogsId' element={<ProductsDog/>}/>
                    <Route path='/shop/dog/toiletsForDogs/:toiletsForDogsId' element={<ProductsDog/>}/>

                    <Route path='/shop/cat/dryFoodForCats/:dryFoodForCatsId' element={<ProductsCat/>}/>
                    <Route path='/shop/cat/preservesForCats/:preservesForCatsId' element={<ProductsCat/>}/>
                    <Route path='/shop/cat/vitaminsForCats/:vitaminsForCatsId' element={<ProductsCat/>}/>
                    <Route path='/shop/cat/homeForCats/:homeForCatsId' element={<ProductsCat/>}/>
                    <Route path='/shop/cat/toysForCats/:toysForCatsId' element={<ProductsCat/>}/>
                    <Route path='/shop/cat/carryingForCats/:carryingForCatsId' element={<ProductsCat/>}/>
                    <Route path='/shop/cat/cosmeticsForCats/:cosmeticsForCatsId' element={<ProductsCat/>}/>
                    <Route path='/shop/cat/scratchingPostsForCats/:scratchingPostsForCatsId' element={<ProductsCat/>}/>
                    <Route path='/shop/cat/dishesForCats/:dishesForCatsId' element={<ProductsCat/>}/>
                    <Route path='/shop/cat/ammunitionForCats/:ammunitionForCatsId' element={<ProductsCat/>}/>
                    <Route path='/shop/cat/toiletsForCats/:toiletsForCatsId' element={<ProductsCat/>}/>

                    <Route path='/shop/bird/dryFoodForBirds/:dryFoodForBirdsId' element={<ProductsBird/>}/>
                    <Route path='/shop/bird/vitaminsForBirds/:vitaminsForBirdsId' element={<ProductsBird/>}/>

                </Route>
            </Routes>

            <ToastContainer position='bottom-right'/>
        </div>
    );
}

export default App;
