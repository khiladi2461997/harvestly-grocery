import React from 'react'

export default function Heading({title}) {
  return (<div
    className="normal text-2xl font-semibold font-poppins"
    style={{ color: "#1A1A1A" }}
  >
    {title}
  </div>
  )
}
