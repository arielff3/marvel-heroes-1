import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HeroProvider } from './contexts/HeroContext'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { GlobalStyle } from './styles/globalStyle'

function App() {
  return (
    <HeroProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </HeroProvider>
  )
}

export default App
