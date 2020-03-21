import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import {createBrowserHistory} from "history";

const loggerMiddleware = createLogger();

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        // Ignore write errors;
    }
};
export const history = createBrowserHistory();

const persistedState = loadState();
export const store = createStore(
    rootReducer(history),
    persistedState,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            routerMiddleware(history),
            loggerMiddleware
        ),
    ),
);

store.subscribe(() => {
    saveState(store.getState());
});
