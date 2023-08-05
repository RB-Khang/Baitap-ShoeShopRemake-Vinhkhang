import { createStore } from 'redux'
import { rootReducer } from './rootReducer'

import {configureStore} from '@reduxjs/toolkit'


// export const store = configureStore({
//     reducer: rootReducer,
//     devTools: true
// })
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
