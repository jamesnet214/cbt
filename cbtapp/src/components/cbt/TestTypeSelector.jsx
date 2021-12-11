import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

export default function TestCountSelector(props) {
    const cbtId = props.cbtId;
    const testTypes = props.testTypes;
    let current = testTypes.find(x=>x.isChecked).count;

    const radioChanged = (event) => {
        testTypes.map(x => x.isChecked = false);
        testTypes.find(x=>x.id == event.target.id).isChecked = event.target.checked;
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
            name="radio-buttons-group"
            defaultValue={current}
            onChange={(event) => radioChanged(event)}>
            {testTypes.map((x, i) => {
                return (
                    <div key={x.id} style={{ borderBottom: '1px solid #eeeeee'}}>
                        <FormControlLabel
                            label={<Typography 
                                // children={`(${x.count}) ${x.comment}`} 
                                children={`${x.count} 문제`}
                                variant="subtitle2"/>}
                            control={<Radio 
                                        id={x.id}
                                        value={x.count}
                                        style={{ marginLeft: '20px'}}/>}/>
                    </div>
                );
            })}
        
        </RadioGroup>
      
    </div>
  );
}