import { Route, Routes } from 'react-router-dom'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import Portallayout from './assets/layouts/Portallayout'
import Events from './assets/pages/Events'
import EventDetails from './assets/pages/EventDetails'

import LoginPage from './assets/pages/LoginPage'
import SignupPage from './assets/pages/SignUp';
// import LoginPage from './assets/pages/Login';
// import VerifyPage from './assets/pages/Verify';
function App() {


  return (
    <Routes>
      {/*event page portal  */}
      <Route path="/" element={<Portallayout />}>
        <Route index element={<Events />} />
        <Route path="events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Route>

      {/* authportal */}
      <Route path="/account" element={<CenterLayout />}>
        {/* <Route path="login" element={<LoginPage />} /> */}
        <Route path="signup" element={<SignupPage />} />
        {/* <Route path="verify" element={<VerifyPage />} /> */}
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default App
