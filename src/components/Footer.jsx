export default function Footer() {
  return (
    <footer className="page-footer indigo lighten-1">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">React Shop</h5>
            <p className="grey-text text-lighten-4">
              React Simple Shop for Portfolio.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Hryhorii Petrov
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}
