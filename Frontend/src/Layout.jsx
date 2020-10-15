import React from 'react'
import Inicio from '/inicio.'

function Layout(props) {
  return (
    <React.Fragment>
    <Inicio />
      {props.children}
    </React.Fragment>
  )
}

export default Layout;