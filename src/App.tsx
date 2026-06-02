import React, { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio';
import './styles/animations.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time to ensure assets are ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Portfolio />
    </div>
  );
}

export default App;