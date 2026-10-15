import React from 'react';
import { BotMessageSquare } from 'lucide-react';

const AIAgentButton = () => {
  return (
    <button
      onClick={() => alert("AI Assistant is initializing...")}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-3 sm:p-4 rounded-full bg-light-bg dark:bg-dark-bg text-purple-600 dark:text-purple-400 shadow-neu-light dark:shadow-neu-dark active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 group"
      aria-label="Ask AI Agent"
    >
      <BotMessageSquare size={24} className="sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
      
      {/* Pulse effect ring */}
      <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 dark:border-purple-400/30 animate-ping pointer-events-none"></div>
    </button>
  );
};

export default AIAgentButton;
