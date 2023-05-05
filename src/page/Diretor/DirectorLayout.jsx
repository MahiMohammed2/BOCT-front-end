import React from 'react'
import { Outlet } from 'react-router-dom'
import DrawerDir from '../../components/Itemes/director/DrawerDir'
import logo from '../../static/images/logoMail.svg';
import { Box } from '@mui/material';

const DirectorLayout = () => {
    return (
        <div className='container'>
            <nav className='navbar'>
                <div >
                    <DrawerDir/>
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

export default DirectorLayout