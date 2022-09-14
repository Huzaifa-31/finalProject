import React from "react";
// import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import img from "./assets/img/img-car.png";
import "./assets/css/style.css";
import background from "./assets/img/why-us.png";
const hometmp = () => {
  return (
    <>
      <header id="header" class="fixed-top ">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            <a href="index.html">Arsha</a>
          </h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a class="nav-link   scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li class="dropdown">
                <a href="/">
                  <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="/">Drop Down 1</a>
                  </li>
                  <li class="dropdown">
                    <a href="/">
                      <span>Deep Drop Down</span>{" "}
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="/">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="/">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="/">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="/">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="/">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="/">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a class="getstarted scrollto" href="#about">
                  Get Started
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      <section id="hero" class="d-flex align-items-center">
        <div className="container">
          <div class="row">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>
                Search and find <br /> your best car rental <br />
                with easy way
              </h1>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                nulla ab quod aut quam consectetur id neque. Sunt tenetur
              </h2>
              <div class="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" class="btn-get-started scrollto">
                  Book now
                </a>
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  class="glightbox btn-watch-video"
                >
                  <i class="bi bi-play-circle"></i>
                  <span>See all cars</span>
                </a>
              </div>
            </div>
            <div
              class="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={img} class="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="clients" class="clients section-bg">
        <div class="container">
          <div class="row" data-aos="zoom-in">
            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("./assets/img/clients/client-1.png")}
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("./assets/img/clients/client-2.png")}
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("./assets/img/clients/client-3.png")}
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("./assets/img/clients/client-4.png")}
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("./assets/img/clients/client-5.png")}
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("./assets/img/clients/client-6.png")}
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>About Us</h2>
          </div>

          <div class="row content">
            <div class="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat
                </li>
                <li>
                  <i class="ri-check-double-line"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit
                </li>
                <li>
                  <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat
                </li>
              </ul>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a href="/" class="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" class="why-us section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div class="content">
                <h3>
                  Eum ipsam laborum deleniti
                  <strong>velit pariatur architecto aut nihil</strong>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
              </div>

              <div class="accordion-list">
                <ul>
                  <li>
                    <a
                      data-bs-toggle="collapse"
                      class="collapse"
                      data-bs-target="#accordion-list-1"
                    >
                      <span>01</span> Non consectetur a erat nam at lectus urna
                      duis? <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-1"
                      class="collapse show"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-2"
                      class="collapsed"
                    >
                      <span>02</span> Feugiat scelerisque varius morbi enim
                      nunc? <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-2"
                      class="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-list-3"
                      class="collapsed"
                    >
                      <span>03</span> Dolor sit amet consectetur adipiscing
                      elit? <i class="bx bx-chevron-down icon-show"></i>
                      <i class="bx bx-chevron-up icon-close"></i>
                    </a>
                    <div
                      id="accordion-list-3"
                      class="collapse"
                      data-bs-parent=".accordion-list"
                    >
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="col-lg-5 align-items-stretch order-1 order-lg-2 img"
              style={{ backgroundImage: `url(${background})` }}
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              &nbsp;
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default hometmp;
