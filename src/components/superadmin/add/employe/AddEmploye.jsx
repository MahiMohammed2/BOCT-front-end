import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Translate from '../../../../static/DataLanguage.json';
import { useEffect } from 'react';
const AddEmploye = () => {
    const [fullname, setFullName] = useState("");
    const [CIN, setCIN] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("Administrative");
    const [interet, setInteret] = useState("L'intérêt des Ressources Humaines");
    const navigate = useNavigate();
    const [contente, setContente] = useState("");

    const addEmploye = async (e) => {

        e.preventDefault();
        const formData = new FormData();

        formData.append('fullname', fullname);
        formData.append('CIN', CIN);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('type', type)
        formData.append('interet', interet);

        const accesToken = localStorage.getItem("accessToken");
        console.log(accesToken);
        if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
            navigate('/superadmin/login')
        }
        await axios({
            method: "post",
            url: "http://localhost:8000/api/superadmin/addEmploye",
            data: formData,
            headers: {
                "Accept": "application/json",
                "Authorization": 'Bearer ' + accesToken
            }
        })
        navigate("/superadmin/employes")

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
        <div className=''>
            <form onSubmit={addEmploye}>
                <br />
                <div className="form form-container">
                    <div className='form-controle'>
                        <input type='text' name='fullname' value={fullname} onChange={(e) => { setFullName(e.target.value) }} placeholder={contente.entrer_nom_complete} />
                        <span className='info-text'>{contente.entrer_nom_employe} *</span>
                    </div>

                    <div className="form-controle">
                        <input type='text' name='CIN' value={CIN} onChange={(e) => { setCIN(e.target.value) }} placeholder={contente.entrer_CIN} />
                        <span className='info-text'>{contente.entrer_CIN_info} *</span>
                    </div>

                    <div className="form-controle">
                        <input type='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder={contente.entrer_email} />
                        <span className='info-text'>{contente.entrer_email_employe}*</span>
                    </div>

                    <div className="form-controle">
                        <input type='password' name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder={contente.entrer_password} />
                        <span className='info-text'>{contente.entrer_password_employe}*</span>
                    </div>
                    <div className="form-controle">
                        <select className='selector' name='type' value={type} onChange={(e) => { setType(e.target.value) }}>
                            <option value="Administrative">{contente.administrative}</option>
                            <option value="Financiere">{contente.financiere}</option>
                            <option value="Technique">{contente.technique}</option>
                        </select>
                        <span className='info-text'>{contente.entrer_type_class} *</span>
                    </div>
                    <div className="form-controle">
                        <select className='selector' name='interet' value={interet} onChange={(e) => { setInteret(e.target.value) }}>
                            <option value="L'intérêt des Ressources Humaines">{contente.interet_r_h}</option>
                            <option value="L'intérêt des Affaires Juridiques, de l'Etat Civil, de l'Authentification des Documents et de la Police Administrative">{contente.interet_juridique}</option>
                            <option value="L'intérêt des Affaires Economiques, Sociales, Culturelles et Sportives">{contente.interet_economique}</option>
                            <option value="L'intérêt des travaux, de la maintenance, de l'éclairage public, des équipements, des machines, des études et de la planification">{contente.interet_travaux}</option>
                            <option value="L'intérêt de la construction et de la propriét">{contente.interet_construction}</option>
                            <option value="L'intérêt des espaces verts et la préservation de l'environnement et la préservation de la santé">{contente.interet_espace}</option>
                            <option value="L'intérêt du budget et de la comptabilité et des marchés">{contente.interet_budget}</option>
                            <option value="L'intérêt des ressources financières">{contente.interet_r_f}</option>
                        </select>
                        <span className='info-text'>{contente.entrer_interet_employe} *</span>
                    </div>
                    <div className="form-controle">
                        <div className='btn-controle'>
                            <button className='btn btn-primary'>{contente.ajouter_cet_employe}</button>
                        </div>
                    </div>
                    <span>{contente.required_message}</span>
                </div>

            </form>
        </div>
    )
}

export default AddEmploye