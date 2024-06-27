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



import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/loginSlice"


export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;