import React, { Component } from 'react';
import './App.css';
import Header   from './components/layouts/Header';
import { Recommendations } from './components/Recommendations/Recommendation';


class App extends Component {
  render(){
    let links = [
      { label: 'Home', link:'/'},
      { label: 'Recommendations', link:'{Recommendation}'},
      {label: 'Post Opportunities', link:'/'},
      {label: 'Webinars', link:'file:///C:/Users/welcome/Desktop/INTERNSHIP/New%20folder/webinar.html'},
      {label: 'Contact Us', link:'/'},
            
      
    ];

  
    return (
      <div className="App">
  
        
        <Recommendations/>
        
        
        
    </div>
    );
  }
}

export default App;
