import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import profileImg from '../assets/image.png';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          {/* Image/Avatar */}
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-2xl rotate-6 opacity-60 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-2xl -rotate-3"></div>
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white flex items-center gap-4">
              <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
              About Me
            </h2>
            <div className="space-y-4 text-lg text-slate-300">
              <p>
                Hello! I'm Nalla Sivanandu, a passionate <span className="text-cyan-400 font-semibold">{personalInfo.role}</span> with a strong foundation in Data Structures and Algorithms. I've successfully solved over 235 problems on LeetCode and earned a 5-star rating in Java and SQL on HackerRank.
              </p>
              <p>
                My expertise lies in building scalable, cross-device compatible applications using modern frameworks like Flutter and the MERN stack. I thrive in optimizing application performance, enhancing usability, and engineering systems that reduce code maintenance effort.
              </p>
              <p>
                Currently, I am exploring advanced scalable architecture patterns and diving deeper into full-stack development to build comprehensive digital experiences. When I'm not coding, I'm usually participating in competitive programming or learning about new system design paradigms.
              </p>
            </div>

            <div className="mt-10 flex gap-6">
              <div className="glass-card p-6 flex-1 text-center">
                <h4 className="text-4xl font-bold text-gradient mb-2">235+</h4>
                <p className="text-sm font-medium text-slate-400">LeetCode Solved</p>
              </div>
              <div className="glass-card p-6 flex-1 text-center">
                <h4 className="text-4xl font-bold text-gradient mb-2">5⭐</h4>
                <p className="text-sm font-medium text-slate-400">HackerRank</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
