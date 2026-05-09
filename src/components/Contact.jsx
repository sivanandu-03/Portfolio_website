import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Open user's email client with pre-filled details
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    
    // Simulate network delay for UX
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              Get In Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-slate-400"
            >
              Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-5/12 space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-sm group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email</p>
                  <p className="text-lg font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">{personalInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-sm group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Phone</p>
                  <p className="text-lg font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Follow Me</p>
                <div className="flex gap-4">
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white hover:text-black transition-all hover:scale-110">
                    <FaGithub size={22} />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all hover:scale-110">
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-7/12"
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-slate-600" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-slate-600" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea id="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all placeholder:text-slate-600 resize-none" placeholder="How can I help you?"></textarea>
                </div>
                
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-lg"
                  >
                    <FaCheckCircle className="shrink-0" />
                    <span className="text-sm font-medium">Message prepared successfully! Opening your email client...</span>
                  </motion.div>
                )}
                
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-lg font-bold text-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Processing...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
