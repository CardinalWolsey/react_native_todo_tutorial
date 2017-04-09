import {createStore} from 'redux';

const defaultState = {
  todos: [
    {
      task: 'Initial todo in store',
    },
  ],
  filter: 'pending',
};

function todoStore(state = defaultState, action) {
  if(action.type === 'ADD_TODO') {
    return Object.assign({}, state, {
      todos: state.todos.concat([{
        task: action.task,
      }]),
    });
  } else if(action.type === 'DONE_TODO') {
    return Object.assign({}, state, {
      todos: state.todos.filter(todo => todo !== action.todo),
    });
  } else if(action.type === 'TOGGLE_STATE') {
    const filter = state.filter === 'pending' ? 'done' : 'pending';
    return Object.assign({}, state, {
      filter,
    });
  } else {
    return state;
  }
}

export default createStore(todoStore);
