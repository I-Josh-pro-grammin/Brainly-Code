import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import Login from './auth/Login'
import Register from './auth/Register'
import store from './redux/store'
import App from './App'
import { Hero } from './Components/Hero'
import AdminRoutes from './AdminRoutes'
import Navbar from './Admin/Navbar'
import AllUsers from './Admin/AllUsers'
import UpdateUser from './Components/UpdateUser'
import Home from './Home'
import HomePage from './Components/HomePage'
import NewUser from './User'
import Challenges from './Components/Challenges'
import PlayGround from './Components/PlayGround'
// import { GoogleOAuthProvider} from '@react-oauth/google'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='welcome' element={<NewUser />} >
        <Route path='' element = {<Hero />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      
      {/* Admin  */}
      <Route path='teacher' element={<AdminRoutes />}>
        <Route path='users' element={<AllUsers />} />
        <Route path='' element={<Navbar />} />
      </Route>
      {/* <Route path='admin' element={<Navbar />}/>
      <Route path='admin/users' element={<AllUsers />} /> */}

      <Route path='' element={<Home />} >
        <Route path="profile"  element={<UpdateUser />} />
        <Route path='' element={<HomePage />} />
        <Route path='challenges' element={<Challenges />} />
        <Route path='playground' element={<PlayGround />} />
      </Route>

    </Route>

  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)