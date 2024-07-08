import { useState } from 'react'
import './App.css'

function App() {
  let [changer , setChanger] = useState("black");


  
  return (
    <>
     <div id="main" style={{backgroundColor : changer}} className='w-[100%] h-[100vh] bg-black'>
      <div className="background w-[100%] h-[100%] flex items-center justify-center">
          <div className="colors w-auto bg-white flex flex-wrap fixed bottom-5 text-center py-2 rounded-full px-5 gap-5 ">
            <h3 onClick={() => setChanger("green")} className="bg-green-600 rounded-3xl px-2 py-2 w-[80px] cursor-pointer">Green</h3>
            <h3 onClick={() => setChanger("black")} className="bg-black text-white rounded-3xl px-2 py-2 w-[80px] cursor-pointer">Black</h3>
            <h3 onClick={() => setChanger("white")} className="bg-white border text-black rounded-3xl px-2 py-2 w-[80px] cursor-pointer">White</h3>
            <h3 onClick={() => setChanger("red")} className="bg-red-500 text-white rounded-3xl px-2 py-2 w-[80px] cursor-pointer">Red</h3>
            <h3 onClick={() => setChanger("blue")} className="bg-blue-500 text-white rounded-3xl px-2 py-2 w-[80px] cursor-pointer">Blue</h3>
            <h3 onClick={() => setChanger("pink")} className="bg-pink-500 text-white rounded-3xl px-2 py-2 w-[80px] cursor-pointer">Pink</h3>
            <h3 onClick={() => setChanger("purple")} className="bg-purple-500 text-white rounded-3xl px-2 py-2 w-[80px] cursor-pointer">Purple</h3>
          </div>
      </div>
     </div>
    </>
  )
}

export default App
