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
    { 
      type: 'video', 
      title: 'Why Technical Hub', 
      icon: Play, 
      desc: 'Featured Video', 
      link: 'https://www.youtube.com/watch?v=FWswzxaCG3c',
      image: '/assets/why_th_thumb.jpg'
    },
    { 
      type: 'article', 
      title: 'Bridging the Talent Gap', 
      icon: OracleAcademyIcon, 
      desc: 'Published Article', 
      link: 'https://academy.oracle.com/en/about-success-spotlight-babji-neelam.html' 
    },
    { 
      type: 'video', 
      title: 'Project Space', 
      icon: Play, 
      desc: 'Featured Video', 
      link: 'https://www.youtube.com/watch?v=E7mvZ0yTDss',
      image: '/assets/project_space_thumb.jpg'
    },
    { 
      type: 'video', 
      title: 'Grow', 
      icon: Play, 
      desc: 'Featured Video', 
      link: 'https://www.youtube.com/watch?v=WBINrie9mzc',
      image: '/assets/grow_thumb.jpg'
    },
  ];

  const gitexImages = [
    '/Gitex/gitex-1.jpeg',
    '/Gitex/gitex-2.jpeg',
    '/Gitex/gitex-3.jpeg',
    '/Gitex/gitex-4.jpeg',
  ];

  return (
    <section id="media" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-16"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">Media & Thought Leadership</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Insights, interviews, and highlights from speaking engagements across the tech ecosystem.
            </p>
          </div>
          <a 
            href="https://www.linkedin.com/in/babjineelam/" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-neu-light dark:shadow-neu-dark active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed font-medium transition-all hover:scale-95 active:scale-95 text-blue-600 dark:text-blue-400 text-sm sm:text-base w-full sm:w-auto"
          >
            <Linkedin size={20} /> Connect on LinkedIn
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card className="cursor-pointer group h-full flex flex-col p-3.5 sm:p-5">
                    <div className="aspect-video rounded-xl shadow-neu-light-pressed dark:shadow-neu-dark-pressed mb-4 sm:mb-6 flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
                      {item.image ? (
                        <>
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                          />
                          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 flex items-center justify-center transition-colors">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white translate-x-0.5" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-auto">{item.desc}</p>
                  </Card>
                </a>
              ) : (
                <Card className="cursor-pointer group h-full flex flex-col p-3.5 sm:p-5">
                  <div className="aspect-video rounded-xl shadow-neu-light-pressed dark:shadow-neu-dark-pressed mb-4 sm:mb-6 flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    ) : (
                      <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-auto">{item.desc}</p>
                </Card>
              )}
            </motion.div>
          ))}
        </div>

        {/* GITEX Global Scrolling Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Global Showcase
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-1">GITEX Global Exhibition</h3>
            </div>
          </div>

          <div 
            className="drive-ready-gallery w-full rounded-2xl sm:rounded-3xl shadow-neu-light-pressed dark:shadow-neu-dark-pressed p-3 sm:p-5 bg-gray-50/50 dark:bg-gray-900/40"
            role="region"
            aria-label="GITEX Global gallery"
          >
            <div className="drive-ready-gallery-track">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="drive-ready-gallery-group gap-3 sm:gap-5"
                  aria-hidden={copy === 1 ? 'true' : undefined}
                >
                  {gitexImages.map((img, idx) => (
                    <div
                      key={`${copy}-${idx}`}
                      className="h-44 sm:h-56 md:h-64 w-60 sm:w-80 md:w-96 flex-shrink-0 overflow-hidden rounded-xl sm:rounded-2xl shadow-neu-light dark:shadow-neu-dark bg-white dark:bg-gray-800"
                    >
                      <img
                        src={img}
                        alt={`GITEX Global ${idx + 1}`}
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Media;
