import React, {useEffect} from 'react';
import s from './usersAccount.module.scss'
import user from '../../images/reviews/user4.jpg'
import paw from '../../images/pawBig.png'

const UsersAccount = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])



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
                            <div className={s.userAccountAddress}>Минск, Ложинская д.19</div>
                            <div className={s.userAccountEmail}>exampleEmail@gmail.com</div>
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

                <div className={s.userPetsWrapper}>

                    <div className={s.userPetsInner}>
                        <img src="" alt=""/>
                        <div>
                            <div>Чапа</div>
                            <div>6 лет</div>
                            <div>Лабрадор</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default UsersAccount;