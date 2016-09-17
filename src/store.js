import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { saveMetadata } from './persistence';

const createLoggingDispatch = (store) => {
    const rawDispatch = store.dispatch;
    if (!console.group) {
        return rawDispatch;
    }
    return (action) => {
        console.group(action.type);
        console.log('%c Previous state', 'color: gray', store.getState());
        console.log('%c Action', 'color: blue', action);
        const nextState = rawDispatch(action);
        console.log('%c Next state', 'color: green', store.getState());
        console.groupEnd(action.type);
        return nextState;
    };
};

const store = createStore(reducer);
store.subscribe(() => {
    saveMetadata(store.getState().users.metadata);
});
if (process.env.NODE_ENV !== 'production') {
    store.dispatch = createLoggingDispatch(store);
}

export default store;