import React, { Component } from "react";
import Chore from "./chore";

class Body extends Component {   
    constructor(props){
        super(props);
        this.state = { chores: []}

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount(){
        $.getJSON('/api/v1/chores.json', (response)=> { this.setState({ chores: response})});
    }

    handleUpdate(chore){
        $.ajax({
            url: `/api/v1/chores/${chore.id}`,
            type: 'PUT',
            data: { chore: chore},
            success: ()=>{
                this.updateChoreClient(chore);
            }
        })
    }

    updateChoreClient(chore){
        var chores = this.state.chores.filter((i)=> { return i.id != chore.id});
        chores.push(chore);
        
        this.setState({ chores: chores});
    }

    handleDelete(id){
        $.ajax({
          url: `/api/v1/chores/${id}`,
          type: 'DELETE',
          success: ()=> {
            this.deleteChoreClient(id);
          }
        });
    }

    deleteChoreClient(id){
        var newChores = this.state.chores.filter((chore) => {
            return chore.id != id;
        });

        this.setState({ chores: newChores});
    }

    createChoreClient(chore){
        var newChores = this.state.chores.concat(chore);
        this.setState({chores: newChores});
    }

    render(){
        return(
            <div>
                <NewChore chores={this.state.chores} createChoreClient={this.createChoreClient.bind(this)}/>
                <AllChores chores={this.state.chores} handleUpdate={this.handleUpdate}  handleDelete={this.handleDelete} />
            </div>
        );
    }
};

export default Body;
