import React, {useState} from 'react'

function Input() {
  const [color, setColor] = useState('yellow');
  const handleClick = () => {
    if ( color === 'yellow') {
      setColor('green');
    } else {
      setColor('yellow');
    }
    
  }
  return (
    <div>
      <div className= {color} onClick = {handleClick}> {color}</div>
    </div>
  )
}

export default Input