import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Results from './components/Results';
import Process from './components/Process';
import JobCategories from './components/JobCategories';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  `


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <Header />
      </Wrapper>
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
