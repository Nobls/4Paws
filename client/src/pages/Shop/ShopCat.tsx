import React, {useEffect, useState} from 'react';
import axios from "../../axios/axios";
import CategoryListCat from "../../components/categoryList/CategoryListCat";

const ShopCat = () => {

    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<any>(true)

    useEffect(() => {
        axios.get('/shop/cat/categoryCat').then(res => {
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
            <CategoryListCat data={data}/>
        </>
    );
};

export default ShopCat;