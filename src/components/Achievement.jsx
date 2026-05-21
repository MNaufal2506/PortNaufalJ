
import { BiLogoVisualStudio } from "react-icons/bi";
import { MdPhoneIphone } from "react-icons/md";
import { ImRocket } from "react-icons/im";
import { FaReact } from "react-icons/fa6";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "10+ Projects",
    desc: "Built various websites using React & Tailwind CSS",
    icon: <BiLogoVisualStudio className="text-blue-500" />,
  },
  {
    title: "Frontend Developer",
    desc: "Focused on learning React JS and modern UI design",
    icon: (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-block"
      >
        <FaReact className="text-6xl text-blue-500" />
      </motion.div>
    ),
  },
  {
    title: "Responsive Design",
    desc: "Creating responsive websites for mobile and desktop",
    icon: <MdPhoneIphone className="text-cyan-600" />,
  },
  {
    title: "Git & GitHub",
    desc: "Mastering version control and team collaboration",
    icon: <ImRocket className="text-blue-700" />,
  },
];

export default function Achievement() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6" id="achievement">

      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          My <span className="text-cyan-400">Achievements</span>
        </h1>

        <p className="text-gray-400 mt-4">
          My journey and achievements in the programming world
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
          >
            <div className="text-5xl mb-6">{item.icon}</div>

            <h2 className="text-2xl font-bold mb-4">
              {item.title}
            </h2>

            <p className="text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
