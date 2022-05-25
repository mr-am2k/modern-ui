import {
  Header,
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGP3,
} from './containers';
import { Navbar, Brand, CTA } from './components';
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGP3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
