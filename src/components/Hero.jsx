import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { personalInfo } from '../data';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Parallax speed={-15} className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />
        <Parallax speed={10} className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
              Hello, I'm {personalInfo.name}
            </h2>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6"
          >
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">scalable</span> user experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full font-semibold hover:gap-4 transition-all"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-700 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
