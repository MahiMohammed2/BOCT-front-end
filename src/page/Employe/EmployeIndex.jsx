import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import IndexProfile from '../../components/profile/IndexProfile'
import IndexParametre from '../../components/profile/IndexParametre';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeIndex = () => {
    const [value, setValue] = React.useState('1');
    const navigate = useNavigate()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const logout = () =>{
        const accesToken = localStorage.getItem("accessToken_emp");
        if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
            navigate('/employe/login')
        }
        axios({
            method: 'delete',
            url: 'http://localhost:8000/api/employe/logout',
            headers: {
                "Accept": "application/json",
                "Authorization": 'Bearer ' + accesToken
            }
        })

        localStorage.removeItem("accessToken_emp");
        navigate('/employe/login')
    }


    return (
        <div className='profile-container'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Profile" value="1" />
                            <Tab label="Parametre" value="2" />
                            <div className='header_tab'>
                                <Button type='submit' color="error" size="midume" onClick={logout}>Se déconnecter</Button>
                            </div>
                        </TabList>
                    </Box>
                    <TabPanel value="1"> <IndexProfile person={"employe"}/></TabPanel>
                    <TabPanel value="2"><IndexParametre person={"employe"}/></TabPanel>
                </TabContext>

            </Box>

        </div>
    )
}

export default EmployeIndex
