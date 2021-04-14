import React from 'react';
import About from './components/About';
import Articles from './components/Articles';
import Footer from './components/Footer';

import Hero from './components/Hero';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <div className="font-publicSans">
        {/* <Nav /> */}
        <Hero />
        <About />
        {/* <Articles />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
