import React from 'react'
import './styleFile.css';
const ExportArriver = ({numero,date_fichier,objectif,expediteur,interet,type,employere}) => {
  return (
    <div>
      <h1>numero : {numero}</h1>
      <h1>date : {date_fichier}</h1>
      <h1>object : {objectif}</h1>
      <h1>expediteur : {expediteur}</h1>
      <h1>intaret : {interet}</h1>
      <h1>class : {type}</h1>
      <h1>employe : {employere}</h1>
      
    </div>
  )
}

export default ExportArriver
