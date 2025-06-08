import React from 'react'
import BrainlyCodeIcon from './BrainlyCodeIcon';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../redux/api/userSlice';
import { Logout } from '../redux/Features/authSlice';
import { toast } from 'react-toastify';
import TextGenerateEffect from './ui/TextGenerate';
import { BackgroundGradientDemo } from './ui/BackGroundDemo';
import { FloatingNav } from './ui/FloatingNav';

export default function HomePage() {
  const navItems = [
    { name: "Courses", link: "/", icon: "📚" },
    { name: "Playground", link: "/playground", icon: "🎮" },
    { name: "Challenges", link: "/challenges", icon: "🏆" },
    { name: "Community", link: "/community", icon: "👤"}
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ logoutApiCall ] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(Logout());
      navigate('welcome/login');
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  }

  return (
    <div className='bg-[#070045] opacity-90'>
      <div className=' border-gray-300 py-6 rounded-none border-b-2'>
        <header className="flex text-white justify-between">
            <FloatingNav navItems={navItems} />
            <BrainlyCodeIcon className="ml-7"/>
            <ul className="ml-auto">
              <li className="font-semibold inline text-gray-300">
                  <Link to="/profile">
                    <button >Profile</button>
                  </Link>
              </li>
              <li className="font-semibold inline bg-gradient-to-r from-[#00ffff] rounded-md ml-5 to-purple-400 px-5 py-2 text-gray-300">
                <button onClick={logoutHandler}>
                  <Link to="">
                   Sign out
                   </Link>
                </button>
              </li>
            </ul>
        </header>
      </div>
      
      <section>
        <div className=' mt-[2rem] w-[50%] ml-[24rem]'>
          <div className='text-center'>
            <span className='text-[#00ffee] ml-5 text-5xl font-bold'>Interactive </span>
            <TextGenerateEffect className="text-gray-500 text-4xl font-bold inline" words={' Coding Courses'} />
          </div>
          <div className="text-center text-gray-500">
            <p >
              Learn to code through hands-on projects, interactive exercises, and real-world applications. 
              Start your programming journey today!
            </p>
        </div>
        </div>
      </section>
      
      <section className='mt-[3rem]'>
        <div className='mb-7 text-gray-300 pl-[15rem]'>
          <button className='p-2 border hover:border-green-200 mr-[10rem] grid-cols-3 border-gray-500 rounded-md'>All Courses</button>
          <button className='p-2 hover:border mr-[10rem] grid-cols-3 rounded-md'>Begginer</button>
          <button className='p-2 hover:border mr-[10rem] grid-cols-3 rounded-md'>Intermediate</button>
          <button className='p-2 hover:border mr-[10rem] grid-cols-3 rounded-md'>Advanced</button>
        </div>
        <div className="flex mt-6">
         <div>
           <BackgroundGradientDemo />
           <BackgroundGradientDemo />
           <BackgroundGradientDemo />
         </div>
         <div>
           <BackgroundGradientDemo />
           <BackgroundGradientDemo />
           <BackgroundGradientDemo />
         </div>
        </div>
      </section>
      <footer>
        <div className='bg-[#112043]  grid grid-cols-4 rounded-lg bg-opacity-40 p-2 h-[10%] w-[80%] m-auto '>
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
  )
}
