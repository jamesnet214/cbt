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
    const [innings, setInnings] = React.useState([]);
    React.useEffect(() => {
        fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/subjects.yaml')
        .then(res => res.blob())
        .then(blob => blob.text())
        .then(res => {
            const data = load(res);
            setInnings(data);
        });
    }, []);

  const handleChange1 = (event, id) => {
      console.log('id: ', id);
      innings.filter(x=>x.id == id)[0].isChecked = event.target.checked;
      console.log('checked:', innings.filter(x=>x.id == id)[0].isChecked);

      props.required(innings.filter(x=>x.isChecked).length > 0);
  };

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
              <div key={x.id} style={{ borderBottom: '1px solid #eeeeee'}}>
                  <FormControlLabel
                      label={<Typography children={x.subjectName} variant="subtitle2"/>}
                      control={<Checkbox style={{ marginLeft: '20px'}} onChange={(event) => handleChange1(event, x.id)}/>}/>
              </div>
            );
        })}
      
    </div>
  );
}