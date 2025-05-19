import { Route, Routes } from 'react-router-dom'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import Portallayout from './assets/layouts/Portallayout'
import Events from './assets/pages/Events'
function App() {


  return (
    <Routes>
      <Route path="/" element={<Portallayout />}>
        <Route index element={<Events />}></Route>
      </Route>
    </Routes>
  )
}

export default App
