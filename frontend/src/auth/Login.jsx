import { FaFacebook, FaGoogle } from 'react-icons/fa'
import BrainlyCodeIcon from '../Components/BrainlyCodeIcon'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLoginMutation } from '../redux/api/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials } from '../redux/Features/authSlice'
import { toast } from 'react-toastify'
import Loader from '../Components/ui/Loader'


const Login = () => { 
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, {isLoading}] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if( userInfo ) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]
);

  const submitHandler = async (e) => {
    e.preventDefault();

  try {
    const res = await login({ email, password }).unwrap();
    console.log(res);
    dispatch(setCredentials({ ...res }));
    navigate(redirect);
  } catch (error) {
    toast.error(error?.data?.message || error.message);
  }

  }

  return (
    <>
    <div className='bg-[#06022bf1] text-white w-full h-screen bg-center pt-2 items-center bg-cover'>
      <header>
        <div className="">
           <h1 className="text-center heading font-bold text-2xl font-fredoka">Welcome Back</h1>
           <p className="text-center text-sm">Sign in to your Brainly code account</p>
           <div className="rounded bg-opacity-40 text-gray-300 pb-1 mt-2 h-[50%]  m-auto bg-[#13121C] items-center text-center w-[25%] md:w-[25%] sm:w-[60%]">
               <form action="" onSubmit={submitHandler} className="items-center p-5">
                <input type="email" id="email" name="email" onChange={e => setEmail(e.target.value)} className="block mt-3 w-full m-auto border-blue-300 text-gray-300 border-b-2  bg-transparent text-[1.2rem] p-2  focus:border-blue-700 focus:outline-none focus:active:border-blue-400 " placeholder="Email" />
                <input type="password" id="password" name="password" onChange={e => setPassword(e.target.value)} className="block mb-5 mt-3 w-full m-auto border-blue-300 text-gray-300 border-b-2 bg-transparent text-[1.2rem] p-2  focus:border-blue-700 focus:outline-none focus:active:border-blue-400 " placeholder="Password" />
                <input type="checkbox" name="terms" id="terms"  className="bg-[#13121C] mr-2 "/>
                <label htmlFor="terms" className="text-xs">I agree the <span className="text-blue-400">Terms of service </span> and <span className="text-blue-400">Privacy Policy</span></label>
                <button disabled={isLoading} type='submit' className="bg-blue-400 mt-2 px-8 rounded hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-500 bg-gradient-to-r from-[#366665] to-[#18caca] py-2">{isLoading ? "Loging in": "Log into account"} </button>
                <p>Or Continue with</p>
              </form>
              <button className='bg-blue-950 p-2 rounded mr-10'>
                <FaGoogle className='inline mr-1'/>
                Google
              </button>
              <button className='bg-blue-950 p-2 rounded ml-8'>
                <FaFacebook className='inline mr-1'/>
                Facebook
              </button>
              <p className='my-4'>Dont have an account? <Link to={'/register'} className='ml-3 text-blue-500' >Sign up</Link></p>
           </div>
        </div>
      </header>
      <footer>
        <div className='bg-[#040421] grid grid-cols-4 bg-opacity-60 rounded-lg p-2 h-[10%] w-[80%] m-auto '>
          <div className='mr-10'>
            <BrainlyCodeIcon />
            <p className='text-md'>Making coding fun and accessible for the next generation of developers</p>
          </div>
          <div className=''>
            <h1 className='text-xl font-fredoka '>Learn</h1>
            <p><a className='text-md' href="/">Courses</a></p>
            <p><a className='text-md' href="/">Playgrounds</a></p>
            <p><a className='text-md' href="/">Challenges</a></p>
            <p><a className='text-md' href="/">Projects</a></p>
          </div>
          <div className=''>
            <h1 className="text-xl font-fredoka">Resources</h1>
            <p><a className='text-md' href="/">Blog</a></p>
            <p><a className='text-md' href="/">Documentations</a></p>
            <p><a className='text-md' href="/">FAQ</a></p>
            <p><a className='text-md' href="/">Support</a></p>
          </div>
          <div className=''>
            <h1 className="text-xl font-fredoka">Company</h1>
            <p><a className="text-md " href="/">About us</a></p>
            <p><a className="text-md " href="/">Careers</a></p>
            <p><a className="text-md " href="/">Privacy Policy</a></p>
            <p><a className="text-md " href="/">Terms of service</a></p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Login