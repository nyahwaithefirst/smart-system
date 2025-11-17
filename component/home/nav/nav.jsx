export default function Nav() {
  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <a href="index.html" className="navbar-brand p-0">
          <h1 className="m-0">
            <i className="fa fa-user-tie me-2"></i>Smart Analysis
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="/products" className="nav-item nav-link">
              Products
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Blog
              </a>
              <div className="dropdown-menu m-0">
                <a href="blog.html" className="dropdown-item">
                  Blog Grid
                </a>
                <a href="detail.html" className="dropdown-item">
                  Blog Detail
                </a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="price.html" className="dropdown-item">
                  Pricing Plan
                </a>
                <a href="feature.html" className="dropdown-item">
                  Our features
                </a>
                <a href="team.html" className="dropdown-item">
                  Team Members
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="quote.html" className="dropdown-item">
                  Free Quote
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>

          <div className="d-flex align-items-center ms-3">
            <button
              type="button"
              className="btn text-primary me-2"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa fa-search"></i>
            </button>
            <a href="/auth" className="btn btn-outline-light me-2">
              Sign In
            </a>
            <a href="/products" className="btn btn-primary">
              Sign Up
            </a>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="w-100"
              src="/assets/img/carousel-1.jpg"
              alt="Image"
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Insightful & Reliable
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Accurate. Transparent. Diligent.
                </h1>
                <a
                  href="quote.html"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Free Quote
                </a>
                <a
                  href=""
                  className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="w-100"
              src="/assets/img/carousel-2.jpg"
              alt="Image"
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Precise & Dependable
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Smart & Secure Compliance Solution
                </h1>
                <a
                  href="quote.html"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Free Quote
                </a>
                <a
                  href=""
                  className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
