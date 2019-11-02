import React, { Component } from "react";
import ChoreItem from './ChoreItem';

class CompletedChoreList extends Component {
    constructor(props){
        super(props);
    }

    render(){
      const choreList = this.props.choreList.map( chore => {
        return (<ChoreItem key={chore.id} chore={chore} fetchChores={this.props.fetchChores}/>)
      })

      // const choreList = this.props.choreList.map( chore => {
      //   return (
      //     <li key={chore.id}>{chore.title} [${chore.amount}]
      //       ({chore.completed ? 'Completed' : 'Incomplete'})
      //     </li>)
      // })

      return(
          <div>
            <h5>Your chores</h5>
            <ul className="list-group">
              { choreList.length > 0 ? choreList : <li>You haven't any completed chores yet</li> }
            </ul>
          </div>
      );
    }
};

export default CompletedChoreList;
