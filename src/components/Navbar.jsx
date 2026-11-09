const Navbar = ({ onNavigate, total }) => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3 py-2">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">🍕 Pizzería Mamma Mia!</span>
        <div className="d-flex gap-2 flex-wrap justify-content-end">
          <button
            className="btn btn-outline-light btn-sm"
            type="button"
            onClick={() => onNavigate('home')}
          >
            🏠 Home
          </button>
          <button
            className="btn btn-outline-light btn-sm"
            type="button"
            onClick={() => onNavigate('login')}
          >
            🔐 Login
          </button>
          <button
            className="btn btn-outline-light btn-sm"
            type="button"
            onClick={() => onNavigate('register')}
          >
            🔐 Register
          </button>
          <button
            className="btn btn-outline-info btn-sm"
            type="button"
            onClick={() => onNavigate('cart')}
          >
            🛒 Total: ${total.toLocaleString('es-CL')}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
