import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Babji Neelam's vision with Technical Hub has fundamentally changed how we recruit fresh talent. The candidates are industry-ready.",
      author: "Prakash R.",
      role: "VP Engineering, TechCorp"
    },
    {
      quote: "Torii Minds' AI ATS engine streamlined our hiring process by 40%. It's a game-changer for campus recruitment.",
      author: "Sarah M.",
      role: "HR Director, InnovateX"
    },
    {
      quote: "The training I received at Technical Hub was rigorous and practical. It directly led to my placement at a top-tier MNC.",
      author: "Rahul V.",
      role: "Software Engineer & Alumni"
    }
  ];

  const partners = [
    '/partners/Automation-Anywhere-Logo-Automation-Anywhere-Control-Room-Edureka.png',
    '/partners/claude.png',
    '/partners/mile2_authorized_training_center_8x_enhanced.png',
    '/partners/openai_square.png',
    '/partners/pega.png',
    '/partners/redhat.png',
    '/partners/sno_partner-network-logo.png'
  ];

  return (
    <section id="testimonials" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Testimonials & Partners</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Trusted by industry leaders and loved by alumni.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden mb-20 py-8 shadow-neu-light-pressed dark:shadow-neu-dark-pressed rounded-3xl">
          <div className="flex w-max space-x-12 animate-marquee whitespace-nowrap px-4">
            {[...partners, ...partners].map((logo, i) => (
              <div key={i} className="flex-shrink-0 inline-flex items-center justify-center px-12 h-40 w-80">
                <img 
                  src={logo} 
                  alt="Partner Logo" 
                  className={`max-h-full max-w-full object-contain ${logo.includes('sno_partner') || logo.includes('Automation-Anywhere') ? 'scale-[1.5]' : ''}`} 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col">
                <div className="text-4xl text-gray-300 dark:text-gray-700 mb-4">"</div>
                <p className="text-lg font-medium leading-relaxed mb-8 flex-grow">
                  {test.quote}
                </p>
                <div>
                  <div className="font-bold">{test.author}</div>
                  <div className="text-sm text-gray-500">{test.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Testimonials;
