import {useEffect, useState} from "react";
import StepperComp from "./StepperCompo";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  formText: {
    textAlign: 'center',
    fontWeight: 'bolder',
    marginTop: 40,
  }
}));

function App() {

  const classes = useStyles();
  const [apiData, setApiData] = useState({})

  const getDataFromApi = async() => {
    let response = await fetch("https://us-east4-frapp-prod.cloudfunctions.net/dumdum-brand-details");
    let resJson = await response.json();
    setApiData(resJson);
  }
  useEffect(() => {
    getDataFromApi();
  }, [])

  return (
    <div>
      <Typography className={classes.formText} variant="h4">Simple Form</Typography>
      <StepperComp apiData={apiData} />
    </div>
  );
}

export default App;
