import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddEmploye = () => {
  const [fullname, setFullName] = useState("");
  const [CIN, setCIN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type,setType] = useState("Administrative");
  const [interet, setInteret] = useState("humain");
  const navigate = useNavigate();
  const [message,setMessage] = useState("");
  const [boolean, setBoolean] = useState(false)
  const addEmploye = async (e) => {
      
      e.preventDefault();
      const formData = new FormData();
      
      formData.append('fullname', fullname);
      formData.append('CIN', CIN);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('type',type)
      formData.append('interet',interet);
      
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
    }).then(({ data }) => {
        setMessage(data.message)
        setBoolean(true)
    })
    navigate("/superadmin/employes")
    
}
return (
      <div className=''>
          <form onSubmit={addEmploye}>
              <br />
              <div className="form form-container">
                  <h1>Ajouter un employe</h1>
                  <div className='message-controle'>
                  {
                      boolean ?
                      <div className='message'>{message}</div>
                      : ""
                  }
                  </div>
                  <div className='form-controle childe-1'>
                      <input type='text' name='fullname' value={fullname} onChange={(e) => { setFullName(e.target.value) }} placeholder='Entrer le nom complete' />
                      <span className='info-text'>Entrer le nom complete d'employe() *</span>
                  </div>
                  
                  <div className="form-controle childe-2">
                      <input type='text' name='CIN' value={CIN} onChange={(e) => { setCIN(e.target.value) }} placeholder='Entrer le CIN' />
                      <span className='info-text'>Entrer le CIN d'employe{'(minimume de charactere est 6)'} *</span>
                  </div>

                  <div className="form-controle childe-4">
                      <input type='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Entrer l'address email"/>
                      <span className='info-text'>Entrer l'address mail d'employe *</span>
                  </div>
                  
                  <div className="form-controle childe-5">
                      <input type='password' name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Entrer le mot de pass' />
                      <span className='info-text'>Entre le password d'employe {'(minimume de charactere est 8)'}*</span>
                  </div>
                  <div className="form-controle childe-6">
                      <select className='selector' name='type' value={type} onChange={(e)=>{setType(e.target.value)}}>
                          <option value="Administrative">Administrative</option>
                          <option value="Financiere">Financiere</option>
                          <option value="Technique">Technique</option>
                      </select>
                      <span className='info-text'>Entre le type classe *</span>
                  </div>
                  <div className="form-controle childe-7">
                      <select className='selector' name='interet' value={interet} onChange={(e)=>{setInteret(e.target.value)}}>
                          <option value="L'intérêt des Ressources Humaines">L'intérêt des Ressources Humaines</option>
                          <option value="L'intérêt des Affaires Juridiques, de l'Etat Civil, de l'Authentification des Documents et de la Police Administrative">L'intérêt des Affaires Juridiques, de l'Etat Civil, de l'Authentification des Documents et de la Police Administrative</option>
                          <option value="L'intérêt des Affaires Economiques, Sociales, Culturelles et Sportives">L'intérêt des Affaires Economiques, Sociales, Culturelles et Sportives</option>
                          <option value="L'intérêt des travaux, de la maintenance, de l'éclairage public, des équipements, des machines, des études et de la planification">L'intérêt des travaux, de la maintenance, de l'éclairage public, des équipements, des machines, des études et de la planification</option>
                          <option value="L'intérêt de la construction et de la propriét">L'intérêt de la construction et de la propriété</option>
                          <option value="L'intérêt des espaces verts et la préservation de l'environnement et la préservation de la santé">L'intérêt des espaces verts et la préservation de l'environnement et la préservation de la santé</option>
                          <option value="L'intérêt du budget et de la comptabilité et des marchés">L'intérêt du budget et de la comptabilité et des marchés</option>
                          <option value="L'intérêt des ressources financières">L'intérêt des ressources financières</option>
                      </select>
                      <span className='info-text'>Entre l'interet d'employe *</span>
                  </div>
                  <div className="form-controle">
                      <div className='btn-controle'>
                          <button className='btn btn-primary'>Ajouter cette employe</button>
                      </div>
                  </div>
                  <span>{'(*)'} : requis d'entre les informations ici</span>
              </div>

          </form>
      </div>
  )
}

export default AddEmploye