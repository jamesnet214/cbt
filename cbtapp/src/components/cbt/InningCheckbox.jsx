import * as React from 'react';
import Box from '@mui/material/Box';
import { load } from 'js-yaml';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

const items = [{
    'name': '2020년',
    'children': [
        { 'name': '1·2회차' },
        { 'name': '2회차' },
        { 'name': '3회차' }
    ]},
    {
      'name': '2021년',
      'children': [
          { 'name': '1회차' },
          { 'name': '2회차' },
          { 'name': '3회차' }
    ]}
]

export default function InningCheckbox() {
  const [checked, setChecked] = React.useState([true, false]);
  const [text, setInnings] = React.useState([]);
  
  React.useEffect(() => {
      fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/inning.yaml')
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
    <div>
        {items.map((x, i) => {
            return (
              <div>
                  <FormControlLabel 
                      label={<Typography children={x.name} variant="subtitle2"/>}
                      control={<Checkbox size="small" 
                               style={{padding: 4}}
                               checked={checked[0] && checked[1]}
                               indeterminate={checked[0] !== checked[1]}
                               onChange={handleChange1}/>}/>
                      {()=> children(x.children)}
              </div>
            );
        })}
      
    </div>
  );
}