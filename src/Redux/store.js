import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import userreducer from './userSlice'
import productreducer from './productSlice'
import eventreducer from './eventSlice'
import workshopreducer from './workshopSlice'
import allusersreducer from './allusersSlice'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const rootReducer = combineReducers({
    user: userreducer,
    product: productreducer,
    event: eventreducer,
    workshop: workshopreducer,
    users: allusersreducer,

})

const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export default store
