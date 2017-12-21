import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import './App.css';
import Navigation from '../shared/Navigation'
import PlantContainer from './PlantContainer'
import ProgressBar from './ProgressBar'
import AddStepsContainer from './AddStepsContainer'
import ViewGarden from '../garden/ViewGarden'
import PastPlantDetails from '../PastPlantDetails'
import CloseForm from '../CloseForm'
import axios from 'axios'

class HomePlant extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSteps: 0,
    }
    this.addSteps = this.addSteps.bind(this)
  }

  addSteps (e) {
    e.preventDefault()
    const input = e.target.querySelector('.input-field')
    const stepsAdded = parseInt(input.value)
    input.value = ''
    axios.post('http://localhost:2999/api/steps',{
      user_id: 1,
      number_of_steps: stepsAdded
    })
    this.setState({ currentSteps: this.state.currentSteps + parseInt(stepsAdded, 10) })
  }

  render() {
    return (
      <div className="outermost-container">
        <Navigation />
        <PlantContainer />
        <ProgressBar percent={ this.state.currentSteps } />
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