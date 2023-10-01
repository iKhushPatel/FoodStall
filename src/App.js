import './App.css';
import MainLayout from './components/layout';
import React from 'react';

import customData from './data/data.json';

function App() {
  return (
    <div>
      <MainLayout Custom = {customData.data}/>
    </div>
  );
}

export default App;
