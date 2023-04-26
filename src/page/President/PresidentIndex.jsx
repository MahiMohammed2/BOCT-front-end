import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Upload from '../../components/Itemes/Upload';
import { Menubar } from 'primereact/menubar';
import Translate from '../../static/DataLanguage.json';

const PresidentIndex = () => {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const [contente, setContente] = useState("");

    useEffect(() => {
        const accesToken = localStorage.getItem("accessToken_pre");
        if (accesToken === "undefined" || accesToken === null || accesToken === 0) {
            navigate('/president/login')
        }
        const affiche = async () => {
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/president/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setFullName(res.data.datas.fullname)
            setEmail(res.data.datas.email)
            setUsername(res.data.datas.username)
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

    const items = [
        {
            label: contente.language,
            icon: 'pi pi-language',
            items: [
                {
                    label: 'Français',
                    command: () => {
                        localStorage.setItem('lang', 'fr')
                        window.location.reload(true)
                    }
                },
                {
                    label: 'العربية',
                    command: () => {
                        localStorage.setItem('lang', 'ar')
                        window.location.reload(true)
                    }

                },
            ]
        }
    ];
    return (
        <div className='profile-container'>

            <div className="profile-controle">
                <div className="profile-header">
                    <div className="profile-img-controle">
                        <div className='img-container'>
                            <Upload person={"president"} />
                        </div>
                        <p className='profile-info-img'>{contente.partone}
                            <p className='profile-info-text'>{contente.parttwo}</p>
                        </p>
                        <Menubar style={{ padding: "0", margin: "0" }} model={items} />

                    </div>
                </div>
                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>{contente.nom_complete}</p>
                        <p >{fullname}</p>
                    </div>
                </div>
            </div>
            <div className='profile-controle'>
                <div className='profile-header'>
                    <div className="profile-data">
                        <p>{contente.account_info}</p>
                    </div>
                </div>
                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>{contente.username}</p>
                        <p >{username}</p>
                    </div>
                </div>
                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>{contente.email}</p>
                        <p >{email}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PresidentIndex