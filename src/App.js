import React from 'react';
import {Container, Grid, Paper, Typography, TextField, Button} from '@material-ui/core';
import { connect } from 'react-redux';
import { isMobile,  } from 'react-device-detect';
import {
  setSunday, setMondayAm, setMondayPm, setTuesdayAm, setThursdayPm, setWednesdayAm, setWednesdayPm,
  setThursdayAm, setTuesdayPm, setFridayAm, setFridayPm, setSaturdayAm, setSaturdayPm, setKabuAmount, reset
} from './actions/index';

import createPlotlyComponent from 'react-plotly.js/factory';
const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);
// App.js

class Data extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sunday: 0,
      monam:0,
      monpm:0,
      tueam:0,
      tuepm:0,
      wedam:0,
      wedpm:0,
      thuram:0,
      thurpm:0,
      friam:0,
      fripm:0,
      satam:0,
      satpm:0,
      kabuAmount:0,
    };
  }
  componentDidMount(){
    this.update();
  }
  update(){
    if(this.props.kabu.sunday){
      this.setState({sunday:this.props.kabu.sunday})
    }
    if(this.props.kabu.monam){
      this.setState({monam:this.props.kabu.monam})
    }
    if(this.props.kabu.monpm){
      this.setState({monpm:this.props.kabu.monpm})
    }
    if(this.props.kabu.tueam){
      this.setState({tueam:this.props.kabu.tueam})
    }
    if(this.props.kabu.tuepm){
      this.setState({tuepm:this.props.kabu.tuepm})
    }
    if(this.props.kabu.wedam){
      this.setState({wedam:this.props.kabu.wedam})
    }
    if(this.props.kabu.wedpm){
      this.setState({wedpm:this.props.kabu.wedpm})
    }
    if(this.props.kabu.thuram){
      this.setState({thuram:this.props.kabu.thuram})
    }
    if(this.props.kabu.thurpm){
      this.setState({thurpm:this.props.kabu.thurpm})
    }
    if(this.props.kabu.friam){
      this.setState({friam:this.props.kabu.friam})
    }
    if(this.props.kabu.fripm){
      this.setState({fripm:this.props.kabu.fripm})
    }
    if(this.props.kabu.satam){
      this.setState({satam:this.props.kabu.satam})
    }
    if(this.props.kabu.satpm){
      this.setState({satpm:this.props.kabu.satpm})
    }
    this.setState({kabuAmount:this.props.kabu.kabuAmount})
  }
  storeValue(){
    if(parseInt(this.state.sunday)){
      this.props.setSunday(parseInt(this.state.sunday));
      this.props.setMondayAm(parseInt(this.state.monam));
      this.props.setMondayPm(parseInt(this.state.monpm));
      this.props.setTuesdayAm(parseInt(this.state.tueam));
      this.props.setTuesdayPm(parseInt(this.state.tuepm));
      this.props.setWednesdayAm(parseInt(this.state.wedam));
      this.props.setWednesdayPm(parseInt(this.state.wedpm));
      this.props.setThursdayAm(parseInt(this.state.thuram));
      this.props.setThursdayPm(parseInt(this.state.thurpm));
      this.props.setFridayAm(parseInt(this.state.friam));
      this.props.setFridayPm(parseInt(this.state.fripm));
      this.props.setSaturdayAm(parseInt(this.state.satam));
      this.props.setSaturdayPm(parseInt(this.state.satpm));
      this.update();
    }
    else{
      console.log('error')
    }
  }
  resetValue(){
    this.props.reset();
    this.update();
  }
  render(){
    return(
    <div>
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Sunday Price"
            placeholder="Sunday Price"
            type="number"
            value={this.state.sunday}
            onChange={
              e => this.setState({sunday:e.target.value})
            }
          />
        </Grid>
        <Grid item xs={12} container spacing={2} justify="center">
          <Grid item xs={6}>
            <TextField
              label="Mon AM"
              placeholder="Mon AM"
              type="number"
              value={this.state.monam}
              onChange={e => this.setState({monam:e.target.value})}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Mon PM"
              placeholder="Mon PM"
              type="number"
              value={this.state.monpm}
              onChange={e => this.setState({monpm:e.target.value})}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={2} justify="center">
          <Grid item xs={6}>
            <TextField
              label="Tue AM"
              placeholder="Tue AM"
              type="number"
              value={this.state.tueam}
              onChange={e => this.setState({tueam:e.target.value})}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Tue PM"
              placeholder="Tue PM"
              type="number"
              value={this.state.tuepm}
              onChange={e => this.setState({tuepm:e.target.value})}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={2} justify="center">
          <Grid item xs={6}>
            <TextField
              label="Wed AM"
              placeholder="Wed AM"
              type="number"
              value={this.state.wedam}
              onChange={e => this.setState({wedam:e.target.value})}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Wed PM"
              placeholder="Wed PM"
              type="number"
              value={this.state.wedpm}
              onChange={e => this.setState({wedpm:e.target.value})}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={2} justify="center">
          <Grid item xs={6}>
            <TextField
              label="Thur AM"
              placeholder="Thur AM"
              type="number"
              value={this.state.thuram}
              onChange={e => this.setState({thuram:e.target.value})}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Thur PM"
              placeholder="Thur PM"
              type="number"
              value={this.state.thurpm}
              onChange={e => this.setState({thurpm:e.target.value})}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={2} justify="center">
          <Grid item xs={6}>
            <TextField
              label="Fri AM"
              placeholder="Fri AM"
              type="number"
              value={this.state.friam}
              onChange={e => this.setState({friam:e.target.value})}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Fri PM"
              placeholder="Fri PM"
              type="number"
              value={this.state.fripm}
              onChange={e => this.setState({fripm:e.target.value})}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={2} justify="center">
          <Grid item xs={6}>
            <TextField
              label="Sat AM"
              placeholder="Sat AM"
              type="number"
              value={this.state.satam}
              onChange={e => this.setState({satam:e.target.value})}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Sat PM"
              placeholder="Sat PM"
              type="number"
              value={this.state.satpm}
              onChange={e => this.setState({satpm:e.target.value})}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={6}>
            <Button onClick={() => this.storeValue()}>
              Set
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={() => this.resetValue()}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>)
  }
}

