import { FaFacebook, FaGoogle } from 'react-icons/fa'
import BrainlyCodeIcon from '../Components/BrainlyCodeIcon'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
    <div className='bg-bg1 text-white h-screen w-full bg-center pt-2 items-center bg-cover'>
      <header>
        <div className="">
           <h1 className="text-center heading font-bold text-2xl font-fredoka">Welcome Back</h1>
           <p className="text-center text-sm">Sign in to your Brainly code account</p>
           <div className="rounded bg-opacity-40 text-gray-300 pb-1 mt-2   m-auto bg-[#13121C] items-center text-center w-[25%]">
               <form action="" className="items-center p-5">
                <input type="text" id="name" name="username" className="block w-full m-auto border-blue-300 text-gray-300 border-b-2  bg-transparent text-[1.2rem] p-2  focus:border-blue-700 focus:outline-none  " placeholder="Name" />
                <input type="email" id="name" name="username" className="block mt-3 w-full m-auto border-blue-300 text-gray-300 border-b-2  bg-transparent text-[1.2rem] p-2  focus:border-blue-700 focus:outline-none focus:active:border-blue-400 " placeholder="Email" />
                <input type="password" id="name" name="username" className="block mb-5 mt-3 w-full m-auto border-blue-300 text-gray-300 border-b-2 bg-transparent text-[1.2rem] p-2  focus:border-blue-700 focus:outline-none focus:active:border-blue-400 " placeholder="Password" />
                <input type="checkbox" name="terms" id="terms" required  className="bg-[#13121C] mr-2 "/>
                <label htmlFor="terms" className="text-xs">I agree the <span className="text-blue-400">Terms of service </span> and <span className="text-blue-400">Privacy Policy</span></label>
                <button className="bg-blue-400 mt-2 px-8 rounded hover:bg-gradient-to-l hover:from-blue-700 hover:to-blue-500 bg-gradient-to-l from-blue-600 to-blue-400 py-2">Log into account</button>
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
            <p className='text-sm'>Making coding fun and accessible for the next generation of developers</p>
          </div>
          <div className=''>
            <h1 className='text-xl font-bold '>Learn</h1>
            <p><a className='text-sm' href="/">Courses</a></p>
            <p><a className='text-sm' href="/">Playgrounds</a></p>
            <p><a className='text-sm' href="/">Challenges</a></p>
            <p><a className='text-sm' href="/">Projects</a></p>
          </div>
          <div className=''>
            <h1 className="text-xl font-bold">Resources</h1>
            <p><a className='text-sm' href="/">Blog</a></p>
            <p><a className='text-sm' href="/">Documentations</a></p>
            <p><a className='text-sm' href="/">FAQ</a></p>
            <p><a className='text-sm' href="/">Support</a></p>
          </div>
          <div className=''>
            <h1 className="text-xl font-bold">Company</h1>
            <p><a className="text-sm" href="/">About us</a></p>
            <p><a className="text-sm" href="/">Careers</a></p>
            <p><a className="text-sm" href="/">Privacy Policy</a></p>
            <p><a className="text-sm" href="/">Terms of service</a></p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Login