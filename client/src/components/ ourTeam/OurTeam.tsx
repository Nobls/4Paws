import React from 'react';
import s from './ourTeam.module.scss';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ourTeam} from "../../data/data";
import paw from "../../images/Vector2.png";
import {Link} from "react-router-dom";

const OurTeam = () => {


    return (
        <>
            <div>
                <h3 className={s.ourTeamTitle}>Наша команда</h3>
            </div>
            <div className={s.ourTeamWrapper}>
                <div className={s.ourTeamImage}>
                </div>
                <div className={s.ourTeamTabs}>
                    <Tabs className={s.tabsWrapper}>
                        <TabList className={s.tabsItems}>
                            <Tab className={s.tabsItemOne}>
                                Кинологи
                            </Tab>
                            <Tab className={s.tabsItemTwo}>
                                Ветеринары
                            </Tab>
                            <Tab className={s.tabsItemThree}>
                                Call-Центр
                            </Tab>
                        </TabList>

                        <TabPanel className={s.tabPanel1}>
                            <h4 className={s.tabPanelTitle}>Кинологи</h4>
                            <div className={s.tabPanelItem1}>
                                {
                                    ourTeam[0].cynologist.map(m => {
                                        return (
                                            <div key={m.id} className={s.ourTeamCardWrapper}>
                                                <div className={s.ourTeamPhotoWrapper}>
                                                    <img className={s.ourTeamPhoto} src={m.image} alt={m.alt}/>
                                                </div>
                                                <div className={s.ourTeamInformation}>
                                                    <h4 className={s.ourTeamInformationName}>{m.name}</h4>
                                                    <p className={s.ourTeamInformationDescription}>{m.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className={s.ourTeamButtonWrapper}>
                                    <Link to={'/services'} className={s.inServices}>
                                        <span>Перейти к услугам</span>
                                        <img src={paw} alt=""/>
                                    </Link>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel className={s.tabPanel2}>
                            <h4 className={s.tabPanelTitle}>Ветеринары</h4>
                            <div className={s.tabPanelItem2}>
                                {
                                    ourTeam[1].veterinarian.map(m => {
                                        return (
                                            <div key={m.id} className={s.ourTeamCardWrapper}>
                                                <div className={s.ourTeamPhotoWrapper}>
                                                    <img className={s.ourTeamPhoto} src={m.image} alt={m.alt}/>
                                                </div>
                                                <div className={s.ourTeamInformation}>
                                                    <h4 className={s.ourTeamInformationName}>{m.name}</h4>
                                                    <p className={s.ourTeamInformationDescription}>{m.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className={s.ourTeamButtonWrapper}>
                                    <button className={s.inServices}>
                                        <span>Перейти к услугам</span>
                                        <img src={paw} alt=""/>
                                    </button>
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel className={s.tabPanel3}>
                            <h4 className={s.tabPanelTitle}>Call-Центр</h4>
                            <div className={s.tabPanelItem3}>
                                {
                                    ourTeam[2].callCenter.map(m => {
                                        return (
                                            <div key={m.id} className={s.ourTeamCardWrapper}>
                                                <div className={s.ourTeamPhotoWrapper}>
                                                    <img className={s.ourTeamPhoto} src={m.image} alt={m.alt}/>
                                                </div>
                                                <div className={s.ourTeamInformation}>
                                                    <h4 className={s.ourTeamInformationName}>{m.name}</h4>
                                                    <p className={s.ourTeamInformationDescription}>{m.description}</p>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={s.ourTeamButtonWrapper}>
                                <button className={s.inServices}>
                                    <span>Перейти к услугам</span>
                                    <img src={paw} alt=""/>
                                </button>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>


            {/*<div className={s.ourTeamContainer}>

                {
                    ourTeam.map(m => {
                        return (
                            <div key={m.id} className={s.ourTeamCardWrapper}>
                                <img className={s.paw} src={paw} alt="paw"/>
                                <div className={s.ourTeamPhotoWrapper}>
                                    <img className={s.ourTeamPhoto} src={m.image} alt={m.alt}/>
                                </div>
                                <div className={s.ourTeamInformation}>
                                    <h4>{m.name}</h4>
                                    <p>{m.description}</p>
                                </div>

                            </div>
                        )
                    })
                }

            </div>*/}
        </>
    );
};

export default OurTeam;