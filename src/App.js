import './styles.css';
import './App.css';
import Header from './components/Header';
import VideoCard from './components/VideoCard';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage/>
    </div>
  );
}

export default App;
