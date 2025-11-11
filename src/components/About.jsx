export default function Header() {
  return (
    <section className="bg-white flex-col justify-center text-center lg:justify-start  py-24 px-10 lg:px-3 gap-10 border-b-2 border-black">
      <h1 className="font-rubik font-bold border-b-[6px] border-b-[#00A5FF]  text-[22px] mb-20 mx-[0px]">About Me</h1>
      <div className="bg-white flex flex-col justify-center items-center lg:items-start gap-5 z rounded-3xl">
        <h1 className="font-rubik font-bold border-b-[6px] border-b-[#00A5FF] text-[22px]">My Target</h1>
        <p className="text-center lg:text-start font-rubik font-bold text-[9px]"> 
          Hello! My name is Muhammad Naufal Jamil. I am a 10th grade student at Pondok Tahfizh Plus Abu Dzar. I am currently developing my skills, especially in web development and interface design. I aspire to become a cadet at the Naval Academy (AAL) and serve the country, while continuing to explore technology because I believe discipline and curiosity must go hand in hand. I have studied HTML, CSS, Tailwind CSS, and am currently learning React JS to build modern and responsive websites. In my spare time, I enjoy exercising, reading military history, and writing action-adventure stories, believing that every small step with strong determination will lead to extraordinary achievements.
        </p>
      </div>

      <div></div>
    </section>
  );
}