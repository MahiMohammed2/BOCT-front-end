import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import '../../export/styleFile.css';
import img from '../../../static/images/defaultImage.png';
import { useNavigate } from 'react-router-dom';

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
          <Typography variant="body2" color="text.secondary">
            L'interet : {rowProp.interet}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Devision : {rowProp.type}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  )
}

export default function AdminiDirector() {
  const [admin, setAdmin] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const affiche = async () => {
      const accesToken = localStorage.getItem("accessToken_dir");
      if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
        navigate('/director/login')
    }
      await axios({
        method: "get",
        url: "http://localhost:8000/api/director/",
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      }).then((res) => {
        setAdmin(res.data.Employe)
        setLoading(false)
      }) 
    }
    affiche();
  }, []);

  const columns = [
    { field: 'id', headerName: 'Numero', type: 'number', width: 100 },
    { field: 'fullname', headerName: 'Nom et Prénom', width: 300 },
    { field: 'CIN', headerName: 'CIN', width: 300 },
    { field: 'email', headerName: 'Adresse email', width: 300 },
    { field: 'interet', headerName: "L'interet", width: 400 },
    { field: 'type', headerName: 'Devision', width: 300 },
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