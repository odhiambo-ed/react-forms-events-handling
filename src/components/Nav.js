import React from 'react'
import logo from '../images/logo.png'

function Nav() {
  return (
      <div className='ui segment color blue'>
          <div class="ui stackable menu">
              <div class="item">
                  <img src={logo} />
              </div>
              <a class="item">Home</a>
              <a class="item">About Edward</a>
              <a class="item">Blog</a>
          </div>
    </div>
  )
}

export default Nav