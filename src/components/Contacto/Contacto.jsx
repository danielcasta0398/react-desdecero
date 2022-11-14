import React from 'react'
import { NavLink } from 'react-router-dom'

export const Contacto = () => {
  return (
    <div>
        <ul>
            <li><NavLink to="/home">Inicio</NavLink> </li>
            <li><NavLink to="/contacto">Contacto</NavLink> </li>
        </ul>
    </div>
  )
}
