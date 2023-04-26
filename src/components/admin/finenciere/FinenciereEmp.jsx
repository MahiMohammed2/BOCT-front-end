import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Translate from '../../../static/DataLanguage.json';

const FinenciereEmp = () => {
  const [Employe, setEmploye] = useState([]);
  const navigate = useNavigate();
  const [contente, setContente] = useState("");
  const [curentPage, setCurentPage] = useState(1);
  const recordsPages = 14;
  const lastIndex = curentPage * recordsPages;
  const firstIndex = lastIndex - recordsPages;
  const [filtring, setFiltring] = useState([]);
  const [hundler, setHundler] = useState(false);
  useEffect(() => {
    const affiche = async () => {
      const accesToken = localStorage.getItem("accessToken_finenciere");
      if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
        navigate('/finenciere/login')
      }
      const res = await axios({
        method: "get",
        url: "http://localhost:8000/api/admin/finenciere",
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      })
      setEmploye(res.data.employe)
    }
    affiche();
  }, []);
  const records = Employe.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(Employe.length / recordsPages)

  const prePage = () => {
    if (curentPage !== 1) {
      setCurentPage(curentPage - 1)
    }
  }
  const nextPage = () => {
    if (curentPage !== nPages) {
      setCurentPage(curentPage + 1)
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
  const Searching = (ev) => {
    const query = ev.target.value
    setFiltring(Employe.filter(item =>
      item.id === parseInt(query)
    ))
    if (query.length > 0) {
      setHundler(true)
    } else if (query === "") {
      setHundler(false)
    }
  }
  return (
    <div>
      <table className='table'>
        <tr>
          <th colSpan={20}>
            <div className="header_controle">
              <ul className='list_pagination'>
                <li>
                  <MdNavigateBefore className='icon_pagination' onClick={prePage} />
                </li>
                <li>
                  <MdNavigateNext className='icon_pagination' onClick={nextPage} />
                </li>
              </ul>
              <input className='input_search' type="text" placeholder={contente.searching} onChange={Searching} />
            </div>
          </th>
        </tr>
        <tr className='header'>
          <th colSpan={20}>{contente.employes}</th>
        </tr>
        <tr>
          <th className='space-header'></th>
          <th className='bordred-head'>{contente.id}</th>
          <th className='space-header'></th>
          <th className='bordred-head'>{contente.nom_complete}</th>
          <th className='space-header'></th>
          <th className='bordred-head'>{contente.email}</th>
          <th className='space-header'></th>
          <th className='bordred-head'>{contente.CIN}</th>
          <th className='space-header'></th>
          <th className='bordred-head'>{contente.interet}</th>
          <th className='space-header'></th>
        </tr>
        {
          hundler?
          filtring.map((e) => {
            return (
              <tr>
                <td></td>
                <td>{e.id}</td>
                <td></td>
                <td>{e.fullname}</td>
                <td></td>
                <td>{e.email}</td>
                <td></td>
                <td>{e.CIN}</td>
                <td></td>
                <td>{e.interet}</td>
                <td></td>
              </tr>
            )
          })
          :
          records.map((e) => {
            return (
              <tr>
                <td></td>
                <td>{e.id}</td>
                <td></td>
                <td>{e.fullname}</td>
                <td></td>
                <td>{e.email}</td>
                <td></td>
                <td>{e.CIN}</td>
                <td></td>
                <td>{e.interet}</td>
                <td></td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default FinenciereEmp