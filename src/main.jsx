import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './Counter'
import StopWatch from './StopWatch'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StopWatch />
    
  </StrictMode>,
)
