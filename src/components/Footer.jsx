import { personalInfo } from '../data';

const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
