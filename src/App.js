import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Allot from './components/Allot';
import Guests from './components/Guests';
import Bill from './components/Bill';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <nav>
        <Link to="/">Allot Water</Link>
        <Link to="/guests">Guests</Link>
        <Link to="/bill">Bill</Link>
      </nav>
      <main>
        <Routes>
          <Route index element={<Allot />} />
          <Route path="guests" element={<Guests />} />
          <Route path="bill" element={<Bill />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
