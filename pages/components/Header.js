import Link from 'next/link';

function Header(){
    return <nav className="navbar" role="navigation" aria-label="main navigation">
    {
        <>
      <div className="navbar-brand">
          <div className="navbar-item">
      <Link  href="/">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </Link></div>
    
      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
          <div className="navbar-item">
        <Link href="/" >
          Portada
        </Link>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            Servicios
          </a>
          <div className="navbar-dropdown">
              <div className="navbar-item">
            <Link href="/producto/1" >
              Netflix
            </Link>
            </div>
            <div className="navbar-item">

            <Link href="/producto/2">
              AmazonVideo
            </Link>
            </div>
            <hr className="navbar-divider" />
            <a className="navbar-item">
            Contacto
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Carrito</strong>
            </a>
            <a className="button is-light">
              Mi Cuenta
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
    }       </nav>




}
export default Header;
