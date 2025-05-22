import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import Login from './auth/Login'
import Register from './auth/Register'
import store from './redux/store'
import App from './App'
import Hero from './Components/Hero'


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='/' element = {<Hero />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)