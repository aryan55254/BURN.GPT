import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './Counter'
import StopWatch from './StopWatch'
import { BrowserRouter , Route ,Routes,Router } from 'react-router-dom'
import Landing from './Landing'
import Home from './Home'
import Task from './Task'
import Notes from './Notes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/stopwatch' element={<StopWatch />} />
      <Route path='/counter' element={<Counter />} />
      <Route path='/tasks' element={<Task />} />
      <Route path='/notes' element={<Notes />} />
    </Routes>
   </BrowserRouter>
  </StrictMode>,
)
