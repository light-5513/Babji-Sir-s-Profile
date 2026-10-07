import React from 'react';
import { BotMessageSquare } from 'lucide-react';

const AIAgentButton = () => {
  return (
    <button
      onClick={() => alert("AI Assistant is initializing...")}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-light-bg dark:bg-dark-bg text-purple-600 dark:text-purple-400 shadow-neu-light dark:shadow-neu-dark active:shadow-neu-light-pressed dark:active:shadow-neu-dark-pressed transition-all duration-300 flex items-center justify-center hover:scale-110 group"
      aria-label="Ask AI Agent"
    >
      <BotMessageSquare size={28} className="transition-transform group-hover:scale-110" />
      
      {/* Pulse effect ring */}
      <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 dark:border-purple-400/30 animate-ping"></div>
    </button>
  );
};

export default AIAgentButton;
