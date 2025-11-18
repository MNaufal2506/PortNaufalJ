import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.png"

export default function Header() {
  return (
    <section className="bg-black border-b-2 border-black text-center py-40 items-center justify-center">
      <h1 className="bg-black text-white text-center font-rubik font-bold border-b-[6px] border-b-[#00A5FF]  text-[29px] mx-[100px] lg:mx-[680px]">My Project</h1>
      <div className="lg:flex lg:items-center lg:justify-center">
    <div className="py-8 my-10 bg-white rounded-lg mx-5 lg:w-[600px] hover:scale-105 transition-transform duration-300">
        <a href="">
            <img src={pro1} alt=""  className="w-full"/>
        </a>
    </div>
    <div className="py-8 my-10 bg-white rounded-lg mx-5 lg:w-[550px] hover:scale-105 transition-transform duration-300">
        <a href="https://mnaufal2506.github.io/Slicing-Tailwind/" >
            <img src={pro2} alt="" className="w-full"/>
        </a>
    </div>
    </div>
    </section>
  );
}