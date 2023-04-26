import React from 'react'
import { BsFileEarmarkArrowDownFill, BsFileEarmarkArrowUpFill, BsFillPersonFill } from 'react-icons/bs'
import { RiAdminFill } from 'react-icons/ri'
import { TbChairDirector } from 'react-icons/tb'
import { IoIosArchive } from 'react-icons/io'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Show from '../../components/Itemes/Show'
import { useEffect } from 'react'
import Translate from '../../static/DataLanguage.json';
import { useState } from 'react'

const PresidentLayout = () => {
    const navigate = useNavigate();
    const [contente, setContente] = useState("");

    useEffect(()=>{
        const accesToken = localStorage.getItem("accessToken_pre");
        if (accesToken === "undefined" || accesToken === null || accesToken === 0) {
            navigate('/president/login')
        }
    })
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
                    <h5>{contente.bureau}</h5>
                </div>
                <div className='right-side'>
                    <Show person={"president"} />
                </div>
            </nav>

            <div className='grid-container'>
                <nav className='left-bar'>
                    <NavLink to='/president/arriver' className='childrens'><BsFileEarmarkArrowDownFill className='logo-icon' />{contente.arriver}</NavLink>
                    <NavLink to='/president/depart' className='childrens'><BsFileEarmarkArrowUpFill className='logo-icon' />{contente.depart}</NavLink>
                    <NavLink to='/president/directeur' className='childrens'><TbChairDirector className='logo-icon' />{contente.director}</NavLink>
                    <NavLink to='/president/superadmin' className='childrens'><IoIosArchive className='logo-icon' />{contente.admin_bureau}</NavLink>
                    <NavLink to='/president/administrative' className='childrens'><RiAdminFill className='logo-icon' />{contente.administrative}</NavLink>
                    <NavLink to='/president/finencier' className='childrens'><RiAdminFill className='logo-icon' />{contente.financiere}</NavLink>
                    <NavLink to='/president/technique' className='childrens'><RiAdminFill className='logo-icon' />{contente.technique}</NavLink>
                    <NavLink to='/president/employe' className='childrens'><BsFillPersonFill className='logo-icon' />{contente.employes}</NavLink>
                </nav>
                <Outlet />
            </div>

        </div>
    )
}

export default PresidentLayout