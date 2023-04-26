import React, { useEffect } from 'react'
import { BsFileEarmarkArrowDownFill, BsFileEarmarkArrowUpFill } from 'react-icons/bs';
import { RiFolderAddFill } from 'react-icons/ri';

import { NavLink, Outlet } from 'react-router-dom';
import Show from '../../components/Itemes/Show';
import Translate from '../../static/DataLanguage.json';
import { useState } from 'react';
const EmployeLayout = () => {
    const [contente, setContente] = useState("");

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        if (lang === "ar") {
            setContente(Translate.العربية)

        } else {
            setContente(Translate.Français)
        }
    })
    return (

        <div className='container'>
            <nav className='navbar'>
                <div className='left-side'>

                    <img className='logo-royal-maroc' src='../royal-maroc.png' />
                    <h5>{contente.bureau_dorder}</h5>
                </div>
                <div className='right-side'>
                    <Show person={"employe"} />
                </div>
            </nav>

            <div className='grid-container'>
                <nav className='left-bar'>
                    <NavLink to="/employe/addArriver"><button className='btn-add'><RiFolderAddFill className='logo-icon' />{contente.ajouter_arriver}</button></NavLink>
                    <NavLink to="/employe/addDepart"><button className='btn-add'><RiFolderAddFill className='logo-icon' />{contente.ajouter_depart}</button></NavLink>
                    <NavLink to='/employe/arriver' className='childrens'><BsFileEarmarkArrowDownFill className='logo-icon' />{contente.arriver}</NavLink>
                    <NavLink to='/employe/depart' className='childrens'><BsFileEarmarkArrowUpFill className='logo-icon' />{contente.depart}</NavLink>
                </nav>
                <Outlet />
            </div>

        </div>
    )
}

export default EmployeLayout