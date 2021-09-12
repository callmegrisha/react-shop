export default function Header() {
  return (
    <nav className="indigo lighten-1">
      <div className="container">
        <div className="nav-wrapper">
          <a href="/#" className="brand-logo">
            React Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/#">
                <i className="large material-icons">shopping_cart</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
