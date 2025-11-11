import logo from "../assets/logo.png";
import bar from "../assets/bar-menu.png";
import ins from "../assets/instagram.png";
import what from "../assets/whatsapp.png";
import dis from "../assets/discord.png";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 lg:px-20  py-3 lg:py-5 flex justify-between fixed top-0 left-0 w-full border-b-2 rounded-b-2xl">
      <img src={logo} alt="" className="w-8 h-8" />
      <img src={bar} alt="" className="w-7 h-8 lg:hidden"/>
     
     <ul className="hidden bg-white absolute text-black p-10 border-black border-2 rounded-xl right-5 top-12 lg:flex lg font-lexend  lg:relative lg:bg-transparent lg:border-0 lg:p-0 lg:top-0 lg:right-0 lg:text-white lg:gap-6 lg:items-center lg:text-White font-bold">
        <li>About Me</li>
        <li>My Skills</li>
        <li>My Project</li>
     </ul>
     <ul className="hidden lg:flex gap-6 items-center justify-center ">
        <li className="w-8 h-8 flex items-center"><a href=""><img src={ins} alt="" /></a></li>
        <li className="w-8 h-8 flex items-center"><a href=""><img src={what} alt="" /></a></li>
        <li className="w-8 h-8 flex items-center"><a href=""><img src={dis} alt="" /></a></li>
     </ul>
    </nav>
  );
}
