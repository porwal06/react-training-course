import { createStore } from "redux";
const counterReducer = (state={counter:0, show:true}, action) => {
    if(action.type == 'increment') {        
        return {
            counter: state.counter+1,
            show: state.show
        }
    }
    if(action.type == 'decrement') {
        return {
            counter: state.counter-1,
            show: state.show
        }
    }
    if(action.type == 'toggle') {
        return {
            counter: state.counter,
            show: !state.show
        }
    }
    if(action.type == 'counter') {
        return {
            counter: (action.op == 'increase') ? state.counter + action.value : state.counter - action.value,
            show: state.show
        }
    }
    return state;

}
const store = createStore(counterReducer);

export default store;