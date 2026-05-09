import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { personalInfo } from '../data';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Parallax speed={-15} className="absolute top-[20%] left-[10%] w-64 h-64 bg-violet-500/20 rounded-full blur-[100px]" />
        <Parallax speed={10} className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-400"></span>
              Hello, I'm {personalInfo.name}
            </h2>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            I build <span className="text-gradient">scalable</span> user experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
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
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-full font-semibold hover:gap-4 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 glass text-white rounded-full font-semibold hover:bg-white/10 transition-all"
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
