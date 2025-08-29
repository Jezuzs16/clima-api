import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WheaterApi } from './WheaterApi'
import './styles/index.css'

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <WheaterApi />

  </StrictMode>,
)
