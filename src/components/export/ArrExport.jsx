import jsPDF from 'jspdf';
import React from 'react'
import { useEffect } from 'react';

const ArrExport = ({numero}) => {
useEffect(()=>{
  const report = new jsPDF('portrait','pt','a4');
  report.html(document.querySelector('.file')).then(() => {
      report.save('report.pdf');
  });
},[])
  return (
    <div className='file'>
      <h1>le numero : {numero}</h1>
    </div>
  )
}

export default ArrExport
