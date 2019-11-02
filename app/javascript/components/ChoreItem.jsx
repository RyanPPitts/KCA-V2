import React, { Component } from "react";

class ChoreItem extends Component{
    constructor(props){
        super(props);
        this.state = { editable: false, chore: this.props.chore };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEnableEdit = this.handleEnableEdit.bind(this);
        this.handleSaveEdit = this.handleSaveEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEnableEdit(){
      this.setState({editable: true})
    }

    handleSaveEdit(){
      const data = { chore: {
          title: this.state.chore.title,
          amount: this.state.chore.amount
        }
      }

      this.setState({editable: false})

      fetch(`/api/v1/chores/${this.state.chore.id}.json`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
        const result = response.json()
        this.props.fetchChores()

      })
      .catch(error => console.error(error))
    }

    handleDelete(){
      fetch(`/api/v1/chores/${this.state.chore.id}.json`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
      .then(() => {
        this.props.fetchChores()
      })
      .catch(error => console.error(error))
    }


    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      let newChore = this.state.chore
      newChore[name] = value
      this.setState({ chore: newChore});
      console.log(this.state);
    }

    render(){
      return(
        <li className="list-group-item">
            {
                this.state.editable ?
                <div className="d-flex justify-content-between">
                  <span>
                    <input type='text' name="title" onChange={this.handleInputChange} defaultValue={this.state.chore.title} />
                    <input type='number' name="amount" onChange={this.handleInputChange} defaultValue={this.state.chore.amount} />
                  </span>
                  <span>
                    <button className="btn btn-sm btn-primary" onClick={this.handleSaveEdit}>Submit</button>
                    &nbsp;
                    <button className="btn btn-sm btn-danger" onClick={this.handleDelete}>Delete</button>
                  </span>
                </div>
                :
                <div className="d-flex justify-content-between">
                  <span>
                    <b>{this.state.chore.title}</b> Amount ${this.state.chore.amount}
                  </span>
                  <span>
                    <button className="btn btn-sm btn-primary" onClick={this.handleEnableEdit}>Edit</button>
                    &nbsp;
                    <button className="btn btn-sm btn-danger" onClick={this.handleDelete}>Delete</button>
                  </span>
                </div>
            }

        </li>

      )
    }
}

export default ChoreItem;
