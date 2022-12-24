import React, {useState} from 'react'

function Inputexample() {
  const [value, setValue] = useState(null)
  const [notes, setNotes] = useState([]);

  const result = notes.map((note, index) => {
		return <ul><li key={index}>{note}</li></ul>;
	});

  const handleChange  = (event) => {
    setValue(event.target.value);
  }
  const handleClick = () => { 
    setNotes([...notes, value]);
    setValue('');
  }
  return (
    <div>
        {result}
        <input  value={value} onChange={handleChange} />
        <button onClick={handleClick}>Натисни на мене</button>
    </div>
  )
}

export default Inputexample