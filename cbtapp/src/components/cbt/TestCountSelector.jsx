import * as React from 'react';
import {useLocation} from "react-router-dom";
import Box from '@mui/material/Box';
import { load } from 'js-yaml';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

let _testTypes = [];

export default function TestCountSelector(props) {
    const search = useLocation().search;
    const cbtId = new URLSearchParams(search).get('id');
    const [testTypes, setTestTypes] = React.useState(_testTypes);

    React.useEffect(() => {
        // if(_testTypes.length == 0)
        {
            fetch('https://raw.githubusercontent.com/devncore/cbt/main/data/testTypes.yaml')
                .then(res => res.blob())
                .then(blob => blob.text())
                .then(res => {
                    _testTypes = load(res).filter(x => x.testId == cbtId);
                    setTestTypes(_testTypes);
                });
        }
    }, []);

  const handleChange1 = (event, id) => {
    // testTypes.find(x=>x.id == id).isChecked = event.target.checked;
    //   props.required(testTypes.filter(x=>x.isChecked).length > 0);
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
        <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group" >
            {testTypes.map((x, i) => {
                return (

                    
                <div key={x.id} style={{ borderBottom: '1px solid #eeeeee'}}>
                    <FormControlLabel
                        label={<Typography children={`(${x.count}) ${x.comment}`} variant="subtitle2"/>}
                        control={<Radio 
                                    value={x.count}
                                    style={{ marginLeft: '20px'}} 
                                    onChange={(event) => handleChange1(event, x.id)}/>}/>
                </div>
                );
            })}
        
        </RadioGroup>
      
    </div>
  );
}