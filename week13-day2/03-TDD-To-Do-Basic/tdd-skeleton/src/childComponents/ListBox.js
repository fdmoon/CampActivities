import React, { Component } from 'react';
import '../App.css';
import ListItem from './ListItem.js';
import InputBar from './InputBar.js'

class ListBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            todoList:[{task:'Live Long',completed:false},{task:'Prosper',completed:false},{task:'???',completed:true},{task:'PROFIT!',completed:false}]
        };
        this.toggleClick=(taskIndex)=>{
            console.log(taskIndex);
            console.log("TASK! Y U NO CHANGE COLOR?!");
        };
        this.clearTasks=()=>{
            console.log("This button should clear completed tasks. :(");
        };
        this.addNewTask=(taskText)=>{
            console.log(`${taskText} needs to be added to the list...`);
        }  
    };
    render(){
        return(
            <div className="listbox theme-color-alt flex-container-col flex-center-children">
                <h3>My To Do List</h3>
                {this.state.todoList.map((item,index)=>{
                    return <ListItem task={item.task} completed={item.completed} handleClick={this.toggleClick} key={index} taskIndex={index}/>
                })}
                <InputBar addTask={this.addNewTask} clearTasks={this.clearTasks}/>
            </div>
        )
    }
};

export default ListBox;
