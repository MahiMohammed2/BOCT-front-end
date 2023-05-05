import html2pdf from 'html2pdf.js/dist/html2pdf.min';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './styleFile.css';
import Translate from '../../static/DataLanguage.json';
const ArrExport = ({id}) => {
  const [language, setLanguage] = useState("Français");
  const [contente, setContente] = useState("");
  const [fontArabic,setFontArabic] = useState(false);
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const affiche = async () => {
      await axios({
        method: "get",
        url: "http://localhost:8000/api/courier/arriver/" + 2,
        headers: {
          "Accept": "application/json",
        }
      }).then(res => {
        setArr(res.data.arriver)
      })
    }
    affiche();
  }, [])
  useEffect(() => {
    if (language === 'العربية') {
      setContente(Translate.العربية)
      setFontArabic(true)
    } else if (language === 'Français') {
      setContente(Translate.Français)
      setFontArabic(false)

    }
  })

  const returning = () => {
    navigate(-1)
  }

  const exprt = () => {
    var element = document.getElementById('file');
    var opt = {
      margin:       1,
      filename:     'fichier('+id+').pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
    html2pdf(element, opt);
}
return(
  <div>
          <div className='export'>
        <div className='exp_actions'>
        <button className='btn' onClick={exprt}>Imprimer</button>
          <select className='btn' value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option  value="Français">Français</option>
            <option value="العربية">العربية</option>
          </select>
          <button onClick={() => returning()} className='btn danger-btn'>Annule</button>

        </div>
        {
          arr.map((i) => {
            return (
              <div className='file-container'>
                
              <div className='file' id='file'>
                <div className='exp_header'>
                  <img className='exp_img' src="/royal-maroc.png" alt="img" />
                  <p className='title'>{contente.header}</p>
                  <p>{i.numero}</p>
                </div>
                <div className='exp_title'>
                  <span >{i.interet}</span>
                </div>
                <div className='exp_objectife'>
                  <div style={fontArabic ? { justifyContent: "flex-end"}:{}} className='flex-font-arabic'>
                  <h5>{contente.sujet}</h5>
                  </div>
                  <span >{i.objectif}</span>
                </div>
                <div className='exp_footer'>
                  <span>{contente.type_fichier.arriver}</span>
                  <span>{contente.date.date_de_fichier} : {i.date_de_fichier}</span>
                </div>
                <div className='exp_signiature'>
                  <span style={fontArabic ? { justifyContent: "flex-end"}:{}} className='flex-font-arabic'>{contente.signature}</span>
                </div>
              </div>
              
              </div>
            )
          })
        }
  
      </div>
  </div>
)
}

export default ArrExport
