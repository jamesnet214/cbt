import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";

export default function MenuTabs() {
    let history = useHistory();

    const menus = [
        { 
            "name": "자격증",
            "value": "cbt"
        },
        { 
            "name": "프로그래밍",
            "value": "dev"
        },
        { 
            "name": "내 정보",
            "value": "users"
        },
    ];

    function createButton(menu) {
        const button = 
            <Button 
                key={menu.value}
                variant="raised"
                size="small" 
                color="link" 
                children={menu.name}
                onClick={(e) => menuClick(e, menu)}
                style={{ backgroundColor: 'transparent' }}/>
        return button;
    }

    const menuClick = (e, menu) => {
        history.push(`/${menu.value}`);
    }

    return (
        <Box sx={{ width: '100%' }}>
            {menus.map(menu => {
                return createButton(menu);
            })}            
        </Box>
    );
}
