import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>You requested fro a page that couldnt be found</p>
      <p>The following links are available</p>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Product</Link></li>
      </ul>
    </div>
  )
}
 
export default NoMatch
