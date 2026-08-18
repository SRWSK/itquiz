import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {

    e.preventDefault()

    if (username === 'admin' && password === '12345678') {

      sessionStorage.setItem('isLogin', 'true')

      navigate('/home')

    } else {

      setError('Username หรือ Password ไม่ถูกต้อง')

    }
  }

  return (

    <main className="login-page">

      <div className="login-bg"></div>

      <div className="login-overlay"></div>

      <div className="login-decoration">
        進撃の巨人
      </div>

      <div className="login-container">

        <div className="login-top">

          <span>ATTACK ON TITAN</span>

          <div></div>

          <span>CHARACTER DATABASE</span>

        </div>

        <div className="login-card">

          <div className="login-symbol">
            進
          </div>

          <p className="login-label">
            ENTER THE WORLD
          </p>

          <h1>
            EREN
            <span>YEAGER</span>
          </h1>

          <p className="login-description">
            Discover the story, journey and freedom
            of Eren Yeager.
          </p>

          <form onSubmit={handleLogin}>

            <div className="form-group">

              <label>
                USERNAME
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                placeholder="Enter username"
              />

            </div>

            <div className="form-group">

              <label>
                PASSWORD
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter password"
              />

            </div>

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <button
              className="login-button"
              type="submit"
            >
              <span>ENTER</span>
              <b>→</b>
            </button>

          </form>

          <div className="login-demo">
            Demo account : <strong>admin / 12345678</strong>
          </div>

        </div>

        <div className="login-bottom">

          <span>FREEDOM</span>

          <span>•</span>

          <span>HUMANITY</span>

          <span>•</span>

          <span>EREN YEAGER</span>

        </div>

      </div>

    </main>

  )
}

export default Login