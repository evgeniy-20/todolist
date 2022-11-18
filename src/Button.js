import React, {useState} from 'react'

function Button() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <p>Ти на тиснув {count} раз(ів)</p>
        <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  )
}

export default Button