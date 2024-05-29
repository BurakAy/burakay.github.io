import '../styles/Panel.css'

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

function Panel({panelTitle, tiles}) {
  return (
    <div className="panel">
      <h3 className='panel-title'>{panelTitle}</h3>
      <div className="panel-wrapper">
        <PillTiles tiles={tiles} />
      </div>
    </div>
  )
}

export default Panel;