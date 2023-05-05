import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import '../../export/styleFile.css';
import img from '../../../static/images/defaultImage.png';

const Admin = ({ row: rowProp }) => {
  const [image, setImage] = useState('');
  useEffect(() => {
    if (rowProp.image_url === null) {
      setImage(img)
    } else {
      setImage(rowProp.image_url)
    }
  })
  return (
    <Paper sx={{ display: "flex", alignItems: "center", justifyContent: "center", mx: 'auto', width: '90%', p: 1 }}>
      <Card sx={{ minWidth: 350, maxWidth: 400 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={image}
          title={rowProp.fullname}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {rowProp.fullname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ID : {rowProp.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            CIN : {rowProp.CIN}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Adresse email : {rowProp.email}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  )
}

export default function TechPresident() {
  const [admin, setAdmin] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const affiche = async () => {
      const accesToken = localStorage.getItem("accessToken_pre");
      await axios({
        method: "get",
        url: "http://localhost:8000/api/president/",
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      }).then((res) => {
        setAdmin(res.data.AdminTechniques)
        setLoading(false)
      }) 
    }
    affiche();
  }, []);

  const columns = [
    { field: 'id', headerName: 'Numero', type: 'number', width: 100 },
    { field: 'fullname', headerName: 'Nom et Prénom', width: 400 },
    { field: 'CIN', headerName: 'CIN', width: 400 },
    { field: 'email', headerName: 'Adresse email', width: 400 },
  ];
  const getDetailPanelContent = React.useCallback(
    ({ row }) => <Admin row={row} />,
    [],
  );
  const getDetailPanelHeight = React.useCallback(() => 500, []);
  return (
    <div className='table_container'>
      <div style={{ maxHeight: 860,height:860, width: '100%' }}>

        <DataGridPro
          rows={admin} columns={columns} loading={loading}
          getDetailPanelHeight={getDetailPanelHeight}
          getDetailPanelContent={getDetailPanelContent}
        />
      </div>


    </div>
  )
}