import './App.css';
import Header from './components/Header';
import Links from './components/Links';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Links />
      </header>
      <Weather />
    </div>
  );
}

export default App;
