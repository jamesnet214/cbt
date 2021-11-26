import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function CustomizedTabs() {
  return (
    <Box sx={{ width: '100%' }}>
        <Button 
            variant="raised"
            size="small" 
            color="link" 
            children="자격증"
            style={{ backgroundColor: 'transparent' }}/>
            
        <Button 
            variant="raised"
            edge="start"
            size="small" 
            color="link" 
            children="프로그래밍"
            style={{ backgroundColor: 'transparent' }}/>
    </Box>
  );
}
