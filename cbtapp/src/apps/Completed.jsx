import React from "react";
import { useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function Completed(props) {
    const cookies = new Cookies();
    const location = useLocation();
    let id = new URLSearchParams(location.search).get('id');
    console.log('ID', id);
    
    cookies.set('.cbt.devncore.org.authentication.session', id);
    const value = cookies.get('.cbt.devncore.org.authentication.session');

    console.log(value);
    return (
        <>
            Authentication...
        </>
    );
}