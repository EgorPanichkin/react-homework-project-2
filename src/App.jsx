import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Counter from './pages/Counter'
import User from './pages/User'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/Counter'element={<Counter/>}/>
          <Route path='/User' element={<User/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
