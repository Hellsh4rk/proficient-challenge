import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductsId from './components/productsId';

function App() {
  return (
    <div className="App">
      <Home/>
      <ProductsId/>
        <div className="titles3">
            <h1>Summary</h1>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
