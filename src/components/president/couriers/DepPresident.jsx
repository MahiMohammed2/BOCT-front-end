import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { DataGridPro } from '@mui/x-data-grid-pro';
import '../../export/styleFile.css';



const DepFile = ({ row: rowProp }) => {
    return (
        <div>
            <div className='export'>
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
        </div>
    )
}

export default function DepartPresident() {
    const [Depart, setDepart] = useState([]);
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
        ({ row }) => <DepFile row={row} />,
        [],
    );

    const getDetailPanelHeight = React.useCallback(() => 600, []);

    return (
        <div className='table_container'>
            <div style={{ maxHeight: 900, height: 900, width: '100%' }}>
                <DataGridPro
                    rows={Depart} columns={columns} loading={loading}
                    getDetailPanelHeight={getDetailPanelHeight}
                    getDetailPanelContent={getDetailPanelContent}
                />
            </div>


        </div>
    )
}