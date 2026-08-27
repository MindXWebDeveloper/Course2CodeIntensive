import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'
import Hello from './components/Hello'
import Card from './components/Card/card'

function App() {
  const [count, setCount] = useState(0)
  const school = "MindX";
  return (
    <>
      <div className="app">
        <Card name={"Nguyễn Văn Tài"} className={"Code Intensive"} note={"Trở thành master coding là ước mơ của tôi"}/>
        <Card name={"Trịnh Mẫn Nhi"} className={"Web FullStack"} note={"Học nữa, học mãi"}/>
        <Card name={"Vũ Long Môn"} className={"Code For Everyone"} note={"Quyết tâm thành tạo ReactJs"}/>
     </div>
    </>
  )
}

export default App
