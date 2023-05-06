import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Collapse, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const AdminiLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('')
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("")
    const loginSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
            error_list: [],
        }
        await axios({
            method: "post",
            data: {
                email: data.email,
                password: data.password,
            },
            url: "http://localhost:8000/api/admin/administrative/login",
            headers: {
                "Accept": "application/json",
            }
        }).then((res) => {
            localStorage.setItem("accessToken_administrative", res.data.token)
            navigate('/administrative/');
        }).catch(() => {
            setMessage("La connexion a échoué l'adrresse email ou le mot de passe est incorrect")
            setOpen(true)
        })
    }

    useEffect(() => {
        const login = async () => {
            const accesToken = localStorage.getItem("accessToken_administrative");
            if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
                navigate('/administrative/login')
            } else if (accesToken !== 'undefined') {
                navigate('/administrative/');
            }
        }
        login();
    }, [])
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box style={{
            display: 'flex',
            width: "100%",
            height: "90vh",
            margin: 0,
            padding: 0,
            alignItems: "center",
            justifyContent: "center",
        }}>

            <Container component="main" maxWidth="sm">

                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Collapse sx={{ width: '100%' }} in={open}>
                        <Alert
                            severity="error"
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
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" onSubmit={loginSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Adresse email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FormControl margin="normal" sx={{ width: '100%' }} variant="outlined">
                            <InputLabel required htmlFor="outlined-adornment-password" >Password</InputLabel>
                            <OutlinedInput

                                onChange={(e) => setPassword(e.target.value)}
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Se connecter
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}



export default AdminiLogin