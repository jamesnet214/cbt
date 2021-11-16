import * as React from 'react';
import {useLocation} from "react-router-dom";
import Box from '@mui/material/Box';
import { load } from 'js-yaml';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';


export default function InningCheckbox(props) {
    const search = useLocation().search;
    const cbtId = new URLSearchParams(search).get('id');
    const [checked, setChecked] = React.useState([true, false]);
    const [innings, setInnings] = React.useState([]);
    React.useEffect(() => {
        fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/innings.yaml')
        .then(res => res.blob())
        .then(blob => blob.text())
        .then(res => {
            setInnings(load(res));
        });
    }, []);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (item) => (
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }} >
          <FormControlLabel label={<Typography children="1회차" variant="subtitle2"/>}
                            control={<Checkbox size="small" style={{padding: 4}}
                                               checked={checked[0]} 
                                               onChange={handleChange2}/>}/>
          <FormControlLabel label={<Typography children="2회차" variant="subtitle2"/>}
                            control={<Checkbox size="small" style={{padding: 4}}
                                               checked={checked[1]} 
                                               onChange={handleChange3}/>}/>
      </Box>
  );

  return (
    <div style={{ backgroundColor: '#ffffff', 
                  borderTop: '1px solid #dddddd', 
                  borderLeft: '1px solid #dddddd', 
                  borderRight: '1px solid #dddddd', 
                  borderRadius: 0, 
                  marginTop: 20,
                  marginBottom: 20,
                  padding: '0px 0px 0px 0px',}}>
        {innings.filter(x=>x.testId == cbtId).map((x, i) => {
            return (
              <div style={{ borderBottom: '1px solid #eeeeee'}}>
                  <FormControlLabel
                      label={<Typography children={x.year + '년 - ' + x.inning + '회'} variant="subtitle2"/>}
                      control={<Checkbox style={{ marginLeft: '20px'}} />}/>
                      {()=> children(x.children)}
              </div>
            );
        })}
      
    </div>
  );
}