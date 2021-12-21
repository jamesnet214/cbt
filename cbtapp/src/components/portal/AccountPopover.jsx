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
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

export default function AccountPopover(props) {
    const { userInfo } = props;
    const { onClose } = props;
    const [dialogOpen, setOpen] = React.useState(false);
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
        // history.push("/login");
        window.location.href = process.env.REACT_APP_SERVICE_URL + "/Identity/Account/Login?ReturnUrl=~/cbt";
        // handleClickOpen();
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

    const handleDialogClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
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
                    <div>
                        <Stack direction="row" margin={2} spacing={1.5}>
                            <AvatarIcon name={userInfo.userName}/>
                            <Stack>
                                <Typography variant="body2"><strong>{userInfo.userName}</strong></Typography>
                                <Typography variant="caption">{userInfo.aboutMe}</Typography>
                            </Stack>
                        </Stack>
                        <Divider style={{margin: "6px 0px 6px 0px"}}/>

                        <MenuItem 
                            style={{ padding: "6px 20px 6px 20px", margin: 0, fontSize: "14px"}} 
                            onClick={settingClick}
                            children="Account Settings"/>
                        <MenuItem 
                            style={{ padding: "6px 20px 6px 20px", margin: 0, fontSize: "14px"}} 
                            onClick={signOutClick}
                            children="Sign Out"/>
                    </div>
                }
              </Menu>
            <Dialog onClose={handleDialogClose} open={dialogOpen}>
                <DialogTitle>로그인</DialogTitle>
                <div style={{padding: "20px;"}}>
                    <button className={"btn-social"} >
                        <img src="./images/login_google.png" style={{width: "100%"}}></img>
                    </button>
                    <button className={"btn-social"} >
                        <img src="./images/login_facebook.png" style={{width: "100%"}}></img>
                    </button>
                    <button className={"btn-social"} >
                        <img src="./images/login_kakao.png" style={{width: "100%"}}></img>
                    </button>
                </div>
            </Dialog>
              
        </>
    );
}