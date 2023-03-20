import './App.css';
import { Header, About, Work, Footer, Projectpage } from './container'
import { Navbar } from './components';
import { images, ProjectText } from './constants';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Footer />
    </div>
  );
}

function Clock(){
    return(
        <div className="App">
            <Navbar />
            <Projectpage ProjectName="Clock" aboutText={ProjectText.clock.about} challengeText={ProjectText.clock.challenge} image={images.clock}/>
        </div>
    )
}

function Simon(){
    return(
        <div className="App">
            <Navbar />
            <Projectpage ProjectName="Simon" aboutText={ProjectText.simon.about} challengeText={ProjectText.simon.challenge} image={images.simon}/>
        </div>
    )
}

function Folio1(){
    return(
        <div className="App">
            <Navbar />
            <Projectpage ProjectName="Folio1" aboutText={ProjectText.folio1.about} challengeText={ProjectText.folio1.challenge} image={images.folio1}/>
        </div>
    )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock" element={<Clock /> } />
        <Route path="/simon" element={<Simon />} />
        <Route path="/folio1" element={<Folio1 />} />
      </Routes>
    </Router>
  );
}

export default App;