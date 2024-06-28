// // import { configureStore } from "@reduxjs/toolkit"
// // import loginSlice from "../features/loginSlice"

// // export const store = configureStore({
// //     reducer: {
// //         login:loginSlice,
// //     }
// // })

// // export type RootState = ReturnType<typeof store.getState>
// // export type AppDispatch = typeof store.dispatch

// import { configureStore } from "@reduxjs/toolkit";
// import loginSlice from "../features/loginSlice";

// export const makeStore = () => {
//   return configureStore({
//     reducer: {
//       login: loginSlice,
//     },
//   });
// };


// // export type RootState = ReturnType<typeof makeStore()["getState"]>;
// // export type AppDispatch = typeof store.dispatch;



// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>;
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];



import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/loginSlice"

import storage from 'redux-persist/lib/storage';
import { persistReducer,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,persistStore } from 'redux-persist';
// import {  } from 'redux-persist';

const rootReducer = combineReducers({
  login: loginSlice,
})
const persistConfig = {
  key: "stock-auth",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


//token li bir axios olmayacak
// fetch kullaniyoruz suan tokeni globalden alip fetche verecez gibi hazir methodmu yapsak herseferinde mi versek.
