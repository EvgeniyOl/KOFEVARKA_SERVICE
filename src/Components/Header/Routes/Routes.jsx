import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../../../Pages/Home/Home'

const Routes = (props) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default Routes
