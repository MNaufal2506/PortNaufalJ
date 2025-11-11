import photo from "../assets/foto1.png";

export default function Header() {
  return (
    <section className="bg-black flex max-sm:flex-col lg:justify-center justify-center py-40 lg:py-80 px-10 gap-10 border-b-2 border-black">
      <div className="bg-black flex justify-center items-center lg:w-[500px] rounded-3xl">
        <img src={photo} alt="" className="w-full  rounded-3xl" />
      </div>
      <div className="flex flex-col justify-center gap-0 text-center lg:text-start items-center lg:items-start">
        <h1 className="font-inter font-bold text-5xl text-white">
          Hello, I'm <br />
          Muhammad <br /> Naufal Jamil
        </h1>
        <p className="font-semibold font-rubik text-[#727272] text-[9px] mb-3">
          a student at Abu Dzar Plus High School and Web Development
        </p>
        <button className="bg-[#00A5FF] w-36 h-12 rounded-lg font-rubik font-bold text-xl text-white hover:bg-[#0b4564] transition duration-500 ">
          About Me
        </button>
      </div>
    </section>
  );
}
