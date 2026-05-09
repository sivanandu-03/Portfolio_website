import { personalInfo } from '../data';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 text-center relative z-10 glass">
      <div className="container mx-auto px-6">
        <p className="text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} <span className="text-cyan-400">{personalInfo.name}</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
