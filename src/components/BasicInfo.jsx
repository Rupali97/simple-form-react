import React, {useEffect} from 'react'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  startDate: {
    width: '49%',
    marginRight: 10,
  },
  endDate: {
    width: '49%',
  },
  checkbox: {
    margin: "20px 0 0 20px",
  }
  
}))

function BasicInfo(props) {
  const classes = useStyles();
  const {startDate, endDate, title, active, description, id} = props.apiData;
  
  const [startDt, setStartDate] = React.useState(startDate);
  const [endDt, setEndDate] = React.useState(endDate);
  const [text, setText] = React.useState({title: title, description: description, id: id});
  const [activeStatus, setActiveStatus] = React.useState(active);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleTextField = (e) => {
    setText({...text, [e.target.name]: e.target.value})
  }

  const handleActive = (e) => {
    setActiveStatus(e.target.checked)
  }
console.log('props', props.apiData);
  return (
    <div>
      <TextField 
        label="Title" 
        name="title" 
        fullWidth 
        onChange={handleTextField} 
        value={text.title} 
      />
      <TextField
        name="description"
        label="Description"
        multiline
        rows={2}
        fullWidth
        onChange={handleTextField}
        value={text.description}
        style={{marginTop: 20}}
        />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          label="Start Date"
          format="MM/dd/yyyy"
          value={startDt}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          className={classes.startDate}
          />
        <KeyboardDatePicker
          margin="normal"
          label="End Date"
          format="MM/dd/yyyy"
          value={endDt}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          className={classes.endDate}
        />
      </MuiPickersUtilsProvider><br />
      <TextField className={classes.startDate} name="id" label="Id" onChange={handleTextField} value={text.id} />
      <FormControlLabel
        className={classes.checkbox}
        control={
          <Checkbox
            checked={activeStatus}
            onChange={handleActive}
            name="checkedB"
            color="primary"
          />
        }
        label="Active Status"
      />
    </div>
  )
}

export default BasicInfo;
