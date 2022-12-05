import React, {useState} from 'react'

function Inputexample() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState('')

  const handleChange  = (event) => {
    setValue(event.target.value);
  }
  const handleClick = () => {
    setResult(value);
  }
  return (
    <div>
        <input value={value} onChange={handleChange} />
		    <p>Результат: {result}</p>
        <button onClick={handleClick}>Натисни на мене</button>
    </div>
  )
}

export default Inputexample