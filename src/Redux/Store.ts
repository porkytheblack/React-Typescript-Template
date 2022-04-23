import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { RootReducer } from "./reducers.redux";




const middleware = [thunk]
const composeEnhancers  = typeof window == 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware))

export const store = createStore(RootReducer, enhancer)