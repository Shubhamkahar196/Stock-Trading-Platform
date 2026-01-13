import React from 'react'
import Menu from './Menu'

const TopBar = () => {
  return (
    <div>
        <div>
            <div>
                <p>NIFTY 50</p>
                <p>{100.2}</p>
                <p></p>
            </div>
            <div>
                <p>SENSEX </p>
                <p>{100.2}</p>
                <p></p>
            </div>
        </div>
        <Menu/>
    </div>
  )
}

export default TopBar