import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { Box, Button, Collapse, IconButton, Modal, Snackbar, TextField } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../../export/styleFile.css';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import html2pdf from 'html2pdf.js/dist/html2pdf.min';
import { useNavigate } from 'react-router-dom';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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

const DepExport = ({ row: rowProp }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("")
    const exprt = () => {
        var element = document.getElementById('file');
        var opt = {
            margin: 1,
            filename: 'fichier(' + rowProp.id + ').pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
        html2pdf(element, opt);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const deleteArriver = async () => {
        const accesToken = localStorage.getItem("accessToken_emp");
        await axios({
            method: "delete",
            url: "http://localhost:8000/api/employe/deleteDepart/" + rowProp.id,
            headers: {
                "Accept": "application/json",
                "Authorization": 'Bearer ' + accesToken
            }
        }).then((res) => {
            setMessage(res.data.message);
            setOpen(true)
        })
    }
    return (
        <div>
            <div className='export'>
                <Box
                    sx={{
                        maxWidth: '100%',
                    }}
                >
                    <Button size='small' onClick={exprt}><DownloadIcon /></Button>
                    <Button color='error' size='small' onClick={deleteArriver}><DeleteIcon /></Button>
                </Box>
                <div className='file-container'>

                    <div className='file' id='file'>
                        <div className='exp_header'>
                            <img className='exp_img' src="/royal-maroc.png" alt="img" />
                            <p className='title'>Commun taourirt</p>
                            <p>{rowProp.id}</p>
                        </div>
                        <div className='exp_title'>
                            <span >{rowProp.interet}</span>
                        </div>
                        <div className='exp_objectife'>
                            <div>
                                <h5>Sujet</h5>
                            </div>
                            <span >{rowProp.objectif}</span>
                        </div>
                        <div className='exp_footer'>
                            <span>Fichier de depart</span>
                            <span>Date de fichier : {rowProp.date_de_fichier}</span>
                        </div>
                        <div className='exp_signiature'>
                            <span>Signature de president</span>
                        </div>
                    </div>

                </div>
            </div>
            <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}

const AddArriver = () => {

    const [message, setMessage] = useState("")
    const [dateFichier, setDateFichier] = useState('');
    const [expediteur, setExpediteur] = useState('');
    const [objectif, setObjectif] = useState('');
    const [interet, setInteret] = useState('');
    const [employere, setEmployere] = useState('');
    const [typeDeClasse, setTypeDeClasse] = useState('');
    const [typeDeCourier, setTypeDeCourier] = useState('');
    const [dateDeCommission, setDateDeCommission] = useState('');
    const [dateSpecifiee, setDateSpecifiee] = useState('');
    const date = new Date().toISOString().slice(0, 10);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const accesToken = localStorage.getItem("accessToken_emp");
        const affiche = async () => {
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/employe/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })

            setEmployere(res.data.datas.fullname)
            setInteret(res.data.datas.interet)
            setDateFichier(date)
            setTypeDeClasse(res.data.datas.type);

        }
        affiche();
    }, []);
    const addDepart = async (e) => {
        const accesToken = localStorage.getItem("accessToken_emp");

        e.preventDefault();
        const formData = new FormData();

        formData.append('expediteur', expediteur);
        formData.append('objectif', objectif);
        formData.append('interet', interet);
        formData.append('date_de_fichier', dateFichier)
        formData.append('employere', employere);
        formData.append('type_de_class', typeDeClasse);
        formData.append('type_de_courier', typeDeCourier);
        formData.append('date_de_commission', dateDeCommission);
        formData.append('date_specifiee', dateSpecifiee);

        await axios({
            method: "post",
            url: "http://localhost:8000/api/employe/addDepart",
            data: formData,
            headers: {
                "Accept": "application/json",
                "Authorization": 'Bearer ' + accesToken
            }
        }).then(({ data }) => {
            console.log(data.message);
            setMessage(data.message);
            setOpen(true)
        })

    }
