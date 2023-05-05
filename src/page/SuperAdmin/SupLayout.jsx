import React from 'react'
import { Outlet } from 'react-router-dom'
import DrawerSup from '../../components/Itemes/superadmin/DrawerSup'
import logo from '../../static/images/logoMail.svg';
import { Box } from '@mui/material';

const SupLayout = () => {

    return (
        <div className='container'>
            <nav className='navbar'>
                <div >
                    <DrawerSup/>
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

export default SupLayout