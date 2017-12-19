//We're setting these as constant values so we can reference the variable rather than typing the string. This guarantees that if there's ever a typo, an error will be thrown. Otherwise there would be silent failure (because no cases in our reduer would match and the default case would be returned)
const TOGGLE_CLICK = 'TOGGLE_CLICK';
const CLEAR_TASKS = 'CLEAR_TASKS';
const ADD_NEW_TASK = "ADD_NEW_TASK";

//Remember, we can do multiple exports! Just don't use 'export default', and do direct named exports instead. 

//TODO : Create and return valid redux action objects!
export const addNewTask = (taskText)=>{
  return {
  }
}

export const toggleClick = (taskIndex)=>{
  return {
  }
}

export const clearTasks = ()=>{
  return {
  }
}
