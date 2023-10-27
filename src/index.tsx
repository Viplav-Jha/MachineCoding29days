import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App item={''} handleSwapClick={function (item: string): void {
      throw new Error('Function not implemented.');
    } } />
  </React.StrictMode>
);

