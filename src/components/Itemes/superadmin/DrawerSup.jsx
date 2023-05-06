import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { NavLink } from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
export default function DrawerSup() {
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
            <NavLink to='/superadmin' className={"links"}>
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
            <NavLink to='/superadmin/arriver' className={"links"}>
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
            <NavLink to='/superadmin/depart' className={"links"}>
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
            <Divider />
            <NavLink to='/superadmin/administrative' className={"links"}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AdminPanelSettingsIcon />
                                <ListItemText style={{ paddingLeft: "20px" }} primary={"Administrative"} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>
            <NavLink to='/superadmin/finencier' className={"links"}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AdminPanelSettingsIcon />
                                <ListItemText style={{ paddingLeft: "20px" }} primary={"Finenciere"} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>
            <NavLink to='/superadmin/technique' className={"links"}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AdminPanelSettingsIcon />
                                <ListItemText style={{ paddingLeft: "20px" }} primary={"Technique"} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </NavLink>
            <Divider />
            <NavLink to='/superadmin/employes' className={"links"}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SupervisorAccountIcon />
                                <ListItemText style={{ paddingLeft: "20px" }} primary={"Employes"} />
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
                    <Button onClick={toggleDrawer(anchor, true)}><DehazeIcon/></Button>
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