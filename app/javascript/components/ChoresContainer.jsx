import React, { Component } from "react";
import Header from './Header';
import ChoreForm from './ChoreForm';
import CompletedChoreList from './CompletedChoreList';

class ChoresContainer extends Component {
  constructor(props){
    super(props);
    this.state = { chores: [], savings: 0 }
    this.fetchChores = this.fetchChores.bind(this);
  }

  fetchChores(){
    console.log('fetching...');
    const result = fetch('/api/v1/chores.json')
      .then(response => response.json())
      .then(result => {
        this.setState({chores: result})
        const savings = this.state.chores.reduce((sum, c) => {
          sum += c.amount
          return sum
        },0)
        this.setState({savings: savings})
      })
  }

  componentDidMount(){
    this.fetchChores()
  }

  render () {
    return (
      <div>
        <h5>Welcome {this.props.current_user.email}</h5>
          <p>Your current savings are ${this.state.savings}</p> 
        <ChoreForm fetchChores={this.fetchChores} userId={this.props.current_user.id}/>
        <br></br>
        <CompletedChoreList fetchChores={this.fetchChores} choreList={this.state.chores} />
      </div>
    );
  }
}

export default ChoresContainer;
