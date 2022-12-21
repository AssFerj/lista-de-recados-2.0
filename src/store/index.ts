// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './modules/rootReducer';

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: true
// });

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules/rootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['users, login']
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducers,
  devTools: true
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
