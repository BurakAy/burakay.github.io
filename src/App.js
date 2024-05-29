import './App.css';
import Header from './components/Header';
import Links from './components/Links';
import Weather from './components/Weather';
import Panel from './components/Panel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Links />
      </header>
      <Weather />
      <Panel panelTitle={'skills'}/>
      <Footer />
    </div>
  );
}

export default App;
