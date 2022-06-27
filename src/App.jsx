import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/userDetails'
import SetUserDetails from './routes/SetUserDetails'
import FetchUserDetails from './routes/FetchUserDetails'

// Route that goes to let us assign a user. 
// When we click the button that assigns the user
// Go to user's start page. 

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SetUserDetails />} />
          <Route path="/user" element={<FetchUserDetails />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
