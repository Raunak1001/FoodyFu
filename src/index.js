/**
 * Created by raunak on 4/6/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise'
import HomePage from './components/HomePage'
import FoodShow from './components/FoodShow'
import Cart from './components/Cart'


const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleWare(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/:foodType/:foodTime" component={ FoodShow }/>
                    <Route path="/MyCart" component={ Cart }/>
                    <Route path="/" component={ HomePage}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'))