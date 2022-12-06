import React from 'react';
import s from "./pets.module.scss";
import petCard1 from "../../images/petCard1.png";
import {Link} from "react-router-dom";
import {User} from "../../redux/slices/posts";

type PetsType = {
    _id?: string
    petName: string
    petBreed: string
    agePet: string
    petGender: string
    user: User
    userData: any
    petAvatarUrl?: string
}

export const Pets = ({_id, petName, petBreed, agePet, petGender, petAvatarUrl, user, userData}: PetsType) => {
    return (
        <>
            {
                userData?._id === user._id
                    ?
                    <Link key={_id} className={s.userPetsLink} to={`/petAccount/${_id}`}>
                        <div className={s.userPetsWrapper}>
                            <div className={s.userAccountPetPhoto}
                                 style={{backgroundImage: `url(http://localhost:3157${petAvatarUrl})`}}>
                            </div>
                            <div className={s.userAccountPetInfo}>
                                <div className={s.userAccountPetName}>{petName}</div>
                                <div className={s.userAccountAge}>Возраст: {agePet} лет</div>
                                <div className={s.userAccountPetGender}>Пол: {petGender}</div>

                                <div className={s.userAccountBreed}>Порода: {petBreed}</div>
                            </div>
                            <div className={s.personalPetCardWrapper}>
                                <div className={s.personalPetCard} style={{backgroundImage: `url(${petCard1})`}}>
                                </div>
                            </div>
                        </div>
                    </Link>
                    :
                    <></>
            }
        </>

    );
};

