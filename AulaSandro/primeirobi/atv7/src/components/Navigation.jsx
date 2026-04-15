function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Meu Blog</div>
        <ul>
          <li><a className="active" href="#">Home</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Sobre</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;