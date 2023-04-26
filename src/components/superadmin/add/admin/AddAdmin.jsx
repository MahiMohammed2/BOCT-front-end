import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Translate from '../../../../static/DataLanguage.json';

const AddAdmin = () => {
    const [fullname, setFullName] = useState("");
    const [CIN, setCIN] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type,setType] = useState("Administrative");
    const navigate = useNavigate();
    const [contente, setContente] = useState("");
    const addAdmin = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', fullname);
        formData.append('CIN', CIN);
        formData.append('email', email);
        formData.append('password', password);
        
        const accesToken = localStorage.getItem("accessToken");
        console.log(accesToken);
        if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
            navigate('/superadmin/login')
        }
        if(type === 'Administrative'){
            await axios({
                method: "post",
                url: "http://localhost:8000/api/superadmin/addAdministrative",
                data: formData,
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
        navigate("/superadmin/administrative")
            
        }else if(type === "Financiere"){
            await axios({
                method: "post",
                url: "http://localhost:8000/api/superadmin/addFinancieres",
                data: formData,
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
        navigate("/superadmin/finencier")
            
        }else if(type === "Technique"){
            await axios({
                method: "post",
                url: "http://localhost:8000/api/superadmin/addTechniques",
                data: formData,
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
        navigate("/superadmin/technique")
            
        }else{
            console.log('error condition');
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
    return (
        <div className=''>
            <form onSubmit={addAdmin}>
                <br />
                <div className="form form-container">
                    <div className='form-controle'>
                        <input type='text' name='fullname' value={fullname} onChange={(e) => { setFullName(e.target.value) }} placeholder={contente.entrer_nom_complete} />
                        <span className='info-text'>{contente.entrer_nom_complete_admin} *</span>
                    </div>
                    
                    <div className="form-controle ">
                        <input type='text' name='CIN' value={CIN} onChange={(e) => { setCIN(e.target.value) }} placeholder={contente.entrer_CIN} />
                        <span className='info-text'>{contente.entrer_CIN_admin} *</span>
                    </div>

                    <div className="form-controle ">
                        <input type='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder={contente.entrer_email}/>
                        <span className='info-text'>{contente.entrer_email_admin} *</span>
                    </div>
                    
                    <div className="form-controle ">
                        <input type='password' name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder={contente.entrer_password} />
                        <span className='info-text'>{contente.entrer_password_admin} *</span>
                    </div>
                    <div className="form-controle">
                        <select className='selector' value={type} onChange={(e)=>{setType(e.target.value)}}>
                            <option value="Administrative">{contente.administrative}</option>
                            <option value="Financiere">{contente.financiere}</option>
                            <option value="Technique">{contente.technique}</option>
                        </select>
                        <span className='info-text'>{contente.entrer_type_class_admin} *</span>
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

            </form>
        </div>
    )
}

export default AddAdmin