import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import { ArrowRight, Code2, Users, Rocket, Linkedin } from 'lucide-react';

const StatCard = ({ icon: Icon, title, endValue, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 2000;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [endValue]);

  return (
    <Card className="flex flex-col items-center justify-center p-6 text-center group">
      <div className="p-4 rounded-full neu-sphere-light dark:neu-sphere-dark mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-3xl font-bold mb-1">{count}{suffix}</h4>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
    </Card>
  );
};

const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block px-5 py-2.5 rounded-full neu-sphere-light dark:neu-sphere-dark text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-neu-light-sm dark:shadow-neu-dark-sm cursor-default"
          >
            Founder & CEO
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-black dark:text-white">
            Building AI Ecosystems & Empowering Tech Talent.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
            Leading Technical Hub & Torii Minds to revolutionise tech education, deliver enterprise applications, and shape the next generation of engineers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Button as="a" href="#ventures" className="w-full sm:w-auto gap-2 text-sm sm:text-base py-3 sm:py-3.5">
              Explore Ventures <ArrowRight size={18} />
            </Button>
            <Button as="a" href="#contact" className="w-full sm:w-auto gap-2 text-sm sm:text-base py-3 sm:py-3.5">
              Get in Touch
            </Button>
            <a
              href="https://www.linkedin.com/in/babjineelam/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl font-semibold text-sm bg-[#0A66C2] text-white hover:bg-[#004182] active:scale-95 transition-all shadow-neu-light dark:shadow-neu-dark"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-xs sm:max-w-md lg:max-w-xl mx-auto"
        >
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="aspect-[4/5] w-full rounded-3xl sm:rounded-[3rem] shadow-neu-light dark:shadow-neu-dark overflow-hidden relative group transition-all duration-700 hover:-translate-y-2"
          >
             <img 
               src="/Babji Sir.png" 
               alt="Babji Neelam" 
               className="w-full h-full object-cover object-top grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
               onError={(e) => {
                 e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800';
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-20 pointer-events-none"></div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto w-full mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6"
      >
        <StatCard icon={Users} title="Students Certified" endValue={16} suffix="K+" />
        <StatCard icon={Code2} title="Courses Launched" endValue={20} suffix="+" />
        <StatCard icon={Rocket} title="B2B Apps Deployed" endValue={20} suffix="+" />
      </motion.div>
    </section>
  );
};

export default Home;
