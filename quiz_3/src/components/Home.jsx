import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuizBox from './QuizBox';

export default function Home() {
  return (
    <div>
      <div className='container'>
        <h2 className="heading">Quiz App</h2>
        <Link to="/QuizBox">
          <button id="playBtn">Play Quiz</button>
        </Link>
      </div>
    </div>
  )
}