import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import './App.css'

//all my CSS files 
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'
import Header from'./Components/Header'
import Navbar from'./Components/Navbar'
// import Home from './Component/home/'

class App extends Component{
  render(){
    return(
    <HashRouter basename='/'>
      <div className='app'>
        <Header />
          <main>
            {/* <Route exact path = "/" component={Home}/> */}
            <Route exact path = "/AboutMe" component={AboutMe}/>
            <Route exact path = "/Navbar" component={Navbar}/>
            <Route exact path = "/Contact" component={Contact}/>
            <Route exact path = '/Experience' component={Experience}/>
            <Route exact path = "/Portfolio" component={Portfolio}/>
          </main>
          <Footer></Footer>
      </div>
    </HashRouter>
    
  )}
}

export default App;
