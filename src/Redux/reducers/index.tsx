import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import articelreducer from "./articles";
import todos from "./Todo"
// Define persist config
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['articelsData'] // Add reducers you want to persist
};

// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({

    testData:articelreducer,
    TodoData:todos
});

// Define a type for the entire state tree
export type RootState = ReturnType<typeof rootReducer>;

// Create a persisted reducer
const persistedReducer = persistReducer<RootState, any>(persistConfig, rootReducer as any);
export default persistedReducer; // Export the persisted reducer for use in the store