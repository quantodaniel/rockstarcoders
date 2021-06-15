const Header = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row align-items-center py-4">
        <a href="/" className="text-white text-decoration-none fs-4">
          CoderFlix
        </a>
        <nav className="ms-md-auto">
          <a href="/" className="me-3 py-2 text-white text-decoration-none">
            Login
          </a>
          <a href="/" className="btn btn-primary">
            Sign up
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
