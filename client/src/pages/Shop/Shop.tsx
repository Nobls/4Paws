import s from './shop.module.scss';
import Category from "../../components/category/Category";
import {useState} from "react";

const Shop = () => {


    const [category, setCategory] = useState(false);

    const categoryHandler = () => {
      setCategory(category)
    }

    return (
        <div>
            <div>
                <div>
                    <div onClick={categoryHandler}>
                        <h1>Магазин</h1>
                    </div>

                    <div>
                        <Category category={category} setCategory={setCategory}/>
                    </div>

                    <div>
                        <Category category={category} setCategory={setCategory}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;