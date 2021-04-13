import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import user from "@/store/reducers/user";
import nav from '@/store/reducers/nav'
import thunk from "redux-thunk";
import {createLogger} from 'redux-logger'
import {routerMiddleware} from 'react-router-redux';

// 创建在redux中可以进行路由跳转的中间件
let createHistory = require('history').createHashHistory;
let history = createHistory();   // 初始化history
let routerWare = routerMiddleware(history);

// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = undefined;
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
// 打印日志
const loggerMiddleware = createLogger()

// 应用中间件
const enhancer = composeEnhancers(
    applyMiddleware(thunk, loggerMiddleware, routerWare),
    // other store enhancers if any
);

// 整合reducer
const rootReducer = combineReducers({
    user,
    nav
})

const store = createStore(rootReducer, enhancer);

export default store;