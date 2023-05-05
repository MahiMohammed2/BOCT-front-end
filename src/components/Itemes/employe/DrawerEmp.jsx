import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { NavLink } from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import { useEffect } from 'react';
export default function DrawerEmp() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <NavLink to='/employe' className={"links"}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonIcon />
                                <ListItemText style={{ paddingLeft: "20px" }} primary={"Profile"} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>
            <Divider />
            <NavLink to='/employe/arriver' className={"links"}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                                <ListItemText style={{ paddingLeft: "20px" }} primary={"Arriver"} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>
            <NavLink to='/employe/depart' className={"links"}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                                <ListItemText style={{ paddingLeft: "20px" }} primary={"Depart"} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>
        </Box >
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><DehazeIcon style={{color:"#1465df"}}/></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}