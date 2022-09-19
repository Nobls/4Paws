import React from 'react';
import s from "./contacts.module.scss";

const Contacts = () => {
    return (
        <div>
            <div className={s.contactsBG}>
                <div className={s.writeUs}>
                    <h2>Напиши нам</h2>
                    <label><span>E-mail:<input type="text"/></span></label>
                    <textarea >

                    </textarea>
                </div>
            </div>
            <div className={s.contactItems}>
                <p>+375(29) 111-11-11</p>
                <p>+375(29) 111-11-22</p>
            </div>
            <div className={s.mapWrapper}>
                <iframe className={s.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d586.9978647126925!2d27.682601098671277!3d53.94965949853474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc934724fe48f%3A0x14eed4ce4b852bee!2z0YPQuy4g0JvQvtC20LjQvdGB0LrQsNGPIDE0LCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1663604749598!5m2!1sru!2sby"
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default Contacts;