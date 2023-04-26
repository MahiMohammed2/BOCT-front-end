import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { RiAdminFill } from 'react-icons/ri'
import { IoIosArchive } from 'react-icons/io'
import { NavLink, Outlet } from 'react-router-dom'
import Show from '../../components/Itemes/Show'
import { HiUserAdd } from 'react-icons/hi'
import Translate from '../../static/DataLanguage.json';
import { useEffect } from 'react'
import { useState } from 'react'

const DirectorLayout = () => {
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
                    <h5>{contente.bureau}</h5>
                </div>
                <div className='right-side'>
                    <Show person={"director"} />
                </div>
            </nav>

            <div className='grid-container'>
                <nav className='left-bar'>
                    <NavLink to="/director/addSuperadmin"><button className='btn-add'><HiUserAdd className='logo-icon' />{contente.ajouter_admin_bureau}</button></NavLink>
                    <NavLink to='/director/superadmin' className='childrens'><IoIosArchive className='logo-icon' />{contente.admin_bureau}</NavLink>
                    <NavLink to='/director/administrative' className='childrens'><RiAdminFill className='logo-icon' />{contente.administrative}</NavLink>
                    <NavLink to='/director/finencier' className='childrens'><RiAdminFill className='logo-icon' />{contente.financiere}</NavLink>
                    <NavLink to='/director/technique' className='childrens'><RiAdminFill className='logo-icon' />{contente.technique}</NavLink>
                    <NavLink to='/director/employe' className='childrens'><BsFillPersonFill className='logo-icon' />{contente.employes}</NavLink>
                </nav>
                <Outlet />
            </div>

        </div>
    )
}

export default DirectorLayout