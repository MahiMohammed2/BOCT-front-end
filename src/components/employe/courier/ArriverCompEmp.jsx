import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillPrinter } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import Translate from '../../../static/DataLanguage.json';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
const ArriverCompEmp = () => {
    const [contente, setContente] = useState("");
    const [Arriver, setArriver] = useState([]);
    const navigate = useNavigate();
    const [curentPage, setCurentPage] = useState(1);
    const recordsPages = 18;
    const lastIndex = curentPage * recordsPages;
    const firstIndex = lastIndex - recordsPages;
    const [filtring, setFiltring] = useState([]);
    const [hundler, setHundler] = useState(false);
    useEffect(() => {
        const affiche = async () => {
            const accesToken = localStorage.getItem("accessToken_emp");
            if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
                navigate('/employe/login')
            }
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/employe/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            }).then((res) => {
                setArriver(res.data.Arriver);
            })
        }
        affiche();
    }, []);



    const navigEprt = (e) => {
        navigate('/export/arriver/' + e)
    }
    const records = Arriver.slice(firstIndex, lastIndex);
    const nPages = Math.ceil(Arriver.length / recordsPages)
    const prePage = () => {
        if (curentPage !== 1) {
            setCurentPage(curentPage - 1)
        }
    }
    const nextPage = () => {
        if (curentPage !== nPages) {
            setCurentPage(curentPage + 1)
        }
    }
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
        setFiltring(Arriver.filter(item =>
            item.numero === parseInt(query)
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
                        <div className="header_controle">
                            <ul className='list_pagination'>
                                <li>
                                    <MdNavigateBefore className='icon_pagination' onClick={prePage} />
                                </li>
                                <li>
                                    <MdNavigateNext className='icon_pagination' onClick={nextPage} />
                                </li>
                            </ul>
                            <input className='input_search' type="text" placeholder={contente.searching} onChange={Searching} />
                        </div>
                    </th>
                </tr>
                <tr>
                    <th colSpan={20}>{contente.fichier_arriver}</th>
                </tr>
                <tr>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.numero}</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.objectif}</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.expediteur}</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.destinataire}</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.employe}</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.type_interet}</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>{contente.date_fichier}</th>
                    <th className='space-header'></th>
                    <th className='space-header'></th>
                </tr>
                {
                    hundler?
                    filtring.map((e) => {
                        return (
                            <tr>
                                <td></td>
                                <td>{e.numero}</td>
                                <td></td>
                                <td className='ellipsis'><p>{e.objectif}</p></td>
                                <td></td>
                                <td>{e.expediteur}</td>
                                <td></td>
                                <td>{e.destinataire}</td>
                                <td></td>
                                <td>{e.employere}</td>
                                <td></td>
                                <td>{e.interet}</td>
                                <td></td>
                                <td>{e.date_de_fichier}</td>
                                <td></td>
                                <td><AiFillPrinter className='edit-icon' onClick={() => navigEprt(e.numero)} /></td>
                            </tr>
                        )
                    })
                    :
                    records.map((e) => {
                        return (
                            <tr>
                                <td></td>
                                <td>{e.numero}</td>
                                <td></td>
                                <td className='ellipsis'><p>{e.objectif}</p></td>
                                <td></td>
                                <td>{e.expediteur}</td>
                                <td></td>
                                <td>{e.destinataire}</td>
                                <td></td>
                                <td>{e.employere}</td>
                                <td></td>
                                <td>{e.interet}</td>
                                <td></td>
                                <td>{e.date_de_fichier}</td>
                                <td></td>
                                <td><AiFillPrinter className='edit-icon' onClick={() => navigEprt(e.numero)} /></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default ArriverCompEmp