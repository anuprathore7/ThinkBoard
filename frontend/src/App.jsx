import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NodeDetailPage from './pages/NodeDetailPage'


const App = () => {
  return (
    <div data-theme="sunset">
     <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/node/:id" element={<NodeDetailPage/>} />
     </Routes>
    </div>
  )
}

export default App
