import React, {useEffect, useState} from 'react';
import CategoryListDog from "../../components/categoryList/CategoryListDog";
import axios from "../../axios/axios";

const ShopDog = () => {

    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<any>(true)

    useEffect(() => {
        axios.get('/shop/dog/categoryDog').then(res => {
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
            <CategoryListDog data={data}/>
        </>
    );
};

export default ShopDog;