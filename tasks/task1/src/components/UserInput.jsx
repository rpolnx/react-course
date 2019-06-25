import React from 'react'

export default function UserInput(props) {
  return (
    <div>
      <input type="text" name="data" onChange={props.change}/>
    </div>
  )
}
