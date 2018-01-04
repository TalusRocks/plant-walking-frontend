import React from 'react'

const HistoryItem = ({step, editSteps}) => {
  function sayHi(){
    console.log('Hi');
  }
  return (
    <div>
      <div className="history-item">
        <p className="history-column">{step.date}</p>
        <p className="history-column">{step.steps}</p>
        <i className="material-icons edit-steps" onClick={editSteps}>mode_edit</i>
      </div>
      <hr></hr>
    </div>
  )
}

export default HistoryItem
