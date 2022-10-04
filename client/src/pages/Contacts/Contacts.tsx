import React from 'react';
import s from "./contacts.module.scss";
import ButtonStandart from "../../components/buttonStandart/ButtonStandart";

const Contacts = () => {
    return (
        <div>
            <div className={s.contactsBG}>
                <h1 className={s.contactTitle}>Всегда на связи<br/>с нашими <span
                    className={s.contactSpan}>клиентами</span><br/>и их питомцами!</h1>
            </div>
            <div className={s.contactsWrapper}>
                <div className={s.contactInfo}>
                    <h3 className={s.contactInfoTitle}>Контакты</h3>
                    <div className={s.contactItems}>
                        <p>Адес: Минск, ул. Ложинская 14</p>
                        <p>Режим работы: Понедельник - Пятница</p>
                        <p>Время работы: 09:00 - 18:00</p>
                        <p>Выходные дни: Суббота, Воскресенье</p>
                        <div className={s.contactPhones}>
                            <p>Call Центр:</p>
                            <div className={s.phones}>
                                <a className={s.phone} href="tel:+375291111111">+375(29) 111-11-11</a>
                                <a className={s.phone} href="tel:+375291111122">+375(29) 111-11-22</a>
                            </div>
                        </div>
                        <p className={s.contactLinkInfo}>Telegram: <a href="#">Telegram@PetFriends</a></p>
                        <p className={s.contactLinkInfo}>Instagram: <a href="#">PetFriends</a></p>
                        <p className={s.contactLinkInfo}>VK: <a href="#">vk.com/PetFriends</a></p>
                    </div>
                </div>
                <div className={s.writeUs}>
                    <h3 className={s.writeUsTitle}>Напиши нам</h3>
                    <div className={s.writeUsInputWrapper}>
                        <input type="text" className={s.writeUsInput} placeholder={'E-mail'}/>
                        <textarea className={s.writeUsTextarea} placeholder={'Задайте ваш вопрос'}>
                    </textarea>
                        <ButtonStandart title={'Отправить'}/>
                    </div>
                </div>
            </div>

            <div className={s.mapWrapper}>
                <iframe className={s.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d586.9978647126925!2d27.682601098671277!3d53.94965949853474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc934724fe48f%3A0x14eed4ce4b852bee!2z0YPQuy4g0JvQvtC20LjQvdGB0LrQsNGPIDE0LCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1663604749598!5m2!1sru!2sby"
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default Contacts;