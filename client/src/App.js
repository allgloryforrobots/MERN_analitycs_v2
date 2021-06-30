import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import LayoutLayer from './layout/LayoutLayer'
import LocalStorageLoader from './components/LocalStorageLoader'
import { Routes } from './Routes'


export default function App() {
  
  return (
    <Router>

      <LocalStorageLoader/>
      <LayoutLayer>
        <Routes/>
      </LayoutLayer>
    </Router>
  )
}








