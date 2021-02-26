import React, {Component} from 'react'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  basicContainer: {
    padding: 40,
  },
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
});
class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: " ",
      description: " ",
      id: Number,
      startDt: new Date(),
      endDt: new Date(),
      activeStatus: false,
     }
  }

  componentDidMount(){

    setTimeout(()=> { 
      const {title, description, id, startDate, endDate, active} = this.props.apiData
      
      this.setState({
      title: title,
      description: description,
      id: id,
      startDt: startDate,
      endDt: endDate,
      activeStatus: active,
     }) 
    }, 1000);
 }

  render() { 
    const { classes } = this.props;
    
    const handleTextField = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    const handleStartDateChange = (date) => {
      this.setState({startDt: date})
    };
  
    const handleEndDateChange = (date) => {
      this.setState({endDt: date})
    };

    const handleActive = (e) => {
      this.setState({active: e.target.checked})
    }
  
    return ( 
      <div className={classes.basicContainer}>
        <TextField 
          label="Title" 
          name="title" 
          fullWidth 
          onChange={handleTextField} 
          value={this.state.title} 
        />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={2}
          fullWidth
          onChange={handleTextField}
          value={this.state.description}
          style={{marginTop: 20}}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            label="Start Date"
            format="MM/dd/yyyy"
            value={this.state.startDt}
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
            value={this.state.endDt}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            className={classes.endDate}
          />
        </MuiPickersUtilsProvider><br />
        <TextField
          className={classes.startDate} name="id" label="Id" onChange={handleTextField} value={this.state.id} />
        <FormControlLabel
          className={classes.checkbox}
          control={
            <Checkbox
              checked={this.state.activeStatus}
              onChange={handleActive}
              name="checkedB"
              color="primary"
            />
          }
          label="Active Status"
        />
      </div>
     );
  }
}
 
export default withStyles(useStyles)(BasicInfo);
