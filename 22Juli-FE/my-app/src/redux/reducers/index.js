// import { combineReducers} from 'redux';
// import TimelinesReducer from './timelines';
// import UsersReducer from './users';

// export default combineReducers({
//     TimelinesReducer, UsersReducer
// })

import job from "./job";

const initialState = {
    getJoblResult: false,
    getJobLoading: false,
    getJobError: false,

    getDetailJobResult: false,
    getDetailJobLoading: false,
    getDetailJobError: false,

    listJobLoading: false,
    listJobHasNext: false,
    listJobError: false
}

const combineReducers = (reducers) => { 
    return (state, action) => { 
        return Object.keys(reducers).reduce((acc, prop) => { 
            return {
                ... acc, 
                ... reducers[prop]({ [prop]: acc[prop] }, action),
            };
        }, state);
    };
};

const appReducers = combineReducers({
    job,
});

export { initialState, combineReducers, appReducers };