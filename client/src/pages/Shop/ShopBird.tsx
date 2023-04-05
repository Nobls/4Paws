import React, {useEffect, useState} from 'react';
import axios from "../../axios/axios";
import CategoryListBird from "../../components/categoryList/CategoryListBird";

const ShopBird = () => {

    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<any>(true)

    useEffect(() => {
        axios.get('/shop/bird/categoryBirds').then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(err => {
            console.warn(err)
        })
    }, [])

    if (loading) {
        return <div>Загрузка...</div>
    }

    return (
        <>
            <CategoryListBird data={data}/>
        </>
    );
};

export default ShopBird;