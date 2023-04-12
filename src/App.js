import { Greeting } from './App.style';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Greeting>Hello, Welcome to WaterBill!</Greeting>
      </main>
      <Footer />
    </div>
  );
}

export default App;
