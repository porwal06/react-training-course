// import redux library
const redux = require('redux');

// Create redux central state store passing as reducer function
const store = redux.createStore(counterReducer);

//subscribe redux store
store.subscribe(counterSubscriber);

// Reducer function, which take as old state & dispatch action as input, it return new state
function counterReducer(state = {counter:0}, action)
{
    if(action.type == 'increment') {
        return {
            counter: state.counter+1
        };
    }
    return state;
}
// Subscriber function
function counterSubscriber(){
    newState = store.getState();
    console.log(newState);
}
// Dispatch function, we can write logic under reducer function according to dispatch "type" value
store.dispatch({type: 'increment'}); // Return { counter: 1 }
store.dispatch({type: 'increment'}); // Return { counter: 2 }
store.dispatch({type: ''}); // Return { counter: 2 }
