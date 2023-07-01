import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import HireMe from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import Chatbot from './components/Chatbot';
class App extends Component {
  detectMob() {
    if( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) )
    {
      console.log("small screen");
      return true;
    }
  }
  render() {
    return (
      <div className="App">
        {this.detectMob() ? alert("Please switch to Desktop to enable Chat Assistant"): <Chatbot/>}
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <HireMe resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;