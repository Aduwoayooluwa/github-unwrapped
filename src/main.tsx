import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        fontFamily: 'Work Sans, sans-serif',
        colorPrimary: '#007ACC',
        borderRadius: 2,
        
        //colorText: '#D4D4D4',
        // Alias Token
       // colorBgContainer: '#f6ffed',
      },
    }}
  >
     <App />
  </ConfigProvider>
   
  </StrictMode>,
)
