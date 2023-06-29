import { combineReducers, configureStore  } from '@reduxjs/toolkit'
import artistListReducer from './artistList/artistListSlice'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

const combinedReducer = combineReducers({
    artistListReducer
  });

const masterReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, 
            artistListReducer: {
                lastTimeStamp: action.payload.artistListReducer.lastTimeStamp,
                artistList: action.payload.artistListReducer.artistList
            }
        }
        return nextState;
    } else {
    return combinedReducer(state, action)
  }
}

const makeStore = ()=> {
    return configureStore({
        reducer: masterReducer
    })
}
export const storeWrapper = createWrapper(makeStore, {debug:true});
export default makeStore;