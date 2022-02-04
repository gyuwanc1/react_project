
import './App.css';
import Category from './component/Category';
import Guide from './component/Guide';
import Header from './component/Header';
import Main from './component/Main';

export default App;
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Guide />       
      <Category />
    </div>
  );
}

