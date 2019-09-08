import React, { useState } from 'react';
import './App.scss';


const fibonacci = ['1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '☕', '∞']

const App: React.FC = () => {
  const [selected, setSelected] = useState('');
  return (
    <div >
      <h1>Scrum Poker</h1>
      <div className="card-container">
        {fibonacci.map(value =>
          <Card hidden={selected !== value && selected !== ''} selected={selected === value} onClick={() => { selected === value ? setSelected('') : setSelected(value) }} value={value} key={value} />
        )}
      </div>
    </div>
  );
}

const Card: React.FC<{
  value: string,
  selected: boolean,
  hidden: boolean
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}> = ({ value, onClick, selected, hidden }) => {
  return (
    <div onClick={onClick} className={`card ${selected && 'selected'} ${hidden && 'hidden'}`} >
      {value}
    </div >
  )
}

export default App;
