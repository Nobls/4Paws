import React from 'react';
import s from './usersAccount.module.scss'
import user from '../../images/reviews/user4.jpg'

const UsersAccount = () => {
    return (
        <div>
            <div className={s.pageContainer}>
            <h2 className={s.userAccountTitle}>Личный кабинет</h2>

                <div className={s.userInfo}>
                    <div className={s.userInfoWrapper}>
                        <img className={s.userAccountPhoto} src={user} alt="userPhoto"/>
                        <div className={s.userAccountInfo}>
                            <div className={s.name}>Леонид Мизнов</div>
                            <div className={s.address}>Минск, Ложинская д.19</div>
                            <div className={s.email}>exampleEmail@gmail.com</div>
                        </div>
                    </div>
                    <div className={s.userPersonalCard}>
                        <div>
                            Леонид Мизнов
                        </div>
                        <div>
                            <div>Бонусы: 19</div>
                            <div>Скидка: 3%</div>
                        </div>
                        <div>1555 1511 1511 2222</div>
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