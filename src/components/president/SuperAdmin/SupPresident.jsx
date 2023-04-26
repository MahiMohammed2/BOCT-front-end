import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Translate from '../../../static/DataLanguage.json';

const SupPresident = () => {
    const [superadmin, setSuperadmin] = useState([]);
    const [contente, setContente] = useState("");
    const [filtring, setFiltring] = useState([]);
    const [hundler, setHundler] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        const affiche = async () => {
            const accesToken = localStorage.getItem("accessToken_pre");
            if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
                navigate('/president/login')
            }
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/president/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setSuperadmin(res.data.SuperAdmin);
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
        setFiltring(superadmin.filter(item =>
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
                    <th colSpan={20}>{contente.admins_de + " " + contente.bureau}</th>
                </tr>
                <tr>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.id}</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.nom_complete}</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.CIN}</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.username}</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.email}</th>
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
                                <td>{e.CIN}</td>
                                <td></td>
                                <td>{e.username}</td>
                                <td></td>
                                <td>{e.email}</td>
                                <td></td>
                            </tr>
                        )
                    })
                    :
                    superadmin.map((e) => {
                        return (
                            <tr>
                                <td></td>
                                <td>{e.id}</td>
                                <td></td>
                                <td>{e.fullname}</td>
                                <td></td>
                                <td>{e.CIN}</td>
                                <td></td>
                                <td>{e.username}</td>
                                <td></td>
                                <td>{e.email}</td>
                                <td></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default SupPresident
