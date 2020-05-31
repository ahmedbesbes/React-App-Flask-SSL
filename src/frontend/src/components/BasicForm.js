import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  input: {
    margin: 5,
  },
}));

export default function BasicForm() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const classes = useStyles();
  const [identity, setIdentity] = useState({ firstName: "", lastName: "" });
  const [job, setJob] = useState("");
  const [success, setSuccess] = useState(undefined);

  function handleInputFirstName(e) {
    setIdentity({ ...identity, firstName: e.target.value });
  }

  function handleInputLastName(e) {
    setIdentity({ ...identity, lastName: e.target.value });
  }

  function handleInputJob(e) {
    setJob(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("firstName", identity.firstName);
    data.set("lastName", identity.lastName);
    data.set("job", job);

    axios({
      method: "post",
      url: baseUrl + "/submit",
      data: data,
    })
      .then(function (response) {
        console.log(response);
        setSuccess(true);
      })
      .catch(function (response) {
        setSuccess(false);
        console.log(response);
      });
  }

  function Alerting() {
    if (success === true) {
      return <Alert severity="success">Data sucessfully sent !</Alert>;
    } else if (success === false) {
      return <Alert severity="error">Oops. An error just occured!</Alert>;
    } else {
      return null;
    }
  }

  return (
    <Container>
      <form>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={6} lg={6} className={classes.input}>
            <TextField
              required
              name="firstname"
              id="firstname"
              label="Frist name"
              fullWidth={true}
              value={identity.firstName}
              onChange={handleInputFirstName}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} className={classes.input}>
            <TextField
              name="lastname"
              id="lastname"
              label="Last name"
              fullWidth={true}
              value={identity.lastName}
              onChange={handleInputLastName}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} className={classes.input}>
            <TextField
              name="job"
              id="firstname"
              label="Job"
              fullWidth={true}
              value={job}
              onChange={handleInputJob}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography align="center">
              <Button
                color="primary"
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <div style={{ marginTop: 10 }}>
                <Alerting></Alerting>
              </div>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
