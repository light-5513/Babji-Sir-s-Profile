import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import { ArrowRight, Code2, Users, Rocket } from 'lucide-react';

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
      <div className="p-4 rounded-full shadow-neu-light-pressed dark:shadow-neu-dark-pressed mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-3xl font-bold mb-1">{count}{suffix}</h4>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
    </Card>
  );
};

const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-2 rounded-full shadow-neu-light-pressed dark:shadow-neu-dark-pressed text-sm font-semibold tracking-wide uppercase">
            Founder & CEO
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Building AI Ecosystems & Empowering Tech Talent.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
            Leading Technical Hub & Torii Minds to revolutionise tech education, deliver enterprise applications, and shape the next generation of engineers.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button as="a" href="#ventures" className="gap-2">
              Explore Ventures <ArrowRight size={18} />
            </Button>
            <Button as="a" href="#contact" className="gap-2">
              Get in Touch
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-lg mx-auto lg:max-w-xl"
        >
          <div className="aspect-[4/5] w-full rounded-[3rem] shadow-neu-light dark:shadow-neu-dark overflow-hidden relative group transition-all duration-700 hover:-translate-y-3">
             <img 
               src="/assets/Babji Sir.png" 
               alt="Babji Neelam" 
               className="w-full h-full object-cover object-top grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
               onError={(e) => {
                 e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800';
               }}
             />
             {/* Subtle gradient overlay to add depth */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-20 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto w-full mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <StatCard icon={Users} title="Students Trained" endValue={50} suffix="k+" />
        <StatCard icon={Code2} title="Courses Launched" endValue={45} suffix="+" />
        <StatCard icon={Rocket} title="B2B Apps Deployed" endValue={120} suffix="+" />
      </motion.div>
    </section>
  );
};

export default Home;
