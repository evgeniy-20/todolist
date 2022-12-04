import React, {useState} from 'react'

function Inputexample() {
  const [value, setValue] = useState('')

  const handleChange  = (event) => {
    setValue(event.target.value);
  }
  return (
    <div>
        <input value={value} onChange={handleChange} />
		<p>Результат: {value}</p>
    </div>
  )
}

export default Inputexample