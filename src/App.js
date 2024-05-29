import './App.css';
import Header from './components/Header';
import Links from './components/Links';
import Weather from './components/Weather';
import Panel from './components/Panel';
import Footer from './components/Footer';
import skills from './assets/skills.json'
import { useState } from 'react'

function App() {
  const [technicalSkills, setTechSkills] = useState(skills.tech_skills);
  const [softSkills, setSoftSkills] = useState(skills.soft_skills);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Links />
      </header>
      <Weather />
      <div className='App-skill-panels'>
        <Panel panelTitle={'technical skills'} tiles={technicalSkills} />
        <Panel panelTitle={'soft skills'} tiles={softSkills} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
