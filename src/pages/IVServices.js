import React from 'react'
import MainMenu from '../navbar/MainMenu'
import { Navigate } from 'react-router-dom'

function IVServices() {
  const pathName = window.location.pathname.split('/')

  return (
    <>
      {MainMenu.mainMenu[0].products.filter(item => item.slug === pathName[2]).length > 0 ?
        MainMenu.mainMenu[0].products.filter(item => item.slug === pathName[2]).map((pro) => (
          <h2> {pro.title} </h2>
        )) : <Navigate to='/*' />
      }
    </>
  )
}

export default IVServices