import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Translate from '../../../static/DataLanguage.json';
const AddSupDirector = () => {
    const [fullName, setFullName] = useState('');
    const [CIN, setCIN] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [contente, setContente] = useState("");

    useEffect(() => {
        const accesToken = localStorage.getItem("accessToken_dir");
        if (accesToken === undefined || accesToken === null || accesToken === 0) {
            navigate('/director/login')
        }
    }, [])
    const addSup = async (e) => {
        const accesToken = localStorage.getItem("accessToken_dir");
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', fullName);
        formData.append('CIN', CIN);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);

        await axios({
            method: 'post',
            url: 'http://localhost:8000/api/director/addSuperAdmin',
            data: formData,
            headers: {
                "Accept": "application/json",
                "Authorization": 'Bearer ' + accesToken
            },
        }).then(({ data }) => {
            console.log(data.message);
        })
        navigate('/director/superadmin');
    }
    useEffect(() => {
        const lang = localStorage.getItem('lang');
        if (lang === "ar") {
            setContente(Translate.العربية)

        } else {
            setContente(Translate.Français)
        }
    })
    return (
        <div>
            <form onSubmit={addSup}>
                <div className='form form-container'>
                    <div className="full-childe">
                        <div className='form-controle'>
                            <input type="text" name="expediteur" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder={contente.entrer_nom_complete} />
                            <span className='info-text'>{contente.entrer_nom_complete_admin} *</span>
                        </div>

                        <div className='form-controle'>
                            <input type="text" name="destinataire" value={CIN} onChange={(e) => setCIN(e.target.value)} placeholder={contente.entrer_CIN} />
                            <span className='info-text'>{contente.entrer_CIN_admin} *</span>
                        </div>

                        <div className='form-controle'>
                            <input type="text" name="destinataire" value={username} onChange={(e) => setUsername(e.target.value)} placeholder={contente.entrer_username} />
                            <span className='info-text'>{contente.entrer_username_admin} *</span>
                        </div>

                        <div className='form-controle'>
                            <input type="text" name="destinataire" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={contente.entrer_email} />
                            <span className='info-text'>{contente.entrer_email_admin} *</span>
                        </div>

                        <div className='form-controle'>
                            <input type="password" name="destinataire" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={contente.entrer_password} />
                            <span className='info-text'>{contente.entrer_password_admin} *</span>
                        </div>
                        <div className="form-controle">
                            <span>{contente.required_message}</span>
                        </div>
                        <div className="form-controle">
                            <div className='btn-controle'>
                                <button className='btn btn-primary'>{contente.ajouter_cet_admin}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddSupDirector