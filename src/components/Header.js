import React from 'react'

const Header = ({title}) => {
    const date = "20/7"
  return (
    <div className='header'>
        <h1>{title} {date}</h1>
    </div>
  )
}

export default Header