import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Upload from '../../components/Itemes/Upload';
import { Menubar } from 'primereact/menubar';
import Translate from '../../static/DataLanguage.json';
const EmployeIndex = () => {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [CIN, setCIN] = useState("");
    const [interet, setInteret] = useState("");
    const [type, setType] = useState("");
    const navigate = useNavigate();
    const [contente, setContente] = useState("");
    
    useEffect(() => {
        const accesToken = localStorage.getItem("accessToken_emp");
        if (accesToken === "undefined" || accesToken === null || accesToken === 0) {
            navigate('/employe/login')
        }
        const affiche = async () => {
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/employe/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setFullName(res.data.datas.fullname)
            setEmail(res.data.datas.email)
            setCIN(res.data.datas.CIN)
            setInteret(res.data.datas.interet)
            setType(res.data.datas.type)
        }
        affiche();
    },[]);

    useEffect(()=>{
            const lang = localStorage.getItem('lang');
            if(lang === "ar") {
                setContente(Translate.العربية)
    
            }else{
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
                        localStorage.setItem('lang','fr')
                        window.location.reload(true)
                    }
                },
                {
                    label: 'العربية',
                    command: () => {
                        localStorage.setItem('lang','ar')
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
                        <Upload person={'employe'}/>
                    </div>
                        <p className='profile-info-img'>{contente.partone}
                            <p className='profile-info-text'>{contente.parttwo}</p>
                        </p>
                    <Menubar  style={{ padding: "0", margin: "0" }} model={items} />
                        
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
                        <p>{contente.profile_info}</p>
                    </div>
                </div>

                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>{contente.CIN}</p>
                        <p >{CIN}</p>
                    </div>
                </div>

                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>{contente.interet}</p>
                        <p >{interet}</p>
                    </div>
                </div>

                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>{contente.classe}</p>
                        <p >{type}</p>
                    </div>
                </div>
            </div>
            <div className='profile-controle'>
                <div className='profile-header'>
                    <div className="profile-data">
                        <p>{}</p>
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

export default EmployeIndex