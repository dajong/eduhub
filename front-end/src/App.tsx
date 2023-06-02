import React from 'react';
import AppRoutes from './appRoutes';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRoutes />
    </div>
  );
};

export default App;
