import React, { useState , useEffect } from 'react'
import { NavLink, Outlet} from 'react-router-dom';
import { HiUserAdd } from 'react-icons/hi'
import { RiAdminFill } from 'react-icons/ri'
import { BsFileEarmarkArrowUpFill, BsFileEarmarkArrowDownFill, BsFillPersonFill } from 'react-icons/bs'
import Show from '../../components/Itemes/Show';
import Translate from '../../static/DataLanguage.json';
const SupLayout = () => {
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
                    <Show person={"superadmin"} />

                </div>
            </nav>

            <div className='grid-container'>
                <nav className='left-bar'>
                    <NavLink to="/superadmin/addadmin"><button className='btn-add'><HiUserAdd className='logo-icon' />{contente.ajouter_admin}</button></NavLink>
                    <NavLink to="/superadmin/addemploye"><button className='btn-add'><HiUserAdd className='logo-icon' /> {contente.ajouter_employe}</button></NavLink>
                    <NavLink to='/superadmin/arriver' className='childrens'><BsFileEarmarkArrowDownFill className='logo-icon' />{contente.arriver}</NavLink>
                    <NavLink to='/superadmin/depart' className='childrens'><BsFileEarmarkArrowUpFill className='logo-icon' />{contente.depart}</NavLink>
                    <NavLink to='/superadmin/administrative' className='childrens'><RiAdminFill className='logo-icon' />{contente.administrative}</NavLink>
                    <NavLink to='/superadmin/financier' className='childrens'><RiAdminFill className='logo-icon' />{contente.financiere}</NavLink>
                    <NavLink to='/superadmin/technique' className='childrens'><RiAdminFill className='logo-icon' />{contente.technique}</NavLink>
                    <NavLink to='/superadmin/employes' className='childrens'><BsFillPersonFill className='logo-icon' />{contente.employes}</NavLink>
                </nav>
                <Outlet />
            </div>

        </div>
    )
}

export default SupLayout