import './App.css';
import Aboutus from './components/Aboutus';
import Centers from './components/Centers.js';
import Contact from './components/Contact.js'
import FAQSection from './components/FAQSection.js';
import FeatureSection from './components/FeatureSection.js';
import Footer from './components/Footer';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Packages from './components/Packages';
import SEOComponent from './components/SEOComponent.js';
import StickyNavbar from './components/StickyNavbar';
import Customers from './components/Customers.js';
import ToggleButton from './components/Elements/ToggleButton.js';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
   <>
   <BrowserRouter>
    <StickyNavbar/>
    <Navbar/>
    <Home/>
    <Aboutus/>
    <Packages/>
    <FeatureSection/>
    <Customers/>
    <FAQSection/>
    <Contact/>
    {/* <ContactForm/> */}
    <Centers/>
    <SEOComponent/>
    <Footer/>
    <ToggleButton/>
    </BrowserRouter>
   </>
  );
}

export default App;
