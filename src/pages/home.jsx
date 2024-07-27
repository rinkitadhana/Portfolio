import { Link } from "react-router-dom";
import Project from "./project";
import Skills from "./skills";
const Home = () => {


    return (
        <div className=" text-gray-700">
            {/* HEADER START */}
            <div>
            <h1 className=" text-center mt-14 md:text-6xl text-4xl font-bold">Hi, I am <span className="text-[#2978b5]" >Rinkit Adhana.</span></h1> 
          <h3 className=" text-center mt-6 md:text-3xl text-2xl font-bold">A Full Stack Engineer.</h3>
          <div className=" md:px-[30%] px-[8%] mt-8 justify-center text-justify text-[1.05em]">
          <p1>Hi there! I'm Rinkit Adhana, a second-year student at Maharaja Agrasen Institute of Technology. I'm all about full-stack development, especially with MERN. I'm also into Data Structure AND Algorithms(DSA) and software development. Take a look around my portfolio and see the projects I have been working on!</p1>
          </div>
          <div className="flex justify-center gap-3  mt-12">
            <p className=" border-2 text-[#2978b5] border-[#2978b5] w-fit py-2 px-3 hover:bg-[#2978b5] hover:text-white cursor-pointer ">resume</p>
            <div className="flex flex-row gap-4 align-middle justify-center py-2 text-lg">
                <a href="https://github.com/rinkitadhana" target="_blank"><i class="fi fi-brands-github"></i></a>
                <a href="https://www.linkedin.com/in/rinkitadhana" target="_blank"><i class="fi fi-brands-linkedin"></i></a>
                <a href="https://x.com/rnkktt" target="_blank"><i class="fi fi-brands-twitter-alt"></i></a>
                <a href="https://leetcode.com/u/therinkit" target="_blank"><img className=" h-[1.23rem] fill-black" src="../../../public/logo/leetcode.svg" /></a>
            </div>
            
          </div>        
            </div>
            {/* HEADER ENDS */}

            {/* PROJECT SECTION STARTS */}
            <div className="my-16">
                <div className=" text-center font-bold text-3xl mb-8">
                    <h1>PROJECTS</h1>
                </div>
                <Project />
               
            </div>
            {/* PROJECT SECTION ENDS */}
            
            {/* SKILLS SECTION STARTS */}
            <div  className="my-16">
                <div className=" text-center font-bold text-3xl mb-8">
                    <h1>SKILLS</h1>
                </div>
                <Skills />



                <div className="flex justify-center gap-3 text-[#2978b5]">
                <p className=" border-2 border-[#2978b5] w-fit py-2 px-3 hover:bg-[#2978b5] hover:text-white cursor-pointer">certificates</p>
            </div>
               
            </div>
            {/* SKILLS SECTION ENDS */}

            {/* CONTACT SECTION STARTS */}
            <div className="my-16">
                <div className=" text-center font-bold text-3xl mb-8">
                    <h1>CONTACT</h1>
                </div>
            <div className="flex justify-center gap-3 text-[#2978b5]">
                <p className=" border-2 border-[#2978b5] w-fit py-2 px-3 hover:bg-[#2978b5] hover:text-white cursor-pointer">email me</p>
            </div>
            </div>
            {/* CONTACT SECTION ENDS */}

            <div className=" text-center font-bold mb-10 mt-18 text-sm text-gray-600">
                <h1 className=" hover:text-[#2978b5] cursor-pointer"><Link to="https://github.com/rinkitadhana" >CREATED BY RINKIT ADHANA</Link></h1>

            </div>
            {/* CRESIT SECTION ENDS */}
          
        </div> 
        );
}
 
export default Home;