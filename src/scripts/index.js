import React, { useEffect } from 'react';
import { createRoot } from 'react-dom';

const App = () => {
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return <h1>Hello, World!</h1>;
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
