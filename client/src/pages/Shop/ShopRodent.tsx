import React, {useEffect, useState} from 'react';
import axios from "../../axios/axios";
import CategoryListRodents from "../../components/categoryList/CategoryListRodents";

const ShopRodent = () => {

    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<any>(true)

    useEffect(() => {
        axios.get('/shop/rodent/categoryRodent').then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(err => {
            console.warn(err)
        })
    }, [])

    if (loading) {
        return <div>Загрузка...</div>
    }


    console.log(data)

    return (
        <>
            <CategoryListRodents data={data}/>
        </>
    );
};

export default ShopRodent;