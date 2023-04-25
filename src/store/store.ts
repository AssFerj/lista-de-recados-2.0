// import { configureStore } from '@reduxjs/toolkit';
// import tasksReducer from './modules/tasksSlice';
// import usersReducer from './modules/usersSlice';

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     users: usersReducer
//   }
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './modules/rootReducer';

const persistConfig = {
  key: 'rootTasks',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
