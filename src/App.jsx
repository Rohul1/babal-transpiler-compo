import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './Components/Device/Device'
import Watch from './Components/Watch/Watch'


function App() {


  return (
    <>
      <Device name="I phone" ></Device>
      <Watch></Watch>
      
    </>
  )
}



export default App
