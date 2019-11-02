import React, { Component } from "react";


class Chore extends Component{
    constructor(props){
        super(props);
        this.state = {editable: false, chore: {title: '', amount: ''}, editedFields: { title: false, amount: false}};
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }    
    
    handleEdit(){
        if(this.state.editable){
            var id = this.props.chore.id;
            var title=   this.state.editedFields.title ? this.state.chore.title : this.props.chore.title;
            var amount = this.state.editedFields.amount ? this.state.chore.amount : this.props.chore.amount;
            var chore = {id: id, title: title, amount: amount};
            this.props.handleEdit(chore);
        }
        var newState = this.state;
        newState.editable = !this.state.editable;
        this.setState(newState);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        var newState = this.state;
        newState.editable = this.state.editable;
        newState.chore[title] = value;
        newState.editedFields[title] = true;
        this.setState(newState);
    }

    render(){
        return(
        <div>
            {
                this.state.editable ? 
                [
                    <br/>,<label>Title:</label>,<br/>,
                    <input type='text' name="name" onChange={this.handleChange} defaultValue={this.props.chore.title} />,<br/>,
                    <input type='number' name="amount" onChange={this.handleChange} defaultValue={this.props.chore.amount} />,<br/>,
                    <button onClick={this.handleEdit}>Submit</button>
                ]: 
                [
                    <h3>{this.props.chore.title}</h3>,
                    <p>{this.props.chore.amount}</p>,
                    <button onClick={this.handleEdit}>Edit</button>
                ]
            }
            <button onClick={this.props.handleDelete}>Delete</button>
        </div>
        );
    }
}

export default Chore;