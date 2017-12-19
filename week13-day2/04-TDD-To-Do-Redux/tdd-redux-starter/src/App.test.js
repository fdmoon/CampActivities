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

//TODO : Write tests to confirm that your action creators are working and returning valid redux action objects.

});

describe('My Reducer',()=>{
  //remember, a reducer's job is to take incoming actions, and return a new state if applicable. Hence we need a starting state to compare against to confirm that our reducer is working.
  let initialState={};

  beforeEach(() => {
    initialState = {
      todoList:[
      {task:'done',completed:true},
      {task:'not done',completed:false}
      ]};
  });
  //with our test functions, the reducers "should" update the state. So expect the end result of the new state to be an updated value.

//TODO: Write tests for your reducers!

});

