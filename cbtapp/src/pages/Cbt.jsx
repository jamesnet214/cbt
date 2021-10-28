import React, { useEffect } from 'react';
import {useLocation} from "react-router-dom";
import Box from '@mui/material/Box';
import { Divider, Paper, Typography } from '@mui/material';

function getName(id) {
    var name = "이름없음";

    switch (id) {
        case "6": name = "정보처리기사"; break;
        case "7": name = "정보처리산업기사"; break;
        case "8": name = "정보처리기능사"; break;
        case "9": name = "컴퓨터활용능력1급"; break;
        case "10": name = "컴퓨터활용능력2급"; break;
    }
    return name;
}

function initItemsTemplate(items) {
    return items.map((answer, i) => {
        return (
            <Typography 
                style={{ margin: '5px 0px 0px 0px' }}
                children={`${i + 1}. ${answer.example}`}/>
        );
    })
}

export default function Cbt(props) {
    const [text, setText] = React.useState(null)
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');

    console.log('dd');

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/0/202101.json')
        .then(res => res.json())
        .then(res => {
            setText(res);
        });
      }, []);

    return (
        <Box style={{ width: '600px' }}>
            {/* <Typography children={getName(id)}/> */}

            {text == null ? null
            :
                text.map((item, i) => {
                    return (
                      <Paper variant="outlined"
                             style={{ padding: '0px', margin: '0px 0px 20px 0px' }}>
                      <Typography children={`${i + 1}. ${item.question}`}
                                  style={{margin: '15px' }}/>
                      <Divider/>
                        <Box style={{ margin: '15px' }}>
                            {initItemsTemplate(item.answers)}
                        </Box>
                      </Paper>
                    );
                 })
            }
        </Box>
    );
}