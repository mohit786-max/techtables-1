import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/layouts/Header';
import { Recommendations } from './components/Recommendations/Recommendation';


function App() {
  return (
    <div className="App">
 
      <Header></Header> 
      <Recommendations/>
      
    </div>
  );
}

export default App;
