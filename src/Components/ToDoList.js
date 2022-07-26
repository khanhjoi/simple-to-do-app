import React from "react";
import AddToDo from "./AddToDo";
import RenderList from "./RenderList";
import {  toast } from 'react-toastify';


class ToDoList extends React.Component {

    state = {
        toDoList : [
            {id: 1, content: 'do some thing 1', },
            {id: 2, content: 'do some thing 2', },
            {id: 3, content: 'do some thing 3',},
        ],
        editToDo: '',
    }

    addJob = (job) => {
        let currentJob = this.state.toDoList;
        let newListJob = [...currentJob, job];
        this.setState({
            toDoList: newListJob,
        });
        toast.success("add job success!");
    }

    HandleDeleteJob = (todo) => {
        let currentJob = this.state.toDoList;
        let newArr = [];
        currentJob.map(function(item) {
            if(item.id !== todo.id) {
                newArr.push(item);
            }
            return newArr;
        });
        this.setState({
            toDoList: newArr,
        });
        toast.success("Delete success!");
    }

    HandleEditJob = (todo) => {
        let checkObject = Object.keys(this.state.editToDo).length === 0;
        
        // save todo
        if(checkObject === false && this.state.editToDo.id === todo.id) {
            let CopytoDoList = this.state.toDoList;

            // get id edit to do
            let getId;
            for (let i = 0; i < CopytoDoList.length; i++) {
                if(CopytoDoList[i].id === todo.id) {
                    getId = i;
                }
            }
    
            CopytoDoList[getId] = {id: getId + 1, content: this.state.editToDo.content};

            this.setState({
                toDoList : CopytoDoList,
                // set save to edit
                editToDo : '',
            })
            
            return ;
        }

        this.setState({
            editToDo: todo,
        })
    }

    HandleInput = (event) => {
        let editTodoCopy = {...this.state.editToDo}
        editTodoCopy.content = event.target.value;
        this.setState({
            editToDo: editTodoCopy,
        })
    }

    render() {
        
        let [ToDoList, editToDo] = [this.state.toDoList, this.state.editToDo];
        // check edit todo 
        let checkObject = Object.keys(editToDo).length === 0;
        return(
            <div className="list">
                <h2 className="title">TO DO LIST</h2>

                <AddToDo  toDoList = {this.state.toDoList} addJob = {this.addJob} />
                
                <ul className= "to-do-list">

                    <RenderList ToDoList = {ToDoList} 
                        HandleDeleteJob = {this.HandleDeleteJob} 
                        HandleEditJob = {this.HandleEditJob}
                        CheckObject = {checkObject} 
                        editToDo = {editToDo} 
                        handleInput = {this.HandleInput}
                    />

                </ul>
            </div>
        );
    };

}

export default ToDoList;