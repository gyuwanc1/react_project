
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Router from './router/Router';


export default App;
function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

