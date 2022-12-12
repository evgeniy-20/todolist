import React, {useState} from 'react'

function Paragraph() {
  const [checkbox, setChecked] = useState('checkbox')
  const getCheckbox = () => {
    if(checkbox === true) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  }
  return (
    <div>
        <input type='checkbox' checked={checkbox} onClick={getCheckbox}   />
        <p className= {checkbox}>Світло вимикають по графіку!!! {checkbox}</p>
    </div>
  )
}

export default Paragraph