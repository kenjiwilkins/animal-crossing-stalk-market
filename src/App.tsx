import { useEffect } from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import Chart from "react-apexcharts";
import {
  setSunday,
  setMondayAm,
  setMondayPm,
  setTuesdayAm,
  setTuesdayPm,
  setWednesdayAm,
  setWednesdayPm,
  setThursdayAm,
  setThursdayPm,
  setFridayAm,
  setFridayPm,
  setSaturdayAm,
  setSaturdayPm,
  setKabuAmount,
  reset,
} from "./actions";

import { getProfit } from "./utils/index";

const DATA_LENGTH = 12;

function App(props: any) {
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Mon AM",
          "Mon PM",
          "Tue AM",
          "Tue PM",
          "Wed AM",
          "Wed PM",
          "Thur AM",
          "Thur PM",
          "Fri AM",
          "Fri PM",
          "Sat AM",
          "Sat PM",
        ],
      },
    },
    series: [
      {
        name: "カブ価",
        data: [
          props.kabu.monam,
          props.kabu.monpm,
          props.kabu.tueam,
          props.kabu.tuepm,
          props.kabu.wedam,
          props.kabu.wedpm,
          props.kabu.thuram,
          props.kabu.thurpm,
          props.kabu.friam,
          props.kabu.fripm,
          props.kabu.satam,
          props.kabu.satpm,
        ],
      },
      {
        name: "Sunday",
        data: new Array(DATA_LENGTH).fill(props.kabu.sunday, 0, DATA_LENGTH),
      },
    ],
  };
  useEffect(() => {
    console.log(props, "props");
  }, []);
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar position="static">
          <Typography variant="h6">カブ予測</Typography>
        </AppBar>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width={380}
              height={350}
            />
          </Grid>
          {props.kabu && (
            <Grid item xs={12}>
              <Typography variant="h6">
                Profit:{" "}
                {getProfit(
                  state.series[0].data,
                  props.kabu.sunday,
                  props.kabu.kabuAmount
                )}
              </Typography>
            </Grid>
          )}
          <Grid item xs={6}>
            <TextField
              label="Sunday Price"
              placeholder="Sunday Price"
              type="number"
              value={props.kabu.sunday}
              onChange={(e) => props.setSunday(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Kabu Amount"
              placeholder="Kabu Amount"
              type="number"
              value={props.kabu.kabuAmount}
              onChange={(e) => props.setKabuAmount(e.target.value)}
            />
          </Grid>
          <Grid item container xs={12} spacing={3}>
            <Grid item xs={6}>
              <TextField
                label="Monday AM Price"
                placeholder="Monday AM Price"
                type="number"
                value={props.kabu.monam}
                onChange={(e) => props.setMondayAm(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Monday PM Price"
                placeholder="Monday PM Price"
                type="number"
                value={props.kabu.monpm}
                onChange={(e) => props.setMondayPm(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={3}>
            <Grid item xs={6}>
              <TextField
                label="Tuesday AM Price"
                placeholder="Tuesday AM Price"
                type="number"
                value={props.kabu.tueam}
                onChange={(e) => props.setTuesdayAm(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Tuesday PM Price"
                placeholder="Tuesday PM Price"
                type="number"
                value={props.kabu.tuepm}
                onChange={(e) => props.setTuesdayPm(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={3}>
            <Grid item xs={6}>
              <TextField
                label="Wednesday AM Price"
                placeholder="Wednesday AM Price"
                type="number"
                value={props.kabu.wedam}
                onChange={(e) => props.setWednesdayAm(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Wednesday PM Price"
                placeholder="Wednesday PM Price"
                type="number"
                value={props.kabu.wedpm}
                onChange={(e) => props.setWednesdayPm(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={3}>
            <Grid item xs={6}>
              <TextField
                label="Thursday AM Price"
                placeholder="Thursday AM Price"
                type="number"
                value={props.kabu.thuram}
                onChange={(e) => props.setThursdayAm(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Thursday PM Price"
                placeholder="Thursday PM Price"
                type="number"
                value={props.kabu.thurpm}
                onChange={(e) => props.setThursdayPm(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={3}>
            <Grid item xs={6}>
              <TextField
                label="Friday AM Price"
                placeholder="Friday AM Price"
                type="number"
                value={props.kabu.friam}
                onChange={(e) => props.setFridayAm(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Friday PM Price"
                placeholder="Friday PM Price"
                type="number"
                value={props.kabu.fripm}
                onChange={(e) => props.setFridayPm(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={3}>
            <Grid item xs={6}>
              <TextField
                label="Saturday AM Price"
                placeholder="Saturday AM Price"
                type="number"
                value={props.kabu.satam}
                onChange={(e) => props.setSaturdayAm(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Saturday PM Price"
                placeholder="Saturday PM Price"
                type="number"
                value={props.kabu.satpm}
                onChange={(e) => props.setSaturdayPm(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  kabu: state.kabu,
});

const mapDispatchToProps = {
  setSunday,
  setMondayAm,
  setMondayPm,
  setTuesdayAm,
  setTuesdayPm,
  setWednesdayAm,
  setWednesdayPm,
  setThursdayAm,
  setThursdayPm,
  setFridayAm,
  setFridayPm,
  setSaturdayAm,
  setSaturdayPm,
  setKabuAmount,
  reset,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
