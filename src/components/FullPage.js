import React from 'react'
import Head from './Head'
import { Outlet } from 'react-router-dom'

const FullPage = () => {
  return (
    <div>
          <Head/>
          <Outlet/>
    </div>
  )
}

export default FullPage