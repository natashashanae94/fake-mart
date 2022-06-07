import React, {useState, useEffect} from 'react'

//STYLESHEETS
import '../src/assets/css/_style.css'
import '../src/assets/css/index.css'

//COMPONENTS
import Navbar from './components/Navbar'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