class Graph extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sunday: 0,
      monam:0,
      monpm:0,
      tueam:0,
      tuepm:0,
      wedam:0,
      wedpm:0,
      thuram:0,
      thurpm:0,
      friam:0,
      fripm:0,
      satam:0,
      satpm:0,
      kabuAmount:0,
    };
  }
  render(){
    return(
      <div>
        {console.log(this.props)}
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12}>
            <Paper>
              <Plot
                data={[
                  {
                    frame:null,
                    hoverinfo:"text",
                    hoveron:"points",
                    line:{
                      color:"rgba(100,0,0,1)",
                      dash: "solid",
                      width: 3.02362204724409
                    },
                    mode: "lines",
                    showlegend: false,
                    text:[
                      `${this.props.kabu.monam ? (this.props.kabu.monam - this.props.kabu.sunday) * this.props.kabu.kabuAmount: null}`,
                      `${this.props.kabu.monpm ? (this.props.kabu.monpm - this.props.kabu.sunday) * this.props.kabu.kabuAmount: null}`,
                      `${this.props.kabu.tueam ? (this.props.kabu.tueam - this.props.kabu.sunday) * this.props.kabu.kabuAmount: null}`,
                      `${this.props.kabu.tuepm ? (this.props.kabu.tuepm - this.props.kabu.sunday) * this.props.kabu.kabuAmount: null}`,
                      `${this.props.kabu.wedam ? (this.props.kabu.wedam - this.props.kabu.sunday) * this.props.kabu.kabuAmount: null}`,
                      `${this.props.kabu.wedpm ? (this.props.kabu.wedpm - this.props.kabu.sunday) * this.props.kabu.kabuAmount: null}`,
                      `${this.props.kabu.thuram ? (this.props.kabu.thuram - this.props.kabu.sunday) * this.props.kabu.kabuAmount: null}`,
                      `${this.props.kabu.thurpm ? (this.props.kabu.thurpm - this.props.kabu.sunday) * this.props.kabu.kabuAmount: null}`,
                      `${this.props.kabu.friam ? (this.props.kabu.friam - this.props.kabu.sunday) * this.props.kabu.kabuAmount: null}`,
                      `${this.props.kabu.fripm ? (this.props.kabu.fripm - this.props.kabu.sunday) * this.props.kabu.kabuAmount: null}`,
                      `${this.props.kabu.satam ? (this.props.kabu.satam - this.props.kabu.sunday) * this.props.kabu.kabuAmount: null}`,
                      `${this.props.kabu.satpm ? (this.props.kabu.satpm - this.props.kabu.sunday) * this.props.kabu.kabuAmount: null}`,
                    ],
                    type:"scatter",
                    x:[
                      "Monday AM",
                      "Monday PM",
                      "Tuesday AM",
                      "Tuesday PM",
                      "Wednesday AM",
                      "Wednesday PM",
                      "Thursday AM",
                      "Thursday PM",
                      "Friday AM",
                      "Friday PM",
                      "Saturday AM",
                      "Saturday PM",
                    ],
                    xaxis:"x",
                    y:[
                      this.props.kabu.sunday,
                      this.props.kabu.sunday,
                      this.props.kabu.sunday,
                      this.props.kabu.sunday,
                      this.props.kabu.sunday,
                      this.props.kabu.sunday,
                      this.props.kabu.sunday,
                      this.props.kabu.sunday,
                      this.props.kabu.sunday,
                      this.props.kabu.sunday,
                      this.props.kabu.sunday,
                      this.props.kabu.sunday,
                    ],
                    yaxis:"y"
                  },
                  {
                    frame:null,
                    hoverinfo:"text",
                    hoveron:"points",
                    line:{
                      color:"rgba(0,100,0,1)",
                      dash: "solid",
                      width: 3.02362204724409
                    },
                    mode: "lines",
                    showlegend: false,
                    text:[
                      `${this.props.kabu.monam - this.props.kabu.sunday}`,
                      `${this.props.kabu.monpm - this.props.kabu.sunday}`,
                      `${this.props.kabu.tueam - this.props.kabu.sunday}`,
                      `${this.props.kabu.tuepm - this.props.kabu.sunday}`,
                      `${this.props.kabu.wedam - this.props.kabu.sunday}`,
                      `${this.props.kabu.wedpm - this.props.kabu.sunday}`,
                      `${this.props.kabu.thuram - this.props.kabu.sunday}`,
                      `${this.props.kabu.thurpm - this.props.kabu.sunday}`,
                      `${this.props.kabu.friam - this.props.kabu.sunday}`,
                      `${this.props.kabu.fripm - this.props.kabu.sunday}`,
                      `${this.props.kabu.satam - this.props.kabu.sunday}`,
                      `${this.props.kabu.satpm - this.props.kabu.sunday}`,
                    ],
                    type:"scatter",
                    x:[
                      "Monday AM",
                      "Monday PM",
                      "Tuesday AM",
                      "Tuesday PM",
                      "Wednesday AM",
                      "Wednesday PM",
                      "Thursday AM",
                      "Thursday PM",
                      "Friday AM",
                      "Friday PM",
                      "Saturday AM",
                      "Saturday PM",
                    ],
                    xaxis:"x",
                    y:[
                      `${this.props.kabu.monam ? this.props.kabu.monam: null}`,
                      `${this.props.kabu.monpm ? this.props.kabu.monpm: null}`,
                      `${this.props.kabu.tueam ? this.props.kabu.tueam: null}`,
                      `${this.props.kabu.tuepm ? this.props.kabu.tuepm: null}`,
                      `${this.props.kabu.wedam ? this.props.kabu.wedam: null}`,
                      `${this.props.kabu.wedpm ? this.props.kabu.wedpm: null}`,
                      `${this.props.kabu.thuram ? this.props.kabu.thuram: null}`,
                      `${this.props.kabu.thurpm ? this.props.kabu.thurpm: null}`,
                      `${this.props.kabu.friam ? this.props.kabu.friam: null}`,
                      `${this.props.kabu.fripm ? this.props.kabu.fripm: null}`,
                      `${this.props.kabu.satam ? this.props.kabu.satam: null}`,
                      `${this.props.kabu.satpm ? this.props.kabu.satpm: null}`,
                    ],
                    yaxis:"y",
                  }
                ]}
              />
              <TextField
                label="kabu amount"
                placeholder="kabu amount"
                type="number"
                value={this.props.kabu.kabuAmount}
                onChange={e => this.props.setKabuAmount(parseInt(e.target.value))}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sunday: 0,
      monam:0,
      monpm:0,
      tueam:0,
      tuepm:0,
      wedam:0,
      wedpm:0,
      thuram:0,
      thurpm:0,
      friam:0,
      fripm:0,
      satam:0,
      satpm:0,
      kabuAmount:0,
    };
  }
  componentDidMount(){
    this.update();
  }
  update(){
    if(this.props.kabu.sunday){
      this.setState({sunday:this.props.kabu.sunday})
    }
    if(this.props.kabu.monam){
      this.setState({monam:this.props.kabu.monam})
    }
    if(this.props.kabu.monpm){
      this.setState({monpm:this.props.kabu.monpm})
    }
    if(this.props.kabu.tueam){
      this.setState({tueam:this.props.kabu.tueam})
    }
    if(this.props.kabu.tuepm){
      this.setState({tuepm:this.props.kabu.tuepm})
    }
    if(this.props.kabu.wedam){
      this.setState({wedam:this.props.kabu.wedam})
    }
    if(this.props.kabu.wedpm){
      this.setState({wedpm:this.props.kabu.wedpm})
    }
    if(this.props.kabu.thuram){
      this.setState({thuram:this.props.kabu.thuram})
    }
    if(this.props.kabu.thurpm){
      this.setState({thurpm:this.props.kabu.thurpm})
    }
    if(this.props.kabu.friam){
      this.setState({friam:this.props.kabu.friam})
    }
    if(this.props.kabu.fripm){
      this.setState({fripm:this.props.kabu.fripm})
    }
    if(this.props.kabu.satam){
      this.setState({satam:this.props.kabu.satam})
    }
    if(this.props.kabu.satpm){
      this.setState({satpm:this.props.kabu.satpm})
    }
    this.setState({kabuAmount:this.props.kabu.kabuAmount})
  }
  storeValue(){
    if(parseInt(this.state.sunday)){
      this.props.setSunday(parseInt(this.state.sunday));
      this.props.setMondayAm(parseInt(this.state.monam));
      this.props.setMondayPm(parseInt(this.state.monpm));
      this.props.setTuesdayAm(parseInt(this.state.tueam));
      this.props.setTuesdayPm(parseInt(this.state.tuepm));
      this.props.setWednesdayAm(parseInt(this.state.wedam));
      this.props.setWednesdayPm(parseInt(this.state.wedpm));
      this.props.setThursdayAm(parseInt(this.state.thuram));
      this.props.setThursdayPm(parseInt(this.state.thurpm));
      this.props.setFridayAm(parseInt(this.state.friam));
      this.props.setFridayPm(parseInt(this.state.fripm));
      this.props.setSaturdayAm(parseInt(this.state.satam));
      this.props.setSaturdayPm(parseInt(this.state.satpm));
      this.update();
    }
    else{
      console.log('error')
    }
  }
  resetValue(){
    this.props.reset();
    this.update();
  }

  render() {
    return (
      <div>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" color="primary">
                Animal Crossing's Stalk Market
              </Typography>
            </Grid>
            {isMobile ?
              <Grid item xs={12} className="mobile" container spacing={2}>
                {console.log(isMobile)}
                <Grid item xs={12}>
                  <Data {...this.props}/>
                </Grid>
                <Grid item xs={12}>
                  <Graph {...this.props}/>
                </Grid>
              </Grid> :
              <Grid item xs={12} className="browser" container spacing={2}>
                {console.log(`false ? ${isMobile}`)}
                <Grid item xs={4}>
                  <Data {...this.props}/>
                </Grid>
                <Grid item xs={8}>
                  <Graph {...this.props}/>
                </Grid>
              </Grid>
              }
          </Grid>
          <Typography variant="subtitle1">© 2020 Kenji Wilkins All Rights Reserved</Typography>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
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

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
