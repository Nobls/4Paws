import React from 'react';
import s from './ourTeam.module.scss';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import team from '../../images/pagesBG/18.jpg'


const OurTeam = () => {
    return (
        <>
            <div>
                <h3 className={s.ourTeamTitle}>Наша команда</h3>
            </div>
            <div className={s.ourTeamWrapper}>
                <div className={s.ourTeamImage}>
                    <img src={team} alt="photo team"/>
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

                        <TabPanel>
                            <div>
                                <h2>Any content 1</h2>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="panel-content">
                                <h2>Any content 2</h2>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="panel-content">
                                <h2>Any content 3</h2>
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