import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BonnouProvider } from './Contexts/BonnouContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BonnouProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BonnouProvider>
  </React.StrictMode>,
)
