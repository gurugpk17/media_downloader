import React from 'react';
import Nav from './Components/nav'
import Youtube from './Components/youtube_down'
import Search from './Components/search'
import './App.css';

export default function App() {
  return (
    <div classname="Container">
      <Nav />
      <Youtube />
      <Search />
    </div>
  )
}