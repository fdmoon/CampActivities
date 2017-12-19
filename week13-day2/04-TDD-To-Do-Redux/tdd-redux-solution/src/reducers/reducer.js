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
    //a switch statement is a conventional way to process your actions and match them to the correct reducer function. In each of our cases, we're creating a separate array copy of the state todoList to avoid changing the original.
  switch (action.type) {
    case 'ADD_NEW_TASK':
        let newList = [...state.todoList];
        if(action.payload!==''){
            newList.push({task:`${action.payload}`,completed:false});
        }
        return{...state, todoList:newList}
    case 'CLEAR_TASKS':
        let newList2 = [...state.todoList];
        return{...state,todoList:newList2.filter(task=>task.completed===false)}
    case 'TOGGLE_CLICK':
        let newList3 = [...state.todoList];
        if(newList3[action.payload].completed===true){
            newList3[action.payload].completed=false;
        }else{
            newList3[action.payload].completed=true;
        }
        return{...state, todoList:newList3}
    default:
      return state;
  }
}
export default todos