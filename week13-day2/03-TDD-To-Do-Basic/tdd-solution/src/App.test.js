import React from 'react';
import ReactDOM from 'react-dom';
//Here we're importing our components so we can test them. Enzyme is a testing library that allows us to duplicate or 'mock' the functionality of react methods without needing to render an entire page.
import App from './App';
import {shallow} from 'enzyme';
import ListBox from './childComponents/ListBox.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('is easy to use and behaves similarly to mocha/chai',()=>{
    expect(true).toEqual(true);
});

//When we instantiate the Listbox using enzyme, we can now access the state and component properties!
it('imports ListBox state correctly',()=>{
    let wrapper = shallow(<ListBox/>);
    expect(wrapper.instance().state).toHaveProperty('todoList');
});

//we're setting an initial value of completed:false on our list item. If the toggle works, we can expect the value to then be true after the toggle.
it('can toggle completion status of tasks',()=>{
    let wrapper = shallow(<ListBox/>);
    wrapper.instance().state.todoList[0].completed=false;
    wrapper.instance().toggleClick(0);
    expect(wrapper.instance().state.todoList[0].completed).toBe(true);
});

//Here we run a .every method on our todoList array and expecting the value of EVERYTHING in the list to have a value of completed:false. Because the clearTasks function should remove all done tasks.
it('clears completed tasks from todo list',()=>{
   let wrapper = shallow(<ListBox/>);
   wrapper.instance().clearTasks();
   let clearedList = wrapper.instance().state.todoList;
   let oldTasksCleared = clearedList.every((task)=>{
    return task.completed===false;
   });
   expect(oldTasksCleared).toBe(true);
});

//Here we are confirming that an item was added by comparing the length of the array both before adding the tast and after the task was added.
it('adds a new task to the list',()=>{
    let wrapper = shallow(<ListBox/>);
    let orgNumOfTasks = wrapper.instance().state.todoList.length;
    wrapper.instance().addNewTask('learn how to use enzyme and jest');
    expect(wrapper.instance().state.todoList.length).toBeGreaterThan(orgNumOfTasks);
});
