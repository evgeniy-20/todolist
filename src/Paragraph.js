import React, {useState} from 'react'

function Paragraph() {
  const [checkbox, setChecked] = useState(true)
  const getCheckbox = () => {
    if(!checkbox === true) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }
  const className  = (checkbox === true ) ? 'crossed' : '';  
  return (
    <div>
        <input type='checkbox' checked={checkbox} onClick={getCheckbox}   />
        <p className= {className}>Світло вимикають по графіку!!!</p>
    </div>
  )
}

export default Paragraph