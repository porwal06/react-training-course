import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, show: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        toggle(state){
            state.show = !state.show;
        },
        counter(state, action){
            state.counter = (action.payload.op == 'increase') ? state.counter + action.payload.value : state.counter - action.payload.value;
        }
    },
}
);

const initialAuthState = {authenticate: false};
const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.authenticate = true;
        },
        logout(state){
            state.authenticate = false;
        }
    }
});

const store = configureStore({
    reducer: {
        counterStore: counterSlice.reducer,
        authStore: authSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;