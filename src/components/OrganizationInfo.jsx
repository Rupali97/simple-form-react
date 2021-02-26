import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function OrganizationInfo(props) {

  const [orgType, setOrgType] =  useState("none");
  const {title, options} = props.apiData.organizationType;

  const handleChange = (e) => {
    setOrgType(e.target.value)
  }

  return (
    <div style={{padding: 40}}>
      <Typography variant="h6" gutterBottom> {title} </Typography>
      <FormControl style={{width: '50%'}}>
        <Select
          value={orgType}
          onChange={handleChange}
          label="job"
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          {options.map((option, i) => (
            <MenuItem key={i} value={option.optionVal}>{option.optionText}</MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>
  )
}

export default OrganizationInfo
