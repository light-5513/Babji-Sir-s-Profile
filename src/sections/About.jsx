import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const TimelineItem = ({ year, title, description, isLast }) => (
  <div className="relative pl-8 md:pl-0">
    {!isLast && (
      <div className="hidden md:block absolute top-16 left-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-800 -translate-x-1/2"></div>
    )}
    {!isLast && (
      <div className="md:hidden absolute top-10 left-[11px] w-0.5 h-full bg-gray-200 dark:bg-gray-800"></div>
    )}
    
    <div className="md:grid md:grid-cols-2 md:gap-12 items-center relative z-10 mb-12">
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full neu-sphere-light dark:neu-sphere-dark items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-black dark:bg-light-bg"></div>
      </div>
      
      <div className="md:hidden absolute left-0 top-6 w-6 h-6 rounded-full neu-sphere-light dark:neu-sphere-dark flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-black dark:bg-light-bg"></div>
      </div>

      <div className={`md:text-right ${year % 2 === 0 ? 'md:order-1' : 'md:order-2 md:text-left'}`}>
        <div className="inline-block px-6 py-3 rounded-full neu-sphere-light dark:neu-sphere-dark text-xl font-bold mb-4">
          {year}
        </div>
      </div>
      
      <div className={`${year % 2 === 0 ? 'md:order-2' : 'md:order-1 md:text-right'}`}>
        <Card className="hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        </Card>
      </div>
    </div>
  </div>
);

const About = () => {
  const milestones = [
    {
      year: 2016,
      title: 'Foundation of Technical Hub',
      description: 'Established Technical Hub with a vision to bridge the gap between academia and industry, creating a rigorous training environment for aspiring engineers.',
    },
    {
      year: 2019,
      title: 'Enterprise Solutions Expansion',
      description: 'Expanded Technical Hub\'s capabilities beyond training to actively develop and deploy custom applications for corporate organizations, proving our technical excellence.',
    },
    {
      year: 2022,
      title: 'Scaling the Ecosystem',
      description: 'Achieved critical mass in training, hosting signature events like CodeHeat, and establishing strong pipelines to top-tier technology companies.',
    },
    {
      year: 2024,
      title: 'Launch of Torii Minds',
      description: 'Founded Torii Minds to revolutionize EdTech with AI-driven curriculums, advanced ATS engines, and AI interview simulations for next-generation learning.',
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            For nearly a decade, I have been dedicated to transforming the educational landscape. From founding Technical Hub to launching Torii Minds, the goal remains the same: empowering talent and delivering world-class technological solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative pt-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TimelineItem 
                {...milestone} 
                isLast={index === milestones.length - 1} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
