
        //----------------------------------------------------------------------------------------------------------
        //Declariations and libraries
        //----------------------------------------------------------------------------------------------------------
        import React                                            from 'react';
        import ReactDOM                                         from 'react-dom';
        import { BrowserRouter as Router, Switch, Route }       from 'react-router-dom';
        import { Provider }                                     from 'react-redux';
        import { createStore, applyMiddleware }                 from 'redux';
        import promise                                          from 'redux-promise';
        import createMemoryHistory                              from 'history/createMemoryHistory';
        import App                                              from './container/app.jsx';
       
        //----------------------------------------------------------------------------------------------------------
            //Parent Components
        //----------------------------------------------------------------------------------------------------------
        
        import search from './components/search.jsx'
import signup from './components/signup.jsx'
import menu from './components/menu.jsx'
import history from './components/history.jsx'
import edit_profile from './components/edit profile.jsx'
import back_action from './components/back_action.jsx'
import signup from './components/signup.jsx'
import live from './components/live.jsx'
       
        //----------------------------------------------------------------------------------------------------------
        //Reducer
        //----------------------------------------------------------------------------------------------------------
        import store                                            from './reducers/index.jsx';

        //----------------------------------------------------------------------------------------------------------
            //Middleware setup
        //----------------------------------------------------------------------------------------------------------
        const history                                 = createMemoryHistory();
        const createStoreWithMiddleware               = applyMiddleware(promise)(createStore);

        //----------------------------------------------------------------------------------------------------------
        //Routes Setup
        //----------------------------------------------------------------------------------------------------------
        ReactDOM.render(
            <Provider store={createStoreWithMiddleware(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        
                <Router basename="/" history={ history } >
                    <Switch>
                        <Route path="/" component={search} />
                        <Route path="/search" component={search} /> 
<Route path="/signup" component={signup} /> 
<Route path="/menu" component={menu} /> 
<Route path="/history" component={history} /> 
<Route path="/edit_profile" component={edit_profile} /> 
<Route path="/back_action" component={back_action} /> 
<Route path="/signup" component={signup} /> 
<Route path="/live" component={live} /> 

                    </Switch>
                </Router>
            </Provider>,
            document.getElementById('app') || document.createElement('div')
          );
        