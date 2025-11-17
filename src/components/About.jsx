import ot from "../assets/OT.png";
import ovsc from "../assets/VSC.png";
import fm from "../assets/Figma.png";

export default function Header() {
  return (
    <main className="bg-black py-40">
      <div>
        <h1 className="bg-black text-white text-center font-rubik font-bold border-b-[6px] border-b-[#00A5FF]  text-[29px] mx-[100px] lg:mx-[680px] ">
          About Me
        </h1>
      </div>
      <div className="lg:flex lg:px-20 lg:justify-between">
        <section className="bg-black flex-col justify-center text-center lg:justify-start  py-10 px-10 lg:px-3 text-white">
          <div className=" flex flex-col justify-center items-center lg:items-start gap-5 z rounded-3xl">
            <h1 className="font-rubik font-bold border-b-[6px] border-b-[#00A5FF] text-[22px]">
              My Target
            </h1>
            <p className="text-center lg:text-start font-rubik font-bold text-[9px] lg:text-base">
              Hello! My name is Muhammad Naufal Jamil. I’m a 10th grade student
              with a strong passion for technology, especially web development
              and interface design. I’ve learned HTML, CSS, and Tailwind CSS,
              and I’m now exploring React JS to create modern, responsive, and
              visually appealing websites. I enjoy experimenting with layouts,
              colors, and interactive designs, constantly seeking to improve my
              skills and build unique digital experiences.
            </p>
          </div>
        </section>

        <section className="bg-black flex flex-col justify-center items-start py-10 px-10 text-white">
          <h1 className="font-rubik font-bold text-2xl border-b-[6px] border-[#00A5FF] mb-5">
            My Skills
          </h1>

          <div className="mb-5 ">
            <h3 className="font-rubik font-bold text-sm">UI/UX Design</h3>
            <div className="flex items-center">
              <div className="bg-[#BDBDBD] flex items-start  w-52 lg:w-[550px] h-[10px] lg:h-[20px] rounded-sm">
                <div className="bg-[#00A5FF] w-[176.8px] lg:w-[467.5px] h-[10px] lg:h-[20px] rounded-l-sm"></div>
              </div>
              <h6 className="ml-1 font-rubik font-bold text-[12px] ">85%</h6>
              <img
                src={fm}
                alt=""
                className="w-[25px] h-[25px] lg:w-[40px] lg:h-[40px] ml-10"
              />
            </div>
          </div>

          <div className="mb-5 ">
            <h3 className="font-rubik font-bold text-sm">
              HTML/CSS/Tailwind CSS
            </h3>
            <div className="flex items-center">
              <div className="bg-[#BDBDBD] flex items-start  w-52 lg:w-[550px] h-[10px] lg:h-[20px] rounded-sm">
                <div className="bg-[#00A5FF] w-[187.2px] lg:w-[495px] h-[10px] lg:h-[20px] rounded-l-sm"></div>
              </div>
              <h6 className="ml-1 font-rubik font-bold text-[12px]">90%</h6>
              <img
                src={ovsc}
                alt=""
                className="w-[25px] h-[25px] lg:w-[40px] lg:h-[40px] ml-10"
              />
            </div>
          </div>

          <div className="mb-5 ">
            <h3 className="font-rubik font-bold text-sm">Java Script</h3>
            <div className="flex items-center">
              <div className="bg-[#BDBDBD] flex items-start  w-52 lg:w-[550px] h-[10px] lg:h-[20px] rounded-sm">
                <div className="bg-[#00A5FF] w-[156px] lg:w-[412.5px] h-[10px] lg:h-[20px] rounded-l-sm"></div>
              </div>
              <h6 className="ml-1 font-rubik font-bold text-[12px]">75%</h6>
              <img
                src={ovsc}
                alt=""
                className="w-[25px] h-[25px] lg:w-[40px] lg:h-[40px] ml-10"
              />
            </div>
          </div>

          <div className="mb-5 ">
            <h3 className="font-rubik font-bold text-sm">Other's</h3>
            <div className="flex items-center">
              <div className="bg-[#BDBDBD] flex items-start  w-52 lg:w-[550px] h-[10px] lg:h-[20px] rounded-sm">
                <div className="bg-[#00A5FF] w-[166.4px] lg:w-[440px] h-[10px] lg:h-[20px] rounded-l-sm"></div>
              </div>
              <h6 className="ml-1 font-rubik font-bold text-[12px]">80%</h6>
              <img
                src={ot}
                alt=""
                className="w-[25px] h-[25px] lg:w-[40px] lg:h-[40px] ml-10"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
