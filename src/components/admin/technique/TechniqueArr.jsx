import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { DataGridPro } from '@mui/x-data-grid-pro';
import '../../export/styleFile.css';
import html2pdf from 'html2pdf.js/dist/html2pdf.min';
import { Box, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';
const ArrFile = ({ row: rowProp }) => {
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
    return (
        <div>
            <div className='export'>
                <Box
                    sx={{
                        maxWidth: '100%',
                    }}
                >
                    <Button size='small' onClick={exprt}><DownloadIcon /></Button>
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
                            <span>Fichier d'arriver</span>
                            <span>Date de fichier : {rowProp.date_de_fichier}</span>
                        </div>
                        <div className='exp_signiature'>
                            <span>Signature de president</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default function TechniqueArr() {
    const [Arriver, setArriver] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const affiche = async () => {
            const accesToken = localStorage.getItem("accessToken_technique");
            if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
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
                setArriver(res.data.arriver)
                setLoading(false)
            })
        }
        affiche();
    }, []);

    const columns = [
        { field: 'id', headerName: 'Numero', type: 'number', width: 100 },
        { field: 'objectif', headerName: 'Objectif', width: 400 },
        { field: 'expediteur', headerName: 'Expediteur', width: 180 },
        { field: 'destinataire', headerName: 'Destinataire', width: 180 },
        { field: 'interet', headerName: 'Interet', width: 300 },
        { field: 'type', headerName: 'Division', width: 210 },
        { field: 'employere', headerName: 'employere', width: 210 },
        { field: 'date_de_fichier', headerName: 'Date de fichier', width: 200 },
    ];
    const getDetailPanelContent = React.useCallback(
        ({ row }) => <ArrFile row={row} />,
        [],
    );
    const getDetailPanelHeight = React.useCallback(() => 600, []);

    return (
        <div className='table_container'>
            <div style={{ maxHeight: 900, height: 900, width: '100%' }}>
                <DataGridPro
                    rows={Arriver} columns={columns} loading={loading}
                    getDetailPanelHeight={getDetailPanelHeight}
                    getDetailPanelContent={getDetailPanelContent}
                />
            </div>


        </div>
    )
}
