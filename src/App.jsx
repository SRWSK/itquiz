import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

function ProtectedRoute({ children }) {
  const isLogin = sessionStorage.getItem('isLogin')

  return isLogin ? children : <Navigate to="/" replace />
}

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  )
}

export default App