import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Catering from './pages/Catering'
import Locations from './pages/Locations'
import Shop from './pages/Shop'
import Explore from './pages/Explore'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Layout>
  )
}

export default App
