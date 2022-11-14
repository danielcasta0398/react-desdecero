import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contacto } from '../components/Contacto/Contacto'
import { Home } from '../components/Home/Home'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/contacto' element={<Contacto />} />
        </Routes>
    </BrowserRouter>
  )
}
