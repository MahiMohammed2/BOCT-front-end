import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Translate from '../../../static/DataLanguage.json';

const AdministrativeDelete = ({id}) => {
const navigate = useNavigate();
const e = id
const [contente, setContente] = useState("");

const deleteAdmin = async() => {  
    const accesToken = localStorage.getItem("accessToken");
  if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
      navigate('/superadmin/login')
  }
  await axios({
    method: "delete",
    url: "http://localhost:8000/api/superadmin/deleteAdministrative/" + e,
    headers: {
        "Accept": "application/json",
        "Authorization": 'Bearer ' + accesToken
    }
  })
  }
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang === "ar") {
      setContente(Translate.العربية)

    } else {
      setContente(Translate.Français)
    }
  })
  const alertMessage = ()=>{
    const comfirmer = contente.delete_info
    if ( window.confirm(comfirmer) === true) {
      return deleteAdmin();
    }
  }
  return (
    <div>
        <RiDeleteBin7Fill className='edit-icon' onClick={()=> alertMessage()}/>
    </div>
  )
}

export default AdministrativeDelete