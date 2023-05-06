import React from 'react'
import image from '../../static/images/404Page.svg'
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
const ErrPage = () => {

  return (
    <div className='errPage'>
      <Typography variant="h2">
        Oops!
      </Typography>
      <img src={image} style={{
        width: 400,
      }} />
      <Typography variant="h4">Page non trouvée</Typography>
      <Link  href="/employe">Aller à la page d'accueil</Link >
      
    </div>
  )
}

export default ErrPage;