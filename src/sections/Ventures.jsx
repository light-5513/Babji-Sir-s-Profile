import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import ToriiLogo from '../components/ToriiLogo';
import { Briefcase, BrainCircuit, ExternalLink } from 'lucide-react';

const Ventures = () => {
  const ventures = [
    {
      title: 'Technical Hub',
      icon: Briefcase,
      description: 'A premier technology training incubator and enterprise solutions provider. Beyond scaling tech education to thousands of students and hosting mega-events like CodeHeat, Technical Hub builds and deploys custom applications directly for corporate organizations.',
      highlights: ['Massive Training Scale', 'Enterprise App Development', 'Signature Event: CodeHeat'],
      link: 'https://technicalhub.io/',
      image: '/technical-hub-logo-theme.svg',
      imgClass: 'invert dark:invert-0'
    },
    {
      title: 'Torii Minds',
      icon: BrainCircuit,
      description: 'Founded in 2025 by Mr. Babji Neelam (Founder & CEO), Torii Minds is an advanced EdTech platform leveraging Artificial Intelligence. We provide AI-driven curriculums, intelligent ATS engines, and AI-powered interview simulations to prepare students for the modern tech landscape.',
      highlights: ['AI-Driven Curriculum', 'Smart ATS Engine', 'AI Interview Simulations'],
      link: 'https://toriiminds.com/',
      isComponent: true,
      component: ToriiLogo
    }
  ];

  return (
    <section id="ventures" className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-50/50 dark:bg-gray-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Ventures & Impact</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Pioneering organizations dedicated to bridging the industry-academia gap through innovative training and enterprise-grade solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col group">
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="h-20 sm:h-28 md:h-32 flex items-center justify-start">
                     {venture.isComponent ? (
                       <venture.component className="h-full w-auto object-contain drop-shadow-md" />
                     ) : (
                       <img src={venture.image} alt={`${venture.title} Logo`} className={`h-full w-auto object-contain drop-shadow-md ${venture.imgClass || ''}`} />
                     )}
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-full neu-sphere-light dark:neu-sphere-dark">
                    <venture.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400" />
                  </div>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{venture.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 flex-grow">
                  {venture.description}
                </p>
                
                <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-sm sm:text-base">
                  {venture.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-black dark:bg-light-bg shadow-neu-light dark:shadow-neu-dark flex-shrink-0"></div>
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Button as="a" href={venture.link} target="_blank" rel="noopener noreferrer" className="w-full gap-2 text-sm sm:text-base">
                  Visit Website <ExternalLink size={18} />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventures;
