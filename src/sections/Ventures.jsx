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
      link: '#',
      image: '/Technical Hub Logo with TH Monogram.png'
    },
    {
      title: 'Torii Minds',
      icon: BrainCircuit,
      description: 'An advanced EdTech platform leveraging Artificial Intelligence. We provide AI-driven curriculums, intelligent ATS engines, and AI-powered interview simulations to prepare students for the modern tech landscape.',
      highlights: ['AI-Driven Curriculum', 'Smart ATS Engine', 'AI Interview Simulations'],
      link: '#',
      isComponent: true,
      component: ToriiLogo
    }
  ];

  return (
    <section id="ventures" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ventures & Impact</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Pioneering organizations dedicated to bridging the industry-academia gap through innovative training and enterprise-grade solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col hover:-translate-y-2 group">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-24 flex items-center justify-start">
                     {venture.isComponent ? (
                       <venture.component className="h-full w-auto object-contain drop-shadow-md" />
                     ) : (
                       <img src={venture.image} alt={`${venture.title} Logo`} className="h-full w-auto object-contain drop-shadow-md" />
                     )}
                  </div>
                  <venture.icon className="w-8 h-8 text-gray-400" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4">{venture.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 flex-grow">
                  {venture.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {venture.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-black dark:bg-white shadow-neu-light dark:shadow-neu-dark"></div>
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Button as="a" href={venture.link} className="w-full gap-2">
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
