import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-1/2 -right-5 sm:-right-4 -translate-y-1/2 z-40 scale-[0.68] sm:scale-75 origin-right select-none">
      <div className="switch-container -rotate-90">
        <input 
          className="toggle-checkbox" 
          id="toggle-switch" 
          type="checkbox" 
          checked={theme === 'light'}
          onChange={toggleTheme}
        />
        <label className="switch" htmlFor="toggle-switch">
          <div className="toggle">
            {theme === 'light' ? (
              <Sun size={20} strokeWidth={2.5} className="text-yellow-400 rotate-90 ml-1" style={{ filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 1))' }} />
            ) : (
              <Moon size={20} strokeWidth={2.5} className="text-purple-400 rotate-90 ml-1" style={{ filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.9))' }} />
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default ThemeToggle;
