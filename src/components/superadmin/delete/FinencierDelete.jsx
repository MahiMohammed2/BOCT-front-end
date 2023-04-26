import axios from 'axios';
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const FinencierDelete = ({id}) => {
    const navigate = useNavigate();
    const e = id
    const deleteAdmin = async() => {
        const accesToken = localStorage.getItem("accessToken");
      console.log(accesToken);
      if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
          navigate('/superadmin/login')
      }
      await axios({
        method: "delete",
        url: "http://localhost:8000/api/superadmin/deleteFinancieres/" + e,
        headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
        }
      })
      }
      const alertMessage = ()=>{
        const comfirmer = "baghi tmsah ?"
        if ( window.confirm(comfirmer) === true) {
          return deleteAdmin();
        }
      }
      return (
        <div>
            <RiDeleteBin7Fill className='edit-icon' onClick={()=> alertMessage()}>Delete</RiDeleteBin7Fill>
        </div>
      )
}

export default FinencierDelete