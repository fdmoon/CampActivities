//Creating an initial state for the first load.
const initialState = {
            todoList:[
            {task:'Live Long',completed:false},
            {task:'Prosper',completed:false},
            {task:'???',completed:true},
            {task:'PROFIT!',completed:false}
            ]};
//using default params to set state to the above initial state if a state is not provided.
const todos = (state = initialState, action) => {
    //a switch statement is a conventional way to process your actions and match them to the correct reducer function. 
    //TODO : Write your reducer cases here!
  switch (action.type) {
    case 'ADD_NEW_TASK':
        return state
    case 'CLEAR_TASKS':
        return state
    case 'TOGGLE_CLICK':
        return state
    default:
      return state;
  }
}
export default todos