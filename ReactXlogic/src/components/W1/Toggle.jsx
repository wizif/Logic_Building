import React, { useState } from 'react'

const Toggle = () => {
    const[toggle,setToggle]=useState(false)
    const handletoggle = () => {
        setToggle(!toggle)
    };
  return (
    <div>
      <button onClick={handletoggle}>Click me + {toggle?"yo":"naah"}</button>
    </div>
  )
}

export default Toggle
