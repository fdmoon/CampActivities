import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//in order for us to test our actions and reducers, we must first import them.
import reducer from './reducers/reducer.js'
import { toggleClick, clearTasks, addNewTask } from './actions/actions.js'

const store = createStore(reducer);

describe("My Core Redux app",()=>{

  //providing initial state here so all 'it' blocks in this describe area have access, we'll modify it later. We are doing this because we don't want our tests to accidentally modify our application state.
  let initialState={};

  //beforeEach behaves the same way as the mocha equivalent.
  beforeEach(() => {
    initialState = {
      todoList:[
      {task:'done',completed:true},
      {task:'not done',completed:false}
      ]};
  });

  //Small difference here, but because we're using redux we must provide a store to avoid having the app crash.
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>, div);
  });

  //Self Explanatory!
  it('has an easy to use testing setup that behaves similarly to mocha/chai',()=>{
      expect(true).toEqual(true);
  });

  it('has a reducer with a default case that returns original unchanged state if no matching case is found',()=>{
    let unhandledAction = {
      type:'BEES??',
      payload:'NOPE!'
    }
    //Remeber, our reducer takes two arguments. The initial state, and the action to process.
    expect(reducer(initialState,unhandledAction)).toEqual(initialState);
  });

});

//We're separating this test suite into multiple sections for readability. It would work the same was with a single describe block.
describe('My Actions',()=>{

  //remember, action creator return actions. Actions in redux are just JS objects! All 3 of these tests perform similarly.
  it('can return a new task object',()=>{
      expect(addNewTask('CONSUME DELICIOUS CAFFEINATED COVFEFE')).toEqual({
          type:'ADD_NEW_TASK',
          payload:'CONSUME DELICIOUS CAFFEINATED COVFEFE'
      });
  });

  it('can return a toggle click object',()=>{
    expect(toggleClick(3)).toEqual({
      type:'TOGGLE_CLICK',
      payload:3
    });
  });

  it('can return an clear task object',()=>{
    expect(clearTasks()).toEqual({
      type:'CLEAR_TASKS',
      payload:''
    })
  });

});

describe('My Reducer',()=>{
  //a reducer's job is to take incoming actions, and return a new state if applicable. Hence we need a starting state to compare against to confirm that our reducer is working.
  let initialState={};

  beforeEach(() => {
    initialState = {
      todoList:[
      {task:'done',completed:true},
      {task:'not done',completed:false}
      ]};
  });

  //with our test functions now, we send actions, which "should" update the state. So we are expecting the end result of the new state to be an updated value.
  it('can add a new item to the todo list',()=>{
    let newTask = {
      type:'ADD_NEW_TASK',
      payload:'open that email from melissa with list.doc.exe'
    }
    expect(reducer(initialState,newTask)).toEqual(
      {todoList:[
      {task:'done',completed:true},
      {task:'not done',completed:false},
      {task:'open that email from melissa with list.doc.exe',completed:false}]}
      );
  });

  it('can clear completed tasks',()=>{
      expect(reducer(initialState,{type:'CLEAR_TASKS',payload:''})).toEqual(
        {todoList:[
          {task:'not done',completed:false}
        ]});
  });

  //Also yes, you can have multiple 'expect' blocks in a single 'it' block.
  it('can toggle a task\'s completion status',()=>{
    expect(reducer(initialState,{type:'TOGGLE_CLICK',payload:0})).toEqual({todoList:[
        {task:'done',completed:false},
        {task:'not done',completed:false}
      ]});
    expect(reducer(initialState,{type:'TOGGLE_CLICK',payload:1})).toEqual({todoList:[
        {task:'done',completed:false},
        {task:'not done',completed:true}
      ]});
  });

});

