import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import { Download, Image as ImageIcon, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            For speaking engagements, press inquiries, or partnership opportunities.
          </p>

          <Card>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-2 pl-1">Name</label>
                <input 
                  type="text" 
                  className="w-full p-4 rounded-xl bg-transparent shadow-neu-light-pressed dark:shadow-neu-dark-pressed outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 pl-1">Email</label>
                <input 
                  type="email" 
                  className="w-full p-4 rounded-xl bg-transparent shadow-neu-light-pressed dark:shadow-neu-dark-pressed outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 pl-1">Message</label>
                <textarea 
                  rows="4"
                  className="w-full p-4 rounded-xl bg-transparent shadow-neu-light-pressed dark:shadow-neu-dark-pressed outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700 transition-all resize-none"
                  placeholder="How can we collaborate?"
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
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
          <div className="mb-10">
            <h3 className="text-3xl font-bold mb-4">Press Kit</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Download official assets for press and media coverage.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="flex items-center justify-between group hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full shadow-neu-light-pressed dark:shadow-neu-dark-pressed bg-white dark:bg-black">
                  <ImageIcon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">High-Res Headshots</h4>
                  <p className="text-sm text-gray-500">ZIP archive (12MB)</p>
                </div>
              </div>
              <button className="p-3 rounded-full shadow-neu-light dark:shadow-neu-dark active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed bg-white dark:bg-black transition-all hover:scale-95">
                <Download size={20} />
              </button>
            </Card>

            <Card className="flex items-center justify-between group hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full shadow-neu-light-pressed dark:shadow-neu-dark-pressed bg-white dark:bg-black">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Executive Bios</h4>
                  <p className="text-sm text-gray-500">Short & Long variants (PDF/DOCX)</p>
                </div>
              </div>
              <button className="p-3 rounded-full shadow-neu-light dark:shadow-neu-dark active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed bg-white dark:bg-black transition-all hover:scale-95">
                <Download size={20} />
              </button>
            </Card>

            <Card className="flex items-center justify-between group hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full shadow-neu-light-pressed dark:shadow-neu-dark-pressed bg-white dark:bg-black">
                  <ImageIcon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Company Logos</h4>
                  <p className="text-sm text-gray-500">TH & Torii Minds (SVG/PNG)</p>
                </div>
              </div>
              <button className="p-3 rounded-full shadow-neu-light dark:shadow-neu-dark active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed bg-white dark:bg-black transition-all hover:scale-95">
                <Download size={20} />
              </button>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
