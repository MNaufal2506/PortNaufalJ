import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.png";

export default function Header() {
  return (
    <section className=" bg-black border-b-2 border-black text-center py-40 items-center justify-center" id="projects">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white">

          My <span className="text-cyan-400">Projects</span>
        </h1>
        <p className="text-gray-400 mt-4">
          A collection of projects I have built using modern web
          technologies
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <a
            href="#"
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={pro1}
              alt="Project 1"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110 group-hover:blur-sm"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <h1 className="text-white text-2xl font-bold tracking-widest">
                CLICK HERE
              </h1>
            </div>
          </a>

          {/* Project 2 */}
          <a
            href="https://mnaufal2506.github.io/Slicing-Tailwind/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={pro2}
              alt="Project 2"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110 group-hover:blur-sm"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <h1 className="text-white text-2xl font-bold tracking-widest">
                CLICK HERE
              </h1>
            </div>
          </a>

          {/* Project 3 */}
          <a
            href="https://l-quran.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={pro3}
              alt="Project 3"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110 group-hover:blur-sm"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <h1 className="text-white text-2xl font-bold tracking-widest">
                CLICK HERE
              </h1>
            </div>
          </a>

          {/* Project 4 */}
          <a
            href="https://cuaca-alpha.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={pro4}
              alt="Project 4"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110 group-hover:blur-sm"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <h1 className="text-white text-2xl font-bold tracking-widest">
                CLICK HERE
              </h1>
            </div>
          </a>
        </div>
      </div>
      {/* <div className="lg:block lg:items-center lg:justify-center">
   <div className="flex">
     <div className="py-8 my-10 bg-white rounded-lg mx-5 lg:w-[600px] hover:scale-105 transition-transform duration-300">
        <a href="">
            <img src={pro1} alt=""  className="w-full"/>
        </a>
     </div>
     <div className="py-8 my-10 bg-white rounded-lg mx-5 lg:w-[550px] hover:scale-105 transition-transform duration-300">
        <a href="https://mnaufal2506.github.io/Slicing-Tailwind/" target="blank" >
            <img src={pro2} alt="" className="w-full"/>
        </a>
     </div>
   </div>

    <div className="flex">
        <div className="py-8 my-10 bg-white rounded-lg mx-5 lg:w-[550px] hover:scale-105 transition-transform duration-300">
        <a href="https://l-quran.vercel.app/" target="blank" >
            <img src={pro3} alt="" className="w-full"/>
        </a>
     </div>
        <div className="py-8 my-10 bg-white rounded-lg mx-5 lg:w-[550px] hover:scale-105 transition-transform duration-300">
        <a href="https://cuaca-alpha.vercel.app/" target="blank" >
            <img src={pro4} alt="" className="w-full"/>
        </a>
        </div>
    </div>

    </div> */}
    </section>
  );
}
