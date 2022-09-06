import React from 'react';
import s from './ourTeam.module.scss';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {ourTeam} from "../../data/data";

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
                            <div className={s.tabPanelItem1}>
                                {
                                   ourTeam[0].cynologist.map(m=>{
                                       return(
                                           <div key={m.id} className={s.ourTeamCardWrapper}>
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
                            </div>
                        </TabPanel>
                        <TabPanel className={s.tabPanel2}>
                            <div className={s.tabPanelItem2}>
                                {
                                    ourTeam[1].veterinarian.map(m=>{
                                        return(
                                            <div key={m.id} className={s.ourTeamCardWrapper}>
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
                            </div>
                        </TabPanel>
                        <TabPanel className={s.tabPanel3}>
                            <div className={s.tabPanelItem3}>
                                {
                                    ourTeam[2].callCenter.map(m=>{
                                        return(
                                            <div key={m.id} className={s.ourTeamCardWrapper}>
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