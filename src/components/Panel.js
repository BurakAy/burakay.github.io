import '../styles/Panel.css'
import techSkills from '../assets/skills.json'
import { useState } from 'react'

function PillTiles({tiles}) {
  return (
    <div className="pill-tiles">
      <ul className='pill-tiles_list'>
        {tiles.map((tile) => {
          return <li key={tile} className='pill-tile'>{tile}</li>
        })}
      </ul>
    </div>
  )
}

function Panel({panelTitle}) {
  const [skills, setSkills] = useState(techSkills.skills);
  return (
    <div className="panel">
      <h3 className='panel-title'>{panelTitle}</h3>
      <div className="panel-wrapper">
        <PillTiles tiles={skills} />
      </div>
    </div>
  )
}

export default Panel;