import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Navigation from '../shared/Navigation'
// import CloseForm from '../shared/CloseForm'
// import TextInputLabeled from '../shared/TextInputLabeled'
import GreenButton from '../shared/GreenButton'

class Welcome extends Component {
  state = {}
  render() {
    return (
      <div className="splash-container">

        <img className="splash-image" src="./images/grown_plant.png" />

        <div className="buttons-container">
          <GreenButton text="sign up"/>
          <GreenButton text="log in"/>
        </div>
      </div>
    )
  }
}

export default Welcome;