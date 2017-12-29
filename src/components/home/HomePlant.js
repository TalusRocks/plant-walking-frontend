import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import './App.css';
import Navigation from '../shared/Navigation'
import PlantContainer from './PlantContainer'
import ProgressBar from './ProgressBar'
import AddStepsContainer from './AddStepsContainer'
import ViewGarden from '../garden/ViewGarden'
import PastPlantDetails from '../pastplant/PastPlantDetails'
import CloseForm from '../shared/CloseForm'
import axios from 'axios'

class HomePlant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSteps: 0,
      progress: 0,
    }
    this.addSteps = this.addSteps.bind(this)
  }

  componentDidMount(){
    console.log('mount');
    this.updateProgressState()
  }

  updateProgressState(){
    // set current progress
    // currently hardcoding the plant_instance id as 1
    axios.get('http://localhost:2999/api/plant-instances/1')
    .then( progress => {
      console.log('updateProgressState', progress);
      // setTimeout( console.log('timer'), this.setState({progress: progress.data.response[0].progress}), 1000 )
      this.setState({progress: progress.data.response[0].progress})
    })
  }

  addSteps (e) {
    e.preventDefault()
    const input = e.target.querySelector('.input-field')
    const stepsAdded = parseInt(input.value)
    input.value = ''

    //hardcoding user_id
    axios.post('http://localhost:2999/api/steps',{
      user_id: 1,
      number_of_steps: stepsAdded
    })
    .then(el => {
      // console.log('addSteps', el);
        this.updateProgressState()
    })

    // this.setState({ currentSteps: this.state.currentSteps + parseInt(stepsAdded, 10)})

  }

  render() {
    {console.log('hey Render fucker');}
    return (
      <div className="outermost-container">
        <Navigation />
        <PlantContainer />
        <ProgressBar percent={ this.state.progress } />
        <AddStepsContainer addSteps={ this.addSteps } />
        <Link to='/garden'>
          <ViewGarden />
        </Link>
      </div>
    );
  }
}

export default HomePlant;

//HOME
// <div className="outermost-container">
//   <Navigation />
//
//     <PlantContainer />
//       <ProgressBar />
//       <AddStepsContainer />
//       <ViewGarden />
// </div>

//PAST PLANT VIEW
// <div className="outermost-container">
//   <Navigation />
//     <CloseForm />
//     <PlantContainer />
//       <PastPlantDetails />
// </div>
