import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { RootReducer } from "./reducers.redux";





const middleware = [thunk]
const composeEnhancers  = typeof window == 'object' && (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware))

export const store = createStore(RootReducer, enhancer)
