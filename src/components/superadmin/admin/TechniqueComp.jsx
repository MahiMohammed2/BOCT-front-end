import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import TechniqueDelete from '../delete/TechniqueDelete';
import Translate from '../../../static/DataLanguage.json';

const TechniqueComp = () => {
    const [AdminTechniques, setAdminTechniquess] = useState([]);
    const navigate = useNavigate();
    const [contente, setContente] = useState("");
    const [filtring, setFiltring] = useState([]);
    const [hundler, setHundler] = useState(false);
    useEffect(() => {
        const affiche = async () => {
            const accesToken = localStorage.getItem("accessToken");
            if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
                navigate('/superadmin/login')
            }
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/superadmin/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setAdminTechniquess(res.data.AdminTechniques)
        }
        affiche();
    }, []);
    useEffect(() => {
        const lang = localStorage.getItem('lang');
        if (lang === "ar") {
            setContente(Translate.العربية)

        } else {
            setContente(Translate.Français)
        }
    })
    const Searching = (ev) => {
        const query = ev.target.value
        setFiltring(AdminTechniques.filter(item =>
            item.id === parseInt(query)
        ))
        if (query.length > 0) {
            setHundler(true)
        } else if (query === "") {
            setHundler(false)
        }
    }
    return (
        <div>
            <table className='table'>
                <tr>
                    <th colSpan={19}>
                        <div className="header_controle_single">
                            <input className='input_search' type="text" placeholder={contente.searching} onChange={Searching} />
                        </div>
                    </th>
                </tr>
                <tr className='header'>
                    <th colSpan={20}>{contente.admins_de + " " + contente.technique}</th>
                </tr>
                <tr>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.id}</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.nom_complete}</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.email}</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.CIN}</th>
                    <th></th>
                    <th className='space-header'></th>
                    <th></th>
                    <th className='space-header'></th>
                    <th></th>
                </tr>
                {
                    hundler?
                    filtring.map((e) => {
                        return (
                            <tr>
                                <td></td>
                                <td>{e.id}</td>
                                <td></td>
                                <td>{e.fullname}</td>
                                <td></td>
                                <td>{e.email}</td>
                                <td></td>
                                <td>{e.CIN}</td>
                                <td></td>
                                <td ><NavLink to={`/superadmin/technique/${e.id}`}><FaEdit className='edit-icon' /></NavLink></td>
                                <td></td>
                                <td ><TechniqueDelete id={e.id} /></td>
                                <td></td>
                            </tr>
                        )
                    })
                    :
                    AdminTechniques.map((e) => {
                        return (
                            <tr>
                                <td></td>
                                <td>{e.id}</td>
                                <td></td>
                                <td>{e.fullname}</td>
                                <td></td>
                                <td>{e.email}</td>
                                <td></td>
                                <td>{e.CIN}</td>
                                <td></td>
                                <td ><NavLink to={`/superadmin/technique/${e.id}`}><FaEdit className='edit-icon' /></NavLink></td>
                                <td></td>
                                <td ><TechniqueDelete id={e.id} /></td>
                                <td></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default TechniqueComp