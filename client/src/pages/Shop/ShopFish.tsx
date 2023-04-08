import React, {useEffect, useState} from 'react';
import axios from "../../axios/axios";
import CategoryListFish from "../../components/categoryList/CategoryListFish";

const ShopFish = () => {

    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<any>(true)

    useEffect(() => {
        axios.get('/shop/fish/categoryFish').then(res => {
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
          <CategoryListFish data={data}/>
        </>
    );
};

export default ShopFish;