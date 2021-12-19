import React from "react";
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Stack from "@mui/material/Stack";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AvatarIcon from "../users/AvatarIcon";

export default function AccountPopover(props) {
    const { userInfo } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    let history = useHistory();
    const cookies = new Cookies();
    
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const signInClick = (event) => {
        history.push("/login");
    };
    
    const signOutClick = (event) => {
        setAnchorEl(null);
        cookies.remove('.cbt.devncore.org.authentication.session', { path: '/' });
        const token = cookies.get('.cbt.devncore.org.authentication.session');
        console.log('remove token:', token);
        window.location.href = "/";
    };

    const settingClick = (event) => {
        setAnchorEl(null);
        history.push(`/settings`);
        console.log(userInfo.id);
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                {userInfo == null ? <AccountCircleIcon/> : <AvatarIcon name={userInfo.userName}/>}
            </IconButton>
            <Menu
                id="menu-appbar"
                style={{zIndex: 99999}}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {userInfo == null ?
                    <MenuItem 
                        onClick={signInClick}
                        children="Sign In"/>
                : 
                    <>
                        <Stack margin={2}>
                            <Typography variant="body2"><strong>{userInfo.userName}</strong></Typography>
                            <Typography variant="caption">{userInfo.email}</Typography>
                        </Stack>
                        <Divider/>
                        <MenuItem 
                            onClick={settingClick}
                            children="Settings"/>
                        <MenuItem 
                            style={{ textAlign: "right"}} 
                            onClick={signOutClick}
                            children="Sign Out"/>
                    </>
                }
              </Menu>
        </>
    );
}