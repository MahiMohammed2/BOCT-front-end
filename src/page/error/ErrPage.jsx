import React, { useEffect, useState } from 'react'
import { BiError } from 'react-icons/bi';
import Translate from '../../static/DataLanguage.json';

const ErrPage = () => {
  const [contente, setContente] = useState("");
  useEffect(() => {
    const lang = localStorage.getItem('lang');
    if (lang === "ar") {
        setContente(Translate.العربية)

    } else {
        setContente(Translate.Français)
    }
},[])
  return (
    <div className='errPage'>
    <BiError className='errIcon' width={'200px'}/>
      <h1>{contente.error} 404</h1>
      <span className='errInfo'>{contente.page_not_found}</span>
      <a href="/">{contente.error_return}</a>
    </div>
  )
}

export default ErrPage;