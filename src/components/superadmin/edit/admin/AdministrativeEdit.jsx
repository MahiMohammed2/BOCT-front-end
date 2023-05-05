import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Translate from '../../../../static/DataLanguage.json';

const AdministrativeEdit = () => {
  const { id } = useParams();
  const [fullname, setFullName] = useState("");
  const [CIN, setCIN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState("");
  const [boolean, setBoolean] = useState(false)
  const [contente, setContente] = useState("");

  const navigate = useNavigate();
  
  const editAdmin = async (e) => {

    e.preventDefault();
    const formData = new FormData();

    formData.append('fullname', fullname);
    formData.append('CIN', CIN);
    formData.append('email', email);
    formData.append('password', password);
    
    const accesToken = localStorage.getItem("accessToken");
    console.log(accesToken);
    if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
        navigate('/superadmin/login')
    }
    await axios({
      method: "post",
      url: "http://localhost:8000/api/superadmin/editAdministrative/" + id,
      data: formData,
      headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
      }
    })
    navigate('/superadmin/administrative')
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
    <div >
      <form onSubmit={editAdmin} className='form-edit'>
          <h1>{contente.edit_administrative} : {id}</h1>
          <div className="form form-container">
          <div className='form-controle '>
            <input type='text' name='fullname' value={fullname} onChange={(e) => { setFullName(e.target.value) }} placeholder={contente.entrer_nom_complete} />
            <span className='info-text'>{contente.entrer_nom_complete_admin} *</span>
          </div>

          <div className="form-controle">
            <input type='text' name='CIN' value={CIN} onChange={(e) => { setCIN(e.target.value) }} placeholder={contente.entrer_CIN} />
            <span className='info-text'>{contente.entrer_CIN_admin} *</span>
          </div>

          <div className="form-controle">
            <input type='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder={contente.entrer_email} />
            <span className='info-text'>{contente.entrer_email_admin} *</span>
          </div>

          <div className="form-controle">
            <input type='password' name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder={contente.entrer_password} />
            <span className='info-text'>{contente.entrer_password_admin} *</span>
          </div>
          <div className="form-controle">
            <div className='btn-controle'>
              <button className='btn btn-primary'>{contente.modifier}</button>
            </div>
          </div>
          <span>{contente.required_message}</span>
        </div>

      </form>
    </div>
  )
}

export default AdministrativeEdit