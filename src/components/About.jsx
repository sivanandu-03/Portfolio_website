import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Image/Avatar */}
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-2xl rotate-6 opacity-50 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-2xl -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=600&auto=format&fit=crop"
                alt={personalInfo.name}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
              <p>
                Hello! I'm Nalla Sivanandu, a passionate {personalInfo.role} with a strong foundation in Data Structures and Algorithms. I've successfully solved over 235 problems on LeetCode and earned a 5-star rating in Java and SQL on HackerRank.
              </p>
              <p>
                My expertise lies in building scalable, cross-device compatible applications using modern frameworks like Flutter and the MERN stack. I thrive in optimizing application performance, enhancing usability, and engineering systems that reduce code maintenance effort.
              </p>
              <p>
                Currently, I am exploring advanced scalable architecture patterns and diving deeper into full-stack development to build comprehensive digital experiences. When I'm not coding, I'm usually participating in competitive programming or learning about new system design paradigms.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="text-3xl font-bold text-primary mb-1">235+</h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">LeetCode Solved</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <h4 className="text-3xl font-bold text-primary mb-1">5⭐</h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">HackerRank</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
