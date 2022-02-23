import React, { useState } from 'react'
import '../styles/CurrencyCard.css'

const CurrencyCard = ({ name, shortName }) => {
  const [checked, setChecked] = useState(false);
  return (
    <li
      className='currency-card'
    >
      <div>
        <h3>{shortName}: {name}</h3>
      </div>
      <button
        style={{ backgroundColor: checked ?'#ffc446':'white'}}
        onClick={()=>setChecked(prev=>!prev)}
        type="button" className="wish-button" aria-label="add to favorites">
      </button>
    </li>
  )
}

export default CurrencyCard