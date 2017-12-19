import React, { Component } from 'react';
import '../App.css';
import ListItem from './ListItem.js';
import InputBar from './InputBar.js';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleClick, clearTasks, addNewTask} from '../actions/actions.js'

class ListBox extends Component{
    //because our <Provider> tag in index.js wraps all our react code, these redux action creators are available as props! This allows us to separate our component specific functionality from functionality that be might want to provide to multiple components!
    constructor(props){
        super(props);
        this.addNewTask = props.addNewTask;
        this.clearTasks = props.clearTasks;
        this.toggleClick = props.toggleClick;
    };
    render(){
        return(
            <div className="listbox theme-color-alt flex-container-col flex-center-children">
                <h3>My To Do List</h3>
                {this.props.todoList.map((item,index)=>{
                    return <ListItem task={item.task} completed={item.completed} handleClick={this.toggleClick} key={index} taskIndex={index}/>
                })}
                <InputBar addTask={this.addNewTask} clearTasks={this.clearTasks}/>
            </div>
        )
    }
};

//We're importing our action creators at the top, but this is the line that allows our action creators to actually dispatch to the reducers once this is connected.
function mapDispatchToProps(dispatch){
  return bindActionCreators({ addNewTask,clearTasks,toggleClick }, dispatch);
};

//Our initial state we declare in our reducers can be imported into this component here. We're taking the initial state from the redux store and making it available to this component as props.
function mapStateToProps(state) {
  return {todoList:state.todoList};
}

//And here we're connecting to the redux store. 
export default connect(mapStateToProps, mapDispatchToProps)(ListBox);
