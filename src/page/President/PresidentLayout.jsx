import React from 'react'
import { Outlet } from 'react-router-dom'
import DrawerPre from '../../components/Itemes/president/DrawerPre'
import logo from '../../static/images/logoMail.svg';
import { Box } from '@mui/material';

const PresidentLayout = () => {
    return (
        <div className='container'>
            <nav className='navbar'>
                <div >
                    <DrawerPre/>
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

export default PresidentLayout