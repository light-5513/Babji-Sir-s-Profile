import React from 'react';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import AIAgentButton from './components/AIAgentButton';
import Home from './sections/Home';
import About from './sections/About';
import Expertise from './sections/Expertise';
import Ventures from './sections/Ventures';
import Media from './sections/Media';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip">
      <Navbar />
      <ThemeToggle />
      <AIAgentButton />
      
      <main className="w-full max-w-full overflow-x-clip">
        <Home />
        <About />
        <Expertise />
        <Ventures />
        <Media />
        <Testimonials />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Mr. Babji Neelam. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
