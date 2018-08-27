import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routes'

const styles = {
  marginBottom: '1rem'
}

const capitalize = string => string.toUpperCase() 

const Navigation = props => (
  <nav style={styles}>
    {routes.map(({path, name}, i) => (
      <Link className="link" to={path} key={i}>{capitalize(name)}</Link>
    ))}
  </nav>
)

export default Navigation