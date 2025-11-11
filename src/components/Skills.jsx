import ot from "../assets/OT.png"
import ovsc from "../assets/vsc.png"
import fm from "../assets/Figma.png"

export default function Header() {
  return (
    <section className="flex flex-col justify-center items-start py-24 px-10 border-b-2 border-black">
      <h1 className="font-rubik font-bold text-2xl border-b-[6px] border-[#00A5FF] mb-5">My Skills</h1>

      <div className="mb-5">
        <h3 className="font-rubik font-bold text-sm">UI/UX Design</h3>
        <div className="flex items-center">
            <div className="bg-[#BDBDBD] flex items-start  w-52 h-[10px] rounded-sm"><div className="bg-[#00A5FF] w-[176.8px] h-[10px] rounded-l-sm"></div></div>
            <h6 className="ml-1 font-rubik font-bold text-[12px]">85%</h6>
            <img src={fm} alt="" className="w-[25px] h-[25px] ml-10" />
        </div>
      </div>

       <div className="mb-5">
        <h3 className="font-rubik font-bold text-sm">HTML/CSS/Tailwind CSS</h3>
        <div className="flex items-center">
            <div className="bg-[#BDBDBD] flex items-start  w-52 h-[10px] rounded-sm"><div className="bg-[#00A5FF] w-[187.2px] h-[10px] rounded-l-sm"></div></div>
            <h6 className="ml-1 font-rubik font-bold text-[12px]">90%</h6>
            <img src={ovsc} alt="" className="w-[25px] h-[25px] ml-10" />
        </div>
      </div> 
      
      <div className="mb-5">
        <h3 className="font-rubik font-bold text-sm">Java Script</h3>
        <div className="flex items-center">
            <div className="bg-[#BDBDBD] flex items-start  w-52 h-[10px] rounded-sm"><div className="bg-[#00A5FF] w-[156px] h-[10px] rounded-l-sm"></div></div>
            <h6 className="ml-1 font-rubik font-bold text-[12px]">75%</h6>
            <img src={ovsc} alt="" className="w-[25px] h-[25px] ml-10" />
        </div>
      </div>

       <div className="mb-5">
        <h3 className="font-rubik font-bold text-sm">Other's</h3>
        <div className="flex items-center">
            <div className="bg-[#BDBDBD] flex items-start  w-52 h-[10px] rounded-sm"><div className="bg-[#00A5FF] w-[166.4px] h-[10px] rounded-l-sm"></div></div>
            <h6 className="ml-1 font-rubik font-bold text-[12px]">80%</h6>
            <img src={ot} alt="" className="w-[25px] h-[25px] ml-10" />
        </div>
      </div>
     
        
       
    </section>
  );
}