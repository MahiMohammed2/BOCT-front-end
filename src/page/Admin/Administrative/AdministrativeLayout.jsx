import React from 'react'
import { BsFileEarmarkArrowDownFill, BsFileEarmarkArrowUpFill, BsFillPersonFill } from 'react-icons/bs';
import { NavLink, Outlet } from 'react-router-dom'
import Show from '../../../components/Itemes/Show';
import Translate from '../../../static/DataLanguage.json';
import { useEffect } from 'react';
import { useState } from 'react';

const AdministrativeLayout = () => {
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
                    <Show person={"administrative"} />

                </div>
            </nav>

            <div className='grid-container'>
                <nav className='left-bar'>
                    <NavLink to='/administrative/arriver' className='childrens'><BsFileEarmarkArrowDownFill className='logo-icon' />{contente.arriver}</NavLink>
                    <NavLink to='/administrative/depart' className='childrens'><BsFileEarmarkArrowUpFill className='logo-icon' />{contente.depart}</NavLink>
                    <NavLink to='/administrative/employes' className='childrens'><BsFillPersonFill className='logo-icon' />{contente.employes}</NavLink>
                </nav>
                <Outlet />
            </div>

        </div>
    )
}

export default AdministrativeLayout