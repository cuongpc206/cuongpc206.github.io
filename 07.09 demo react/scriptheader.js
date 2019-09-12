function MyHeader() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top bkg">
        <a className="navbar-brand" href="index.html">
          <img src="img/logo.jpg" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link" href="index.html">
                Trang chủ <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="banhngot.html">
                Bánh ngọt{" "}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Đồ uống
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="tra.html">
                  Trà
                </a>
                <a className="dropdown-item" href="nuocep.html">
                  Nước ép hoa quả
                </a>
                <a className="dropdown-item" href="sinhto.html">
                  Sinh tố
                </a>
                <a className="dropdown-item" href="coffee.html">
                  Coffee
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html">
                {" "}
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="cuahang.html">
                {" "}
                Cửa hàng
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="giohang.html">
                <i className="fa fa-cart-plus fa-1" aria-hidden="true" />
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Tìm kiếm"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </form>
        </div>
      </nav>

      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="blogchitiet.html">
                <img src="img/slice1.png" className="d-block w-100" alt="..." />
              </a>
            </div>
            <div className="carousel-item">
              <a href="blogchitiet.html">
                <img src="img/slice1.png" className="d-block w-100" alt="..." />
              </a>
            </div>
            <div className="carousel-item">
              <a href="blogchitiet.html">
                <img src="img/slice1.png" className="d-block w-100" alt="..." />
              </a>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <br />
        <div id="wp-slider">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <a href="chitiet.html">
                <img
                  src="img/trangchu/spbanchay/1.png"
                  className="img-fluid"
                  alt={1}
                />
              </a>
            </div>
            <div className="item">
              <a href="chitiet.html">
                <img
                  src="img/trangchu/spbanchay/2.png"
                  className="img-fluid"
                  alt={2}
                />
              </a>
            </div>
            <div className="item">
              <a href="chitiettra.html">
                <img
                  src="img/trangchu/spbanchay/3.png"
                  className="img-fluid"
                  alt={3}
                />
              </a>
            </div>
            <div className="item">
              <a href="chitiet.html">
                <img
                  src="img/trangchu/spbanchay/4.png"
                  className="img-fluid"
                  alt={4}
                />
              </a>
            </div>
            <div className="item">
              <a href="chitiet.html">
                <img
                  src="img/trangchu/spbanchay/4.png"
                  className="img-fluid"
                  alt={5}
                />
              </a>
            </div>
            <div className="item">
              <a href="chitiet.html">
                <img
                  src="img/trangchu/spbanchay/2.png"
                  className="img-fluid"
                  alt={6}
                />
              </a>
            </div>
            <div className="item">
              <a href="chitietsinhto.html">
                <img
                  src="img/trangchu/spbanchay/3.png"
                  className="img-fluid"
                  alt={7}
                />
              </a>
            </div>
            <div className="item">
              <a href="chitiet.html">
                <img
                  src="img/trangchu/spbanchay/4.png"
                  className="img-fluid"
                  alt={8}
                />
              </a>
            </div>
            <div className="item">
              <a href="chitietsinhto.html">
                <img
                  src="img/trangchu/spbanchay/1.png"
                  className="img-fluid"
                  alt={9}
                />
              </a>
            </div>
            <div className="item">
              <a href="chitietsinhto.html">
                <img
                  src="img/trangchu/spbanchay/3.png"
                  className="img-fluid"
                  alt={10}
                />
              </a>
            </div>
            <div className="item">
              <a href="chitiet.html">
                <img
                  src="img/trangchu/spbanchay/1.png"
                  className="img-fluid"
                  alt={11}
                />
              </a>
            </div>
            <div className="item">
              <a href="chitiet.html">
                <img
                  src="img/trangchu/spbanchay/4.png"
                  className="img-fluid"
                  alt={12}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
