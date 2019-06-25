import React from 'react'

export default function UserInput(props) {
  return (
    <div>
      <p>{props.username}</p>
      <p>{props.changed}</p>
    </div>
  )
}
