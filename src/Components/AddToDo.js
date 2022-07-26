import React from "react";
import {  toast } from 'react-toastify';

class AddToDo extends React.Component {

    state = {
        content: ''
    }

    handleInput = (event) => {
        this.setState({
            content: event.target.value
        });
    } 

    addToDo = () => {
        if(!this.state.content) {
            toast.warn("Missing content job")
            return ;
        }

        let Id = Math.floor(Math.random()*100);
        let todo = {
            id : Id,
            content: this.state.content
        }
        this.props.addJob(todo);
    }

    render() { 
       
        return (
            
            <div className= "add">
                <input type="text" placeholder="  Add Job"  onChange={this.handleInput} value={this.state.content}/> 
                <button className="button" onClick = {this.addToDo}>add</button>
            </div>
        );
    }
}

export default AddToDo;