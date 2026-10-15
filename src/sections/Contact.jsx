import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import { Download, Image as ImageIcon, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-50/50 dark:bg-gray-900/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">Get in Touch</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-10">
            For speaking engagements, press inquiries, or partnership opportunities.
          </p>

          <Card className="p-4 sm:p-8">
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-1.5 sm:mb-2 pl-1">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3.5 sm:p-4 rounded-xl bg-transparent shadow-neu-light-pressed dark:shadow-neu-dark-pressed outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 sm:mb-2 pl-1">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3.5 sm:p-4 rounded-xl bg-transparent shadow-neu-light-pressed dark:shadow-neu-dark-pressed outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5 sm:mb-2 pl-1">Message</label>
                <textarea 
                  rows="4"
                  className="w-full p-3.5 sm:p-4 rounded-xl bg-transparent shadow-neu-light-pressed dark:shadow-neu-dark-pressed outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all resize-none text-sm sm:text-base"
                  placeholder="How can we collaborate?"
                ></textarea>
              </div>
              <Button type="submit" className="w-full text-base py-3">
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Press Kit */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Press Kit</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Download official assets for press and media coverage.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <Card className="p-3.5 sm:p-5 flex items-center justify-between group hover:-translate-y-1">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-full neu-sphere-light dark:neu-sphere-dark flex-shrink-0">
                  <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">High-Res Headshots</h4>
                  <p className="text-xs sm:text-sm text-gray-500">ZIP archive (12MB)</p>
                </div>
              </div>
              <button 
                className="p-2.5 sm:p-3 rounded-full neu-sphere-light dark:neu-sphere-dark transition-all hover:scale-95 active:scale-90 min-w-[40px] min-h-[40px] flex items-center justify-center flex-shrink-0"
                aria-label="Download headshots"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
              </button>
            </Card>

            <Card className="p-3.5 sm:p-5 flex items-center justify-between group hover:-translate-y-1">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-full neu-sphere-light dark:neu-sphere-dark flex-shrink-0">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Executive Bios</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Short & Long variants (PDF/DOCX)</p>
                </div>
              </div>
              <button 
                className="p-2.5 sm:p-3 rounded-full neu-sphere-light dark:neu-sphere-dark transition-all hover:scale-95 active:scale-90 min-w-[40px] min-h-[40px] flex items-center justify-center flex-shrink-0"
                aria-label="Download executive bios"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
              </button>
            </Card>

            <Card className="p-3.5 sm:p-5 flex items-center justify-between group hover:-translate-y-1">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-full neu-sphere-light dark:neu-sphere-dark flex-shrink-0">
                  <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Company Logos</h4>
                  <p className="text-xs sm:text-sm text-gray-500">TH & Torii Minds (SVG/PNG)</p>
                </div>
              </div>
              <button 
                className="p-2.5 sm:p-3 rounded-full neu-sphere-light dark:neu-sphere-dark transition-all hover:scale-95 active:scale-90 min-w-[40px] min-h-[40px] flex items-center justify-center flex-shrink-0"
                aria-label="Download logos"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
              </button>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
