import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { DataGridPro } from '@mui/x-data-grid-pro';
import MuiAlert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Collapse, IconButton, Modal, Paper, Snackbar, TextField, Typography } from '@mui/material';
import '../../export/styleFile.css';
import img from '../../../static/images/defaultImage.png';
import { useNavigate } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '1px solid #202020',
  boxShadow: 20,
  p: 4,
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const EditAdministrative = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("")
  const [fullname, setFullName] = useState("");
  const [CIN, setCIN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const editAdmin = async (e) => {

    e.preventDefault();
    const formData = new FormData();

    formData.append('fullname', fullname);
    formData.append('CIN', CIN);
    formData.append('email', email);
    formData.append('password', password);
    const accesToken = localStorage.getItem("accessToken");
    await axios({
      method: "post",
      url: "http://localhost:8000/api/superadmin/editTechniques/" + id,
      data: formData,
      headers: {
        "Accept": "application/json",
        "Authorization": 'Bearer ' + accesToken
      }
    }).then((res) => {
      setOpen(true)
      setMessage(res.data.message)
    })

  }
  return (
    <Box
      sx={{
        width: 800,
        maxWidth: '100%',
      }}>
      <Box
        sx={{
          minWidth: '100%',
          marginBottom: 2,
        }}
      >
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        </Collapse>
      </Box>
      <Typography variant="body1" color="text.secondary">Modifier l'admin numero : {id}</Typography>
      <form onSubmit={editAdmin}>

        <Box
          sx={{
            minWidth: '100%',
            marginBottom: 2,
          }}
        >
          <TextField fullWidth id="outlined-basic" label="CIN" value={CIN} onChange={(e) => { setCIN(e.target.value) }} placeholder='Entrer le CIN' required variant="outlined" />
        </Box>
        <Box
          sx={{
            minWidth: '100%',
            marginBottom: 2,
          }}
        >
          <TextField fullWidth id="outlined-basic" label="Nom et Prénom" value={fullname} onChange={(e) => { setFullName(e.target.value) }} placeholder='Entrer le Nom et le Prénom' required variant="outlined" />
        </Box>
        <Box
          sx={{
            minWidth: '100%',
            marginBottom: 2,
          }}
        >
          <TextField fullWidth id="outlined-basic" label="Adresse email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="entrer l'adresse email" required variant="outlined" />
        </Box>
        <Box
          sx={{
            minWidth: '100%',
            marginBottom: 2,
          }}
        >
          <TextField fullWidth type='password' id="outlined-basic" label="Mot de pass" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="entrer le mot de pass" required variant="outlined" />
        </Box>
        <Box
          sx={{
            minWidth: '100%',
            marginBottom: 2,
          }}
        >
          <Button type='submit' variant="contained" color="primary" size="large" >Modifier</Button>
        </Box>
      </form>
    </Box>
  )
}
const AddAdmin = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("")
  const [fullname, setFullName] = useState("");
  const [CIN, setCIN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const editEmploye = async (e) => {

    e.preventDefault();
    const formData = new FormData();

    formData.append('fullname', fullname);
    formData.append('CIN', CIN);
    formData.append('email', email);
    formData.append('password', password);

    const accesToken = localStorage.getItem("accessToken");
    await axios({
      method: "post",
      url: "http://localhost:8000/api/superadmin/addTechniques/",
      data: formData,
      headers: {
        "Accept": "application/json",
        "Authorization": 'Bearer ' + accesToken
      }
    }).then((res) => {
      setOpen(true)
      setMessage(res.data.message)
    })

  }
  return (
    <Box
      sx={{
        width: 800,
        maxWidth: '100%',
      }}>
      <Box
        sx={{
          minWidth: '100%',
          marginBottom: 2,
        }}
      >
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        </Collapse>
      </Box>
      <form onSubmit={editEmploye}>

        <Box
          sx={{
            minWidth: '100%',
            marginBottom: 2,
          }}
        >
          <TextField fullWidth id="outlined-basic" label="CIN" value={CIN} onChange={(e) => { setCIN(e.target.value) }} placeholder='Entrer le CIN' required variant="outlined" />
        </Box>
        <Box
          sx={{
            minWidth: '100%',
            marginBottom: 2,
          }}
        >
          <TextField fullWidth id="outlined-basic" label="Nom et Prénom" value={fullname} onChange={(e) => { setFullName(e.target.value) }} placeholder='Entrer le Nom et le Prénom' required variant="outlined" />
        </Box>
        <Box
          sx={{
            minWidth: '100%',
            marginBottom: 2,
          }}
        >
          <TextField fullWidth id="outlined-basic" label="Adresse email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="entrer l'adresse email" required variant="outlined" />
        </Box>
        <Box
          sx={{
            minWidth: '100%',
            marginBottom: 2,
          }}
        >
          <TextField fullWidth type='password' id="outlined-basic" label="Mot de pass" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="entrer le mot de pass" required variant="outlined" />
        </Box>
        <Box
          sx={{
            minWidth: '100%',
            marginBottom: 2,
          }}
        >
          <Button type='submit' variant="contained" color="primary" size="large" >Ajouter</Button>
        </Box>
      </form>
    </Box>
  )
}
const Admin = ({ row: rowProp }) => {
  const [image, setImage] = useState('');
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const [message, setMessage] = useState('');
  const deleteAdmin = async () => {
    const accesToken = localStorage.getItem("accessToken");
    await axios({
      method: "delete",
      url: "http://localhost:8000/api/superadmin/deleteTechniques/" + rowProp.id,
      headers: {
        "Accept": "application/json",
        "Authorization": 'Bearer ' + accesToken
      }
    }).then((res) => {
      setOpenDelete(true)
      setMessage(res.data.message)
    })
  }
  useEffect(() => {
    if (rowProp.image_url === null) {
      setImage(img)
    } else {
      setImage(rowProp.image_url)
    }
  })
  return (
    <Paper sx={{ display: "flex", alignItems: "center", justifyContent: "center", mx: 'auto', width: '90%', p: 1 }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditAdministrative id={rowProp.id} />
        </Box>
      </Modal>
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
        <CardActions>
          <Button size="small" variant='outlined' onClick={handleOpen}>Modifier</Button>
          <Button size="small" variant='outlined' color='error' onClick={deleteAdmin}>Supprimer</Button>
        </CardActions>
      </Card>
      <Snackbar open={openDelete} autoHideDuration={2500} onClose={handleCloseDelete}>
        <Alert onClose={handleCloseDelete} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Paper>
  )
}

export default function TechniqueComp() {
  const [admin, setAdmin] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const affiche = async () => {
      const accesToken = localStorage.getItem("accessToken");
      if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
        navigate('/superadmin/login')
      }
      await axios({
        method: "get",
        url: "http://localhost:8000/api/superadmin/",
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='table_container'>
      <div style={{ maxHeight: 860,height:860, width: '100%' }}>
        <Button onClick={handleOpen}>Ajouter</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddAdmin />
          </Box>
        </Modal>
        <DataGridPro
          rows={admin} columns={columns} loading={loading}
          getDetailPanelHeight={getDetailPanelHeight}
          getDetailPanelContent={getDetailPanelContent}
        />
      </div>


    </div>
  )
}