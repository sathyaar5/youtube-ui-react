import "./styles.css";
import "./App.css";
import Header from "./components/Header";
import VideoCard from "./components/HomePage/VideoCard";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
