import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Snackbar } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const IndexParametre = ({ person }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const [email, setEmail] = useState('');
  const [fullname, setFullName] = useState('');

  const editProfile = async (e) => {
    if (person === "employe") {
      e.preventDefault();
      const accesToken = localStorage.getItem('accessToken_emp');
      if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
        navigate('/employe/login')
      }
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('email', email);
      await axios({
        method: "post",
        data: formData,
        url: "http://localhost:8000/api/employe/editProfile",
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      }).then((res) => {
        console.log(res.data.message);
        setOpen(true)
      }).catch((err) => {
        console.log(err.message);
        setOpen(true)

      });
    } else if (person === "superadmin") {
      e.preventDefault();
      const accesToken = localStorage.getItem('accessToken');
      if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
        navigate('/superadmin/login')
      }
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('email', email);
      await axios({
        method: "post",
        data: formData,
        url: "http://localhost:8000/api/superadmin/editProfile",
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      }).then((res) => {
        console.log(res.data.message);
        setOpen(true)
      }).catch((err) => {
        console.log(err.message);
      });
    }
    else if (person === "director") {
      e.preventDefault();
      const accesToken = localStorage.getItem('accessToken_dir');
      if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
        navigate('/director/login')
      }
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('email', email);
      await axios({
        method: "post",
        data: formData,
        url: "http://localhost:8000/api/director/editProfile",
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      }).then((res) => {
        console.log(res.data.message);
        setOpen(true)
      }).catch((err) => {
        console.log(err.message);
      });
    }
    else if (person === "president") {
      e.preventDefault();
      const accesToken = localStorage.getItem('accessToken_pre');
      if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
        navigate('/president/login')
      }
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('email', email);
      await axios({
        method: "post",
        data: formData,
        url: "http://localhost:8000/api/president/editProfile",
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      }).then((res) => {
        console.log(res.data.message);
        setOpen(true)
      }).catch((err) => {
        console.log(err.message);
      });
    }
    else if (person === "administrative") {
      e.preventDefault();
      const accesToken = localStorage.getItem('accessToken_administrative');
      if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
        navigate('/administrative/login')
      }
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('email', email);
      await axios({
        method: "post",
        data: formData,
        url: "http://localhost:8000/api/admin/administrative/editProfile",
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      }).then((res) => {
        console.log(res.data.message);
        setOpen(true)
      }).catch((err) => {
        console.log(err.message);
      });
    }
    else if (person === "finenciere") {
      e.preventDefault();
      const accesToken = localStorage.getItem('accessToken_finenciere');
      if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
        navigate('/finenciere/login')
      }
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('email', email);
      await axios({
        method: "post",
        data: formData,
        url: "http://localhost:8000/api/admin/finenciere/editProfile",
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      }).then((res) => {
        console.log(res.data.message);
        setOpen(true)
      }).catch((err) => {
        console.log(err.message);
      });
    }
    else if (person === "technique") {
      e.preventDefault();
      const accesToken = localStorage.getItem('accessToken_technique');
      if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
        navigate('/technique/login')
      }
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('email', email);
      await axios({
        method: "post",
        data: formData,
        url: "http://localhost:8000/api/admin/technique/editProfile",
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      }).then((res) => {
        console.log(res.data.message);
        setOpen(true)
      }).catch((err) => {
        console.log(err.message);
      });
    }
    else {
      console.log("no guard");
    }
  }
  useEffect(() => {
    if (person === "employe") {
      const Affichage = async () => {
        const accesToken = localStorage.getItem('accessToken_emp');
        if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
          navigate('/employe/login')
        }
        axios({
          method: "get",
          url: "http://localhost:8000/api/employe",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        }).then((res) => {
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
        })
      }
      Affichage();
    } else if (person === "superadmin") {
      const Affichage = async () => {
        const accesToken = localStorage.getItem('accessToken');
        if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
          navigate('/superadmin/login')
        }
        axios({
          method: "get",
          url: "http://localhost:8000/api/superadmin",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        }).then((res) => {
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
        })
      }
      Affichage();
    }
    else if (person === "director") {
      const Affichage = async () => {
        const accesToken = localStorage.getItem('accessToken_dir');
        if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
          navigate('/director/login')
        }
        axios({
          method: "get",
          url: "http://localhost:8000/api/director",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        }).then((res) => {
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
        })
      }
      Affichage();
    }
    else if (person === "president") {
      const Affichage = async () => {
        const accesToken = localStorage.getItem('accessToken_pre');
        if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
          navigate('/president/login')
        }
        axios({
          method: "get",
          url: "http://localhost:8000/api/president",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        }).then((res) => {
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
        })
      }
      Affichage();
    }
    else if (person === "administrative") {
      const Affichage = async () => {
        const accesToken = localStorage.getItem('accessToken_administrative');
        if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
          navigate('/administrative/login')
        }
        axios({
          method: "get",
          url: "http://localhost:8000/api/admin/administrative",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        }).then((res) => {
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
        })
      }
      Affichage();
    }
    else if (person === "finenciere") {
      const Affichage = async () => {
        const accesToken = localStorage.getItem('accessToken_finenciere');
        if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
          navigate('/finenciere/login')
        }
        axios({
          method: "get",
          url: "http://localhost:8000/api/admin/finenciere",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        }).then((res) => {
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
        })
      }
      Affichage();
    }
    else if (person === "technique") {
      const Affichage = async () => {
        const accesToken = localStorage.getItem('accessToken_technique');
        if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
          navigate('/technique/login')
        }
        axios({
          method: "get",
          url: "http://localhost:8000/api/admin/technique",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        }).then((res) => {
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
        })
      }
      Affichage();
    }
    else {
      console.log("no guard");
    }
  }, [])

  return (
    <div className='profile_container'>
      <h1>Modifier les informations de profile</h1>
      <form onSubmit={editProfile} className='profile_container'>
        <div className='profile_container'>

          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField fullWidth id="outlined-basic" name='fullname' placeholder={fullname} required onChange={(e) => {
              setFullName(e.target.value)

            }} label="Nom complete" variant="outlined" />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField fullWidth id="outlined-basic" type='email' placeholder={email} required name='email' onChange={(e) => { setEmail(e.target.value) }} label="Adresse email" variant="outlined" />
          </Box>
        </div>
        <Button type='submit' variant="contained" color="primary" size="large" >Modifier</Button>
      </form>
      <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Modification réalisée avec succès!
        </Alert>
      </Snackbar>
    </div>
  )
}

export default IndexParametre
