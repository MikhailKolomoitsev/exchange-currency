import React, { useState} from 'react'

const CurrencyCard = ({name, key}) => {
    const [checked, setChecked] = useState(false);
  return (
      <li
          key={key}
          style={{width:200, height:20}}
        className='d-flex justify-content-between p-2 m-0 align-items-baseline'
      >
          <div><p>{name}</p></div>
          <div>star</div>
</li>
  )
}

export default CurrencyCard