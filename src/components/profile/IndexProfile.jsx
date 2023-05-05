import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Upload from '../../components/Itemes/Upload';
import { FormControl, Input, InputLabel } from '@mui/material';
const IndexProfile = ({ person }) => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [CIN, setCIN] = useState("");
  const [username, setUsername] = useState("");
  const [userHundel, setUserHundel] = useState(false);
  const [CINHundel, setCINHundel] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (person === "employe") {
      const affiche = async () => {
        const accesToken = localStorage.getItem('accessToken_emp');
        if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
          navigate('/employe/login')
        }
        await axios({
          method: "get",
          url: "http://localhost:8000/api/employe/",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        }).then((res) => {
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
          setCIN(res.data.datas.CIN)
          setCINHundel(true)
        })

      }
      affiche();
    } else if (person === "superadmin") {
      const affiche = async () => {
        const accesToken = localStorage.getItem('accessToken');
        if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
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
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
          setCIN(res.data.datas.CIN)
          setUsername(res.data.datas.username)
          setUserHundel(true)
          setCINHundel(true)
        })

      }
      affiche();
    }
    else if (person === "director") {
      const affiche = async () => {
        const accesToken = localStorage.getItem('accessToken_dir');
        if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
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
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
          setUsername(res.data.datas.username)
          setUserHundel(true)
        })

      }
      affiche();
    }
    else if (person === "president") {
      const affiche = async () => {
        const accesToken = localStorage.getItem('accessToken_pre');
        if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
          navigate('/president/login')
        }
        await axios({
          method: "get",
          url: "http://localhost:8000/api/president/",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        }).then((res) => {
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
          setUsername(res.data.datas.username)
          setUserHundel(true)
        })

      }
      affiche();
    }
    else if (person === "administrative") {
      const affiche = async () => {
        const accesToken = localStorage.getItem('accessToken_administrative');
        if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
          navigate('/administrative/login')
        }
        await axios({
          method: "get",
          url: "http://localhost:8000/api/admin/administrative",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        }).then((res) => {
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
          setCIN(res.data.datas.CIN)
          setCINHundel(true)
        })

      }
      affiche();
    }
    else if (person === "finenciere") {
      const affiche = async () => {
        const accesToken = localStorage.getItem('accessToken_finenciere');
        if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
          navigate('/finenciere/login')
        }
        await axios({
          method: "get",
          url: "http://localhost:8000/api/admin/finenciere",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        }).then((res) => {
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
          setCIN(res.data.datas.CIN)
          setCINHundel(true)
        })

      }
      affiche();
    }
    else if (person === "technique") {
      const affiche = async () => {
        const accesToken = localStorage.getItem('accessToken_technique');
        if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
          navigate('/technique/login')
        }
        await axios({
          method: "get",
          url: "http://localhost:8000/api/admin/technique",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        }).then((res) => {
          setFullName(res.data.datas.fullname)
          setEmail(res.data.datas.email)
          setCIN(res.data.datas.CIN)
          setCINHundel(true)
        })

      }
      affiche();
    }
  }, [])
  return (
    <div className='profile_container'>
      <div className='avatar_profile'>
        <Upload person={person} />
        <h3 className='fullname'>{fullname}</h3>
      </div>
      <div className='profile_container'>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <FormControl fullWidth disabled variant="standard">
            <InputLabel htmlFor="component-disabled">Adresse email</InputLabel>
            <Input id="component-disabled" defaultValue={email} value={email} />
          </FormControl>
        </Box>
        {
          CINHundel ?
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <FormControl fullWidth disabled variant="standard">
                <InputLabel htmlFor="component-disabled">CIN</InputLabel>
                <Input id="component-disabled" defaultValue={CIN} value={CIN} />
              </FormControl>
            </Box>
            : ""
        }
        {
          userHundel ?
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <FormControl fullWidth disabled variant="standard">
                <InputLabel htmlFor="component-disabled">Username</InputLabel>
                <Input id="component-disabled" defaultValue={username} value={username} />
              </FormControl>
            </Box>
            : ""
        }
      </div>
    </div >
  );
}
export default IndexProfile