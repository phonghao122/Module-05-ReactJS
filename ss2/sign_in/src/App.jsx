import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="form-signin text-center">

          <form>
            <img
                className="mb-4"
                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                alt="Bootstrap"
                width="72"
                height="57"
            />

            <h1 className="h3 mb-3 fw-normal">
              Please sign in
            </h1>

            <div className="form-floating mb-2">
              <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">
                Email address
              </label>
            </div>

            <div className="form-floating mb-3">
              <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
              />
              <label htmlFor="floatingPassword">
                Password
              </label>
            </div>

            <div className="form-check text-start mb-3">
              <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
              />

              <label
                  className="form-check-label"
                  htmlFor="rememberMe"
              >
                Remember me
              </label>
            </div>

            <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
            >
              Sign in
            </button>

            <p className="mt-5 mb-3 text-muted">
              © 2017–2021
            </p>
          </form>

        </div>
      </div>
  )
}

export default App