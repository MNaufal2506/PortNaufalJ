import logo from "../assets/logo.png";
import about from "../assets/people.png";
import cont from "../assets/contact.png";
import project from "../assets/project.png";
import ins from "../assets/instagram.png";
import what from "../assets/whatsapp.png";
import dis from "../assets/discord.png";

export default function Navbar() {
  return (
    <nav className="bg-black text-white  py-3 lg:py-5 flex flex-col justify-between w-full ">
      <footer class="flex flex-col md:flex-row md:justify-evenly md:py-[110px] justify-center bg-sen-red px-6 py-8">
        <div class="mb-[40px] ">
          <img src={logo} alt="" className="h-14 w-14" />
        </div>

        <nav class="flex flex-col mb-10 md:mb-0" id="nav">
          <h1 class="text-white font-lexend font-medium text-4xl mb-5">
            Navigation
          </h1>

          <ul class="flex mt-3 gap-14">
            <div className="flex flex-col gap-3 font-lexend font-semibold text-white text-[21px]">
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Contact Me</a>
            </li>
            <li>
              <a href="#">My Project</a>
            </li>
            </div>

            <div className="flex flex-col gap-[19px] justify-center items-center">
              <img src={about} alt=""  className="w-7 h-7 hover:scale-125 transition-transform duration-300"/>
              <img src={cont} alt="" className="w-7 h-7 hover:scale-125 transition-transform duration-300"/>
              <img src={project} alt="" className="w-6 h-6 hover:scale-125 transition-transform duration-300"/>
            </div>
          </ul>
        </nav>

        <nav class="flex flex-col mb-10 md:mb-0" id="nav">
          <h1 class="text-white font-lexend font-medium text-4xl mb-5">
            Contact
          </h1>

          <ul class="flex mt-3 gap-14">
            <div className="flex flex-col gap-3 font-lexend font-semibold text-white text-[21px]">
            <li>
              <a href="#">Whatsapp</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
            </div>

            <div className="flex flex-col gap-[19px] justify-center items-center">
              <img src={ins} alt=""  className="w-7 h-7 hover:scale-125 transition-transform duration-300"/>
              <img src={what} alt="" className="w-7 h-7 hover:scale-125 transition-transform duration-300"/>
              <img src={dis} alt="" className="w-7 h-6 hover:scale-125 transition-transform duration-300"/>
            </div>
          </ul>
        </nav>

        <nav class="flex flex-col mb-10 md:mb-0" id="nav">
          <h1 class="text-white font-lexend font-medium text-4xl mb-5">
            Address
          </h1>

          <h2 class="text-white font-lexend font-semibold text-[21px] max-sm:text-lg">
            Eco Village Serpong, Jl. Desa Mekar <br /> Sari, Rumpin Bogor, Jawa
            Barat
          </h2>
        </nav>
      </footer>

      <section class="bg-[#34757C] rounded-t-2xl flex flex-col gap-4 justify-center items-center py-5 px-2 bg-red-gelap text-center mt-5">
        <p class="font-lexend font-semibold text-xl  text-white max-sm:text-xs">
          My Quote: Find your purpose, believe in it with all your heart, and pursue it without stopping.
        </p>
        <p class="font-lexend font-bold text-xl text-white max-sm:text-xs">
          Copyright © 2025 by Naufal | All Right Reserved.
        </p>
      </section>
    </nav>
  );
}
