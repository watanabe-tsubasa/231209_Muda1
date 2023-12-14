import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BonnouProvider } from './Contexts/BonnouContext.tsx'
import { JoyaBellProvider } from './Contexts/JoyaBellContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BonnouProvider>
        <JoyaBellProvider>
          <App />
        </JoyaBellProvider>
      </BonnouProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
