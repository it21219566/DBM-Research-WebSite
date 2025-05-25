import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Methodology from './pages/Methodology';
import Results from './pages/Results';
import Conclusion from './pages/Conclusion';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/results" element={<Results />} />
            <Route path="/conclusion" element={<Conclusion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;