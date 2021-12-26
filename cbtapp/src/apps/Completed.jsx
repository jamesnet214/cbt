import React from "react";
import { useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";

export default function Completed(props) {
    let history = useHistory();
    const cookies = new Cookies();
    const location = useLocation();
    let id = new URLSearchParams(location.search).get('id');
    console.log('ID', id);

    cookies.set('.cbt.devncore.org.authentication.session', id);
    const value = cookies.get('.cbt.devncore.org.authentication.session');

    history.push(`/`);

    console.log(value);
    return (
        <>
            Authentication....
        </>
    );
}