import React from 'react';
import { StrictMode } from 'react'; // Import StrictMode
import Header from '../components/Header'; // Import the Header component
import AppRoutes from '../components/Routes'; // Import the AppRoutes component

const App = () => {
  return (
    <StrictMode>  {/* Wrap the application with StrictMode */}
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </StrictMode>
  );
};

export default App;
