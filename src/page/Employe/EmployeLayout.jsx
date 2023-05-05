import React from 'react'
import { Outlet } from 'react-router-dom';
import DrawerEmp from '../../components/Itemes/employe/DrawerEmp';
import logo from '../../static/images/logoMail.svg';
import { Box } from '@mui/material';

const EmployeLayout = () => {
    return (

        <div className='container'>
            <nav className='navbar'>
                <div >
                    <DrawerEmp />
                </div>
                <Box
                sx={{
                    display: 'flex',
                    alignItems:"flex-end",
                    gap:1,
                    marginRight:3
                }}
                >
                    <img src={logo} style={{width:125}} alt="BOCT"/>
                </Box>

            </nav>

            <div className='grid-container'>
                <Outlet />
            </div>

        </div>
    )
}

export default EmployeLayout