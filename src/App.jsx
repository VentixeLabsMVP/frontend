import { Route, Routes } from 'react-router-dom'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import Portallayout from './assets/layouts/Portallayout'
import Events from './assets/pages/Events'
import EventDetails from './assets/pages/EventDetails'
function App() {


  return (
    <Routes>
      <Route path="/" element={<Portallayout />}>
        <Route index element={<Events />} />
        <Route path="events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Route>
    </Routes>
  )
}

export default App
