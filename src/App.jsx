
import React from 'react'
import Home from './Pages/Home.jsx'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import YourLibrary from './Pages/YourLibrary'
import SearchSongs from './Pages/SearchSongs'
import CreatePlaylist from './Pages/CreatePlaylist'
import Header from './Components/Layout.jsx'

import Layout from './Components/Layout.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
const App = () => {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path='/home' element={<Home />} />
            <Route path='/yourlibrary' element={<YourLibrary />} />
            <Route path='/search' element={<SearchSongs />} />
            <Route path='/myplaylist' element={<CreatePlaylist />} />
            <Route path='/headers' element={<Header />} />
            <Route path='*' element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App