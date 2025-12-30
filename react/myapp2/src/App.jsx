import React from 'react'
// import "./index.css"
import "../public/assets/scss/style.scss"

function App() {

  return (
    <>
      <div>
        <h1>Hello! Sazzad </h1>
      </div>
      <h1 className="text-2xl font-bold underline text-yellow-200">
        Hello world!
      </h1>

      <div className="gap-4 mt-2 grid grid-cols-12 ">
        <div className="bg-cyan-400 h-12 "></div>
        <div className="bg-cyan-500 h-12"></div>
        <div className="bg-cyan-700 h-12"></div>
        <div className="bg-cyan-600 h-12"></div>
      </div>
    </>
  )
}

export default App
