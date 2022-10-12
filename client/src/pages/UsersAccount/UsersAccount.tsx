import React, {useEffect} from 'react';
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


    return (
        <div>
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
                             aria-labelledby="plusIconTitle" stroke="#ffffff" stroke-width="2"
                             color="#2329D6">
                            <path d="M20 12L4 12M12 4L12 20"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default UsersAccount;