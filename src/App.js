import React,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import GlobalStyle from './GlobalStyle';
import Hero from './Components/Hero';
import {SliderData} from './Data/SliderData';
import Dropdown from './Components/Dropdown';
import InfoSection from './Components/InfoSection';
import { InfoData, InfoDataTwo } from './Data/InfoData';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection{...InfoData}/>
    </>
  );
}

export default App;
