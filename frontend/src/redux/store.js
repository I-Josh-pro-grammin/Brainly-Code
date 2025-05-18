import { configureStore } from '@reduxjs/toolkit'

// eslint-disable-next-line no-unused-vars
const rootReducer = (state = {}, action) => {
   return state;
}

const store = configureStore({
  reducer: rootReducer,
})

export default store