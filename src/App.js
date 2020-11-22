import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Results from './components/Results';
import Process from './components/Process';
import JobCategories from './components/JobCategories';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Results />
      <Process />
      <JobCategories />
      <Testimonials />
      <Partners />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