console.log(dateDeCommission);
console.log(dateSpecifiee);
    return (
        <div>
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
            <form onSubmit={addDepart}>
                <Box
                    sx={{
                        width: "100%",
                        minWidth: '100%',
                        marginBottom: 1,
                    }}

                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker onChange={(e)=>setDateDeCommission(e.$y+"-"+e.$M+"-"+e.$D)}  required sx={{ width: "100%", }} label="Date de commision" />
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        minWidth: '100%',
                        marginBottom: 2,
                    }}

                >
                    <LocalizationProvider required  dateAdapter={AdapterDayjs}>
                        <DemoContainer required components={['DatePicker']}>
                            <DatePicker onChange={(e)=>setDateSpecifiee(e.$y+"-"+e.$M+"-"+e.$D)} required sx={{ width: "100%", }} label="Date specifiée" />
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
                <Box
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                    }}
                >

                    <Box
                        sx={{
                            minWidth: '100%',
                            marginBottom: 2,
                        }}
                    >
                        <TextField fullWidth id="outlined-basic" name='expediteur' placeholder="Entrer l'expediteur" value={expediteur} onChange={(e) => setExpediteur(e.target.value)} required label="Expediteur" variant="outlined" />
                    </Box>
                    <Box
                        sx={{
                            minWidth: '100%',
                            marginBottom: 2,

                        }}
                    >
                        <TextField fullWidth id="outlined-basic" name='type_de_courier' value={typeDeCourier} onChange={(e) => setTypeDeCourier(e.target.value)} placeholder="Entrer le type de courier" required label="Type de courirer" variant="outlined" />
                    </Box>


                    <Box
                        sx={{
                            minWidth: '100%',
                            marginBottom: 2,
                        }}
                    >
                        <TextField fullWidth multiline rows={10} id="outlined-multiline-static" name="objectif"
                            value={objectif} onChange={(e) => setObjectif(e.target.value)} placeholder="entrer l'objectife"
                            required label="Objectife" variant="outlined" />
                    </Box>

                    <Box
                        sx={{
                            minWidth: '100%',
                            marginBottom: 2,
                        }}
                    >
                        <Button type='submit' variant="contained" color="primary" size="large" >Ajouter le fichier</Button>
                    </Box>
                </Box>

            </form>
        </div>

    )
}


export default function DepartCompEmp() {
    const [Depart, setDepart] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const affiche = async () => {
            const accesToken = localStorage.getItem("accessToken_emp");
            if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
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
                setDepart(res.data.Depart)
                setLoading(false)
            })
        }
        affiche();
    }, []);

    const columns = [
        { field: 'id', headerName: 'Numero', type: 'number', width: 100 },
        { field: 'objectif', headerName: 'Objectif', width: 400 },
        { field: 'expediteur', headerName: 'Expediteur', width: 180 },
        { field: 'type_de_courier', headerName: 'Type de courier', width: 180 },
        { field: 'interet', headerName: 'Interet', width: 300 },
        { field: 'type_de_class', headerName: 'Division', width: 210 },
        { field: 'employere', headerName: 'employere', width: 210 },
        { field: 'date_de_fichier', headerName: 'Date de fichier', width: 200 },
        { field: 'date_de_commission', headerName: 'Date de commission', width: 200 },
        { field: 'date_specifiee', headerName: 'Date specifiee', width: 200 },
    ];
    const getDetailPanelContent = React.useCallback(
        ({ row }) => <DepExport row={row} />,
        [],
    );
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const getDetailPanelHeight = React.useCallback(() => 600, []);

    return (
        <div className='table_container'>
            <div style={{ maxHeight: 850, height: 850, width: '100%' }}>
                <Button onClick={handleOpen}>Ajouter</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <AddArriver />
                    </Box>
                </Modal>
                <DataGridPro
                    rows={Depart} columns={columns} loading={loading}
                    getDetailPanelHeight={getDetailPanelHeight}
                    getDetailPanelContent={getDetailPanelContent}
                />
            </div>


        </div>
    )
}