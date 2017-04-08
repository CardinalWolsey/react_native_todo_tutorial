import {createStore} from 'redux';

const defaultState = {
  todos: [
    {
      task: 'Initial todo in store',
    },
  ],
};

function todoStore(state = defaultState, action) {
  if(action.type === 'ADD_TODO') {
    return Object.assign({}, state, {
      todos: state.todos.concat([{
        task: action.task,
      }]),
    });
  } else {
    return state;
  }
}

export default createStore(todoStore);
