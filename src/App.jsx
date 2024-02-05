import { useState } from "react"


function App() {
  const [color,setColor] = useState("olive")


  //We can also do this
  // const changeColor = ()=>{
  //   setColor("red")
  // }

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"red"}}>Red</button>
          <button
          onClick={()=> setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"green"}}>Green</button>
          <button 
          onClick={()=> setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"blue"}}>Blue</button>
          <button 
          onClick={()=> setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"purple"}}>Purple</button>
          <button 
          onClick={()=> setColor("#CD5C5C")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#CD5C5C"}}>IndianRed</button>
          <button 
          onClick={()=> setColor("#E42ED9")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#E42ED9"}}>Pink</button>
          <button 
          onClick={()=> setColor("#E7AE0B")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#E7AE0B"}}>Orange</button>
          <button 
          onClick={()=> setColor("#0BDDE7")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"#0BDDE7"}}>Nai Pata</button>
        </div>
      </div>
    </div>
  )
}

export default App
