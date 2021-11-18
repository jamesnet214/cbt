import * as React from 'react';
import {useLocation} from "react-router-dom";
import Box from '@mui/material/Box';
import { load } from 'js-yaml';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

let _subjects = [];

export default function InningCheckboxs(props) {
    const search = useLocation().search;
    const cbtId = new URLSearchParams(search).get('id');
    const [subjects, setSubjects] = React.useState(_subjects);
    React.useEffect(() => {
        // if(_subjects.length == 0)
        {
            fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/subjects.yaml')
                .then(res => res.blob())
                .then(blob => blob.text())
                .then(res => {
                    _subjects = load(res).filter(x => x.testId == cbtId);
                    // _subjects.filter((s) => { s['isChecked'] = true });
                    setSubjects(_subjects);
                });
        }
    }, []);

  const handleChange1 = (event, id) => {
      subjects.find(x=>x.id == id).isChecked = event.target.checked;
      props.required(subjects.filter(x=>x.isChecked).length > 0);
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
        {subjects.filter(x=>x.testId == cbtId).map((x, i) => {
            return (
              <div key={x.id} style={{ borderBottom: '1px solid #eeeeee'}}>
                  <FormControlLabel
                      label={<Typography children={x.subjectName} variant="subtitle2"/>}
                      control={<Checkbox 
                                  style={{ marginLeft: '20px'}} 
                                  // checked={x.isChecked}
                                  onChange={(event) => handleChange1(event, x.id)}/>}/>
              </div>
            );
        })}
      
    </div>
  );
}