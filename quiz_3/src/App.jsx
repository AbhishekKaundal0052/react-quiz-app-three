import Home from './components/Home'
import QuizBox from './components/QuizBox'
import Result from './components/Result'
import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

return (
  <div>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/QuizBox' element={<QuizBox />}></Route>
      <Route path='/Result' element={<Result />}></Route>
    </Routes>
  </div>
)
}

export default App
