import React, { Component } from "react";

class ChoreForm extends Component {

  constructor(props){
      super(props);
      this.state = {
        title: '',
        amount: 0,
        completed: false
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(){
    const data = { chore: {
        title: this.state.title,
        amount: this.state.amount,
        completed: this.state.completed,
        user_id: this.props.userId
      }
    }

    fetch('/api/v1/chores.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      const result = response.json()
      this.props.fetchChores()
      this.setState({chore: {
        title: '',
        amount: '',
        completed: false,
        user_id: this.props.userId
      }})
    })
    .catch(error => console.error(error))
  }

  render () {
    return (
      <div className="row">
        <div className="col-7">
          <input className="form-control"
          name="title"
          type="text"
          onChange={this.handleInputChange}
          placeholder="Title"/>
        </div>
        <div className="col-2">
          <input className="form-control"
          name="amount"
          type="number"
          onChange={this.handleInputChange}
          placeholder="amount"/>
        </div>
        <div className="col-1">
          <input className="form-control"
            name="completed"
            type="checkbox"
            onChange={this.handleInputChange}
            />
        </div>
        <div className="col-1">
          <button className="btn btn-success" onClick={this.handleSubmit}>Add</button>
        </div>
      </div>
    );
  }
}

export default ChoreForm;
