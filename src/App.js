import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';

import routes from './routes';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='main-container'>
        { routes }
      </div>
    </div>
  );
}

export default App;
