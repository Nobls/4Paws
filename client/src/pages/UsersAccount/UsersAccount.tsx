import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './usersAccount.module.scss'
import user from '../../images/reviews/user4.jpg'
import petPhoto from '../../images/pagesBG/04.jpg'
import paw from '../../images/pawBig.png'
import bgPetCard from '../../images/background/bg1.png'
import {useNavigate} from "react-router-dom";

const UsersAccount = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const navigate = useNavigate()

    const addPet = () => {
        navigate('/petInfo')
    }

    let [quantity, setQuantity] = useState(0)

    const quantityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setQuantity(e.currentTarget.valueAsNumber)
    }

    const countQuantityPlus = () => {
        setQuantity(quantity + 1)
        console.log(quantity)
    }
    const countQuantityMinus = () => {
        setQuantity(quantity - 1)
        console.log(quantity)
        if (quantity <= 0) {
            setQuantity(0)
        }
    }


    return (
        <div className={s.pageContainer}>
            <h2 className={s.userAccountTitle}>Личный кабинет</h2>

            <div className={s.userInfo}>
                <div className={s.userInfoWrapper}>
                    <div className={s.userAccountPhoto} style={{backgroundImage: `url(${user})`}}>
                    </div>
                    <div className={s.userAccountInfo}>
                        <div className={s.userAccountName}>Леонид Иванович Мизнов</div>
                        <div className={s.userAccountAddress}> Адрес: Минск, Ложинская д.19</div>
                        <a className={s.userAccountPhone} href={'tel:375291112233'}>Телефон: +375-29-111-22-33</a>
                        <div className={s.userAccountEmail}>E-mail: exampleEmail@gmail.com</div>
                    </div>
                </div>
                <div className={s.userPersonalCardWrapper}>
                    <img className={s.userPersonalCardPaw} src={paw} alt="paw"/>
                    <div className={s.userPersonalCardName}>
                        Леонид Иванович Мизнов
                    </div>
                    <div className={s.userPersonalCardSaleWrapper}>
                        <div>Бонусы: 19</div>
                        <div>Скидка: 3%</div>
                    </div>
                    <div className={s.userPersonalCardNumber}>1555 1511 1511 2222</div>
                </div>
            </div>

            <h3 className={s.userPetsTitle}>Питомцы</h3>

            <div className={s.userAccountPets}>

                <div className={s.userPetsWrapper}>
                    <div className={s.userAccountPetPhoto} style={{backgroundImage: `url(${petPhoto})`}}></div>
                    <div className={s.userAccountPetInfo}>
                        <div className={s.userAccountPetName}>Чапа</div>
                        <div className={s.userAccountAge}>6 лет</div>
                        <div className={s.userAccountBreed}>Лабрадор</div>
                    </div>
                    <div className={s.personalPetCard} style={{backgroundImage: `url(${bgPetCard})`}}>
                        <p className={s.personalPetCardText}>Личная карта</p>
                    </div>
                </div>

                <div className={s.userPetsWrapper}>
                    <div className={s.userAccountPetPhoto} style={{backgroundImage: `url(${petPhoto})`}}></div>
                    <div className={s.userAccountPetInfo}>
                        <div className={s.userAccountPetName}>Чапа</div>
                        <div className={s.userAccountAge}>6 лет</div>
                        <div className={s.userAccountBreed}>Лабрадор</div>
                    </div>
                    <div className={s.personalPetCard} style={{backgroundImage: `url(${bgPetCard})`}}>
                        <p className={s.personalPetCardText}>Личная карта</p>
                    </div>
                </div>

                <div className={s.userPetsWrapper}>
                    <div className={s.userAccountPetPhoto} style={{backgroundImage: `url(${petPhoto})`}}></div>
                    <div className={s.userAccountPetInfo}>
                        <div className={s.userAccountPetName}>Чапа</div>
                        <div className={s.userAccountAge}>6 лет</div>
                        <div className={s.userAccountBreed}>Лабрадор</div>
                    </div>
                    <div className={s.personalPetCard} style={{backgroundImage: `url(${bgPetCard})`}}>
                        <p className={s.personalPetCardText}>Личная карта</p>
                    </div>
                </div>

                <button className={s.userAccountAddPets} onClick={addPet}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="55px" height="55px" viewBox="0 0 24 24"
                         aria-labelledby="plusIconTitle" stroke="#ffffff" strokeWidth="2"
                         color="#2329D6">
                        <path d="M20 12L4 12M12 4L12 20"/>
                    </svg>
                </button>
            </div>

            <div className={s.userAccountOrders}>
                <h3 className={s.userAccountTitle}>Ваши заказы</h3>
                <ol className={s.userAccountOrdersItems}>
                    <li className={s.userAccountOrdersItem}>
                        Наполнитель для туалета: "Пушистик" 2кг.
                        <div className={s.userQuantity}>
                            <input className={s.quantityInput} type="text" value={quantity}
                                   onChange={quantityChangeHandler}/>
                            <button className={s.quantityButtonMinus} onClick={countQuantityMinus}>
                                <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                     viewBox="0 0 24 24"
                                     aria-labelledby="minusIconTitle" stroke="#ffffff" strokeWidth={3}
                                     fill="none" color="#2329D6">
                                    <title id="minusIconTitle">Minus</title>
                                    <path d="M20,12 L4,12"/>
                                </svg>
                            </button>
                            <button className={s.quantityButtonPlus} onClick={countQuantityPlus}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="55px" height="55px" viewBox="0 0 24 24"
                                     aria-labelledby="plusIconTitle" stroke="#ffffff" strokeWidth={3}
                                     color="#2329D6">
                                    <path d="M20 12L4 12M12 4L12 20"/>
                                </svg>
                            </button>
                        </div>
                        <div className={s.userOrderPrice}>
                            450 р.
                        </div>
                        <button className={s.deleteOrder}>
                            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                 viewBox="0 0 24 24"
                                 aria-labelledby="closeIconTitle" stroke="#ffffff" strokeWidth={3}>
                                <path
                                    d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"/>
                            </svg>
                        </button>
                    </li>
                    <li className={s.userAccountOrdersItem}>
                        Сухой корм для собак "Breet" 12кг.
                        <div className={s.userQuantity}>
                            <input className={s.quantityInput} type="text" value={quantity}
                                   onChange={quantityChangeHandler}/>
                            <button className={s.quantityButtonMinus} onClick={countQuantityMinus}>
                                <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                     viewBox="0 0 24 24"
                                     aria-labelledby="minusIconTitle" stroke="#ffffff" strokeWidth={3}
                                     fill="none" color="#2329D6">
                                    <title id="minusIconTitle">Minus</title>
                                    <path d="M20,12 L4,12"/>
                                </svg>
                            </button>
                            <button className={s.quantityButtonPlus} onClick={countQuantityPlus}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="55px" height="55px" viewBox="0 0 24 24"
                                     aria-labelledby="plusIconTitle" stroke="#ffffff" strokeWidth={3}
                                     color="#2329D6">
                                    <path d="M20 12L4 12M12 4L12 20"/>
                                </svg>
                            </button>
                        </div>
                        <div className={s.userOrderPrice}>
                            450 р.
                        </div>
                        <button className={s.deleteOrder}>
                            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                 viewBox="0 0 24 24"
                                 aria-labelledby="closeIconTitle" stroke="#ffffff" strokeWidth={3}>
                                <path
                                    d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"/>
                            </svg>
                        </button>
                    </li>
                    <li className={s.userAccountOrdersItem}>
                        Корм для стерилизованных кошек "Acana" 250г.
                        <div className={s.userQuantity}>
                            <input className={s.quantityInput} type="text" value={quantity}
                                   onChange={quantityChangeHandler}/>
                            <button className={s.quantityButtonMinus} onClick={countQuantityMinus}>
                                <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                     viewBox="0 0 24 24"
                                     aria-labelledby="minusIconTitle" stroke="#ffffff" strokeWidth={3}
                                     fill="none" color="#2329D6">
                                    <title id="minusIconTitle">Minus</title>
                                    <path d="M20,12 L4,12"/>
                                </svg>
                            </button>
                            <button className={s.quantityButtonPlus} onClick={countQuantityPlus}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="55px" height="55px" viewBox="0 0 24 24"
                                     aria-labelledby="plusIconTitle" stroke="#ffffff" strokeWidth={3}
                                     color="#2329D6">
                                    <path d="M20 12L4 12M12 4L12 20"/>
                                </svg>
                            </button>
                        </div>
                        <div className={s.userOrderPrice}>
                            450 р.
                        </div>
                        <button className={s.deleteOrder}>
                            <svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px"
                                 viewBox="0 0 24 24"
                                 aria-labelledby="closeIconTitle" stroke="#ffffff" strokeWidth={3}>
                                <path
                                    d="M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575"/>
                            </svg>
                        </button>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default UsersAccount;