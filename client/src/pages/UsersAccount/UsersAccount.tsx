import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './usersAccount.module.scss'
import user from '../../images/user.png'
import paw from '../../images/pawBig.png'
import petCard1 from '../../images/petCard1.png';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "../../axios/axios";
import {useAppDispatch, useAppSelector} from "../../redux/hook/hook";
import {fetchUserPet} from "../../redux/slices/userPet";

const UsersAccount = () => {

    const dispatch = useAppDispatch()
    const {userPet} = useAppSelector((state)=>state.userPet)
    const userData = useAppSelector((state) => state.auth.data)
    console.log(userData)

    const [data, setData] = useState<any>()
    const [loading, setLoading] = useState<any>(true)


    const {id} = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(()=>{
        dispatch(fetchUserPet())
    },[])

    console.log(userPet)

    useEffect(() => {
        axios.get(`/auth/user/${id}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
            }).catch((err) => {
            console.warn(err)
        })
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

    if (loading) {
        return <div>Загрузка...</div>
    }

    return (
        <div className={s.pageContainer}>
            <h2 className={s.userAccountTitle}>Личный кабинет</h2>

            <div className={s.userInfo}>
                <div className={s.userInfoWrapper}>
                    <div className={s.userAccountPhoto}
                         style={{backgroundImage: data.avatarUrl ? `url(http://localhost:3157${data.avatarUrl})` : `url(${user})`}}>
                    </div>
                    <div className={s.userAccountInfo}>
                        {
                            data.name
                                ?
                                <div className={s.userNameWrapper}>
                                    <span className={s.userAccountName}>{data.lastName}</span>
                                    <span className={s.userAccountName}>{data.name}</span>
                                    <span className={s.userAccountName}>{data.surName}</span>
                                </div>
                                :
                                <div className={s.userAccountName}>{data.fullName}</div>
                        }
                        <div className={s.userAccountAddress}>
                            Адрес: {data.city}, {data.street} д.{data.houseNumber} к.{data.corpsHouse} кв.{data.apartmentNumber}
                        </div>
                        <a className={s.userAccountPhone} href={'tel:375291112233'}>Телефон: {data.userPhoneNumber}</a>
                        <div className={s.userAccountEmail}>E-mail: {data.email}</div>
                    </div>
                </div>
                <div className={s.userPersonalCardWrapper}>
                    <img className={s.userPersonalCardPaw} src={paw} alt="paw"/>
                    <div className={s.userPersonalCardName}>
                        {
                            data.name
                                ?
                                `${data.lastName} ${data.name}`
                                :
                                data.fullName
                        }
                    </div>
                    <div className={s.userPersonalCardSaleWrapper}>
                        <div className={s.userPersonalCardBonus}>Бонусы: 19</div>
                        <div className={s.userPersonalCardSale}>Скидка: 3%</div>
                    </div>
                    <div className={s.userPersonalCardNumber}>1555 1511 1511 2222</div>
                </div>
            </div>

            <a className={s.linkChangeUserinfoBtn} href={`/auth/user/${id}/userInfo`}>
                <button className={s.changeUserinfoBtn}>Данные о пользователе</button>
            </a>

            <h3 className={s.userPetsTitle}>Питомцы</h3>

            <div className={s.userAccountPets}>

                {
                    userPet.map((m, index)=>{
                        return (
                            <Link key={index} className={s.userPetsLink} to={`/petAccount/${m._id}`}>
                                <div className={s.userPetsWrapper}>
                                    <div className={s.userAccountPetPhoto} style={{backgroundImage: `url(http://localhost:3157${m.petAvatarUrl})`}}>
                                    </div>
                                    <div className={s.userAccountPetInfo}>
                                        <div className={s.userAccountPetName}>{m.petName}</div>
                                        <div className={s.userAccountAge}>{m.agePet} лет</div>
                                        <div className={s.userAccountBreed}>{m.petBreed}</div>
                                    </div>
                                    <div className={s.personalPetCardWrapper}>
                                        <div className={s.personalPetCard} style={{backgroundImage: `url(${petCard1})`}}>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )

                    })
                }

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

            <Link to={'/adminPanel'}>Admin Panel</Link>
        </div>
    );
};

export default UsersAccount;