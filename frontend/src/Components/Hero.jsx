import { Link } from "react-router-dom";
import BrainlyCodeIcon from "./BrainlyCodeIcon";
import { FloatingNav } from "./ui/FloatingNav";
import Introductory from "./ui/Introductory";
import { TextGenerateEffect } from "./ui/TextGenerate";

const Hero = () => {
  const navItems = [
    { name: "Home", link: "/", icon: "🏠" },
    { name: "Courses", link: "/courses", icon: "📚" },
    { name: "Playground", link: "/playground", icon: "🎮" },
    { name: "Challenges", link: "/challenges", icon: "🏆" }
  ];

  return (
    <div className="bg-[#070045] text-gray-50 p-7 h-screen w-full">
      <section id="header" className="">
        <header className="flex text-white justify-between">
          <FloatingNav navItems={navItems} />
          <BrainlyCodeIcon className="ml-7"/>
          <ul className="ml-auto">
            <li className="font-semibold inline text-gray-300">
              <Link to="/login">Login</Link>
            </li>
            <li className="font-semibold inline bg-gradient-to-r from-[#00ffff] rounded-md ml-5 to-purple-400 px-5 py-2 text-gray-300">
              <Link to="/register">Signup</Link>
            </li>
          </ul>
        </header>
        <Introductory />
        <div className=' inline w-[30rem]  bg-[#36368b] p-3'>
          <div className='inline bg-[#5959b9]'>
            <TextGenerateEffect words={` // Welcome to fun
            // function learnToCode() {
            
                const skills = ["HTML", "CSS"];
            
                const fun = true;
            
                if (fun) {
            return "Learning to code is amazing.";
            
                }
            }
            
            // Start your code
            
            learnToCode();`} className={"text-sm"} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;