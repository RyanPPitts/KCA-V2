import React, { Component } from 'react';
import axios from 'axios';

class ChoresContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chores: []
    }
  }

  getChores() {
    axios.get('/api/v1/chores')
    .then(response => {
      this.setState({chores: response.data})
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getChores()
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="choreInput" type="text" 
            placeholder="Add a chore" maxLength="50"
            onKeyPress={this.createChore} />
        </div>  	    
	<div className="listWrapper">
	   <ul className="taskList">
		  {this.state.chores.map((chore) => {
		    return(
		      <li className="task" chore={chore} key={chore.id}>
			<input className="taskCheckbox" type="checkbox" />              
			<label className="taskLabel">{chore.title}</label>
			<span className="deleteTaskBtn">x</span>
		      </li>
		    )       
		  })} 	    
	   </ul>
	</div>
     </div>
    )
  }
}

export default ChoresContainer