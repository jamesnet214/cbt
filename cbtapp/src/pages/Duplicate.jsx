import React from "react";
import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

export default function Duplicate(props) {
    const location = useLocation();
    let id = new URLSearchParams(location.search).get('id');

    const handleLogin = () => {
        props.loginSwitch(true);
    };

    return (
        <div style={{margin: '10px'}}>   
            <div >
                <div style={{fontSize: '14px'}}><span style={{color: '#BF412E'}}>{id}</span> 해당 이메일로 이미 가입이 되었습니다.</div>
                <Button sx={{ mt: 1, mr: 1 }} variant="contained" onClick={handleLogin}>로그인 하기</Button>
            </div>
        </div>
    );
}