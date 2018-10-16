
        import { combineReducers }                      from 'redux';
        import { reducer as Form }                      from 'redux-form';

        import \iup from './reducer_\iup' 
import signup from './reducer_signup' 
import live from './reducer_live'

        const rootReducer = combineReducers({
            \iup : \iup 
,signup : signup 
,live : live 

        })

        export default rootReducer;

        