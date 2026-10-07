import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Play, Mic, FileText, Linkedin } from 'lucide-react';
import { GrOracle } from 'react-icons/gr';

const OracleAcademyIcon = ({ className }) => (
  <div className={`flex items-center gap-3 ${className}`} style={{ width: 'auto', height: 'auto' }}>
    <GrOracle className="w-10 h-10" />
    <span className="font-bold text-2xl tracking-tight">Oracle Academy</span>
  </div>
);

const Media = () => {
  const mediaItems = [
    { type: 'video', title: 'Future of AI in EdTech', icon: Play, desc: 'Keynote speaking engagement' },
    { type: 'article', title: 'Bridging the Talent Gap', icon: OracleAcademyIcon, desc: 'Published Article', link: 'https://academy.oracle.com/en/about-success-spotlight-babji-neelam.html' },
    { type: 'podcast', title: 'EdTech Innovators', icon: Mic, desc: 'Podcast Interview' },
    { type: 'highlight', title: 'CodeHeat 2023 Recap', icon: Play, desc: 'Event Highlight Reel' },
  ];

  return (
    <section id="media" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Media & Thought Leadership</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Insights, interviews, and highlights from speaking engagements across the tech ecosystem.
            </p>
          </div>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl shadow-neu-light dark:shadow-neu-dark active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed font-medium transition-all hover:scale-95 text-blue-600 dark:text-blue-400"
          >
            <Linkedin size={20} /> Connect on LinkedIn
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card className="cursor-pointer group hover:-translate-y-2 h-full flex flex-col">
                    <div className="aspect-video rounded-xl shadow-neu-light-pressed dark:shadow-neu-dark-pressed mb-6 flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
                      <item.icon className="w-10 h-10 text-gray-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-auto">{item.desc}</p>
                  </Card>
                </a>
              ) : (
                <Card className="cursor-pointer group hover:-translate-y-2 h-full flex flex-col">
                  <div className="aspect-video rounded-xl shadow-neu-light-pressed dark:shadow-neu-dark-pressed mb-6 flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
                    <item.icon className="w-10 h-10 text-gray-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-auto">{item.desc}</p>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
