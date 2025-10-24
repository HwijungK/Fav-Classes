import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
function App() {
  document.title = "Favourite Classes";
  return (
    <div className="App">
       <Home></Home>
    </div>
  );
}

export default App;
