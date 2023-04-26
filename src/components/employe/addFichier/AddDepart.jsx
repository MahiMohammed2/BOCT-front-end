
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Translate from '../../../static/DataLanguage.json';

const AddDepart = () => {
    const [dateFichier, setDateFichier] = useState('');
    const [expediteur, setExpediteur] = useState('');
    const [objectif, setObjectif] = useState('');
    const [interet, setInteret] = useState('');
    const [employere, setEmployere] = useState('');
    const [typeDeClasse, setTypeDeClasse] = useState('');
    const [typeDeCourier, setTypeDeCourier] = useState('');
    const [dateDeCommission, setDateDeCommission] = useState('');
    const [dateSpecifiee, setDateSpecifiee] = useState('');
    const navigate = useNavigate();
    const date = new Date().toISOString().slice(0, 10);
    const [contente, setContente] = useState("");

    useEffect(() => {
        const accesToken = localStorage.getItem("accessToken_emp");
        if (accesToken === 'undefined' || accesToken === null || accesToken === 0) {
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

            setEmployere(res.data.datas.fullname)
            setInteret(res.data.datas.interet)
            setDateFichier(date)
            setTypeDeClasse(res.data.datas.type);

        }
        affiche();
    }, []);

    const addDepart = async (e) => {

        e.preventDefault();
        const formData = new FormData();

        formData.append('expediteur', expediteur);
        formData.append('objectif', objectif);
        formData.append('interet', interet);
        formData.append('date_de_fichier', dateFichier)
        formData.append('employere', employere);
        formData.append('type_de_class', typeDeClasse);
        formData.append('type_de_courier', typeDeCourier);
        formData.append('date_de_commission', dateDeCommission);
        formData.append('date_specifiee', dateSpecifiee);

        const accesToken = localStorage.getItem("accessToken_emp");

        if (accesToken === "undefined" || accesToken === 'null') {
            navigate('/employe/login')
        }

        await axios({
            method: "post",
            url: "http://localhost:8000/api/employe/addDepart",
            data: formData,
            headers: {
                "Accept": "application/json",
                "Authorization": 'Bearer ' + accesToken
            }
        }).then(({ data }) => {
            console.log(data.message);
            navigate("/employe/depart")
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
    return (
        <div>
            <form onSubmit={addDepart}>
                <div className='form form-container'>
                    <div className="full-childe">
                        <div className='form-controle'>
                            <input type="text" name="expediteur" value={expediteur} onChange={(e) => setExpediteur(e.target.value)} placeholder={contente.entrer_expediteur} />
                        </div>
                        <div className='form-controle'>
                            <input type="text" name="type_de_courier" value={typeDeCourier} onChange={(e) => setTypeDeCourier(e.target.value)} placeholder={contente.entrer_type_courier} />
                        </div>
                        <div className="form-controle childe-6">
                            <input type="date" name="date_de_commission" value={dateDeCommission} onChange={(e) => { setDateDeCommission(e.target.value) }} />
                            <span className='info-text'>{contente.date_commission}</span>
                        </div>
                        <div className="form-controle">
                            <input type="date" name="date_specifiee" value={dateSpecifiee} onChange={(e) => setDateSpecifiee(e.target.value)} />
                            <span className='info-text'>{contente.date_specifie}</span>
                        </div>
                        <div className="object-controle">
                            <textarea name="objectif" className='object' value={objectif} onChange={(e) => setObjectif(e.target.value)} placeholder={contente.entrer_objectife}></textarea>
                        </div>
                        <div className="form-controle">
                            <button className='btn'>{contente.ajouter_fichier}</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddDepart