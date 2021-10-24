import React from 'react';
import {useLocation} from "react-router-dom";

function getName(id) {
    var name = "이름없음";

    switch (id) {
        case "6": name = "정보처리기사"; break;
        case "7": name = "정보처리산업기사"; break;
        case "8": name = "정보처리기능사"; break;
    }
    return name;
}

export default function Cbt(props) {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');

    return (
        <div>{getName(id)}</div>
    );
}