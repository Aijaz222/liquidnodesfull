import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OfferSection from "../components/OfferSection";
import Roadmap from "../components/Roadmap";

function Home() {
  useEffect(() => {
  

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select("#navbar .scrollto", true);
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };
    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select("#header");
      let offset = header.offsetHeight;

      if (!header.classList.contains("header-scrolled")) {
        offset -= 20;
      }

      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    };

    /**
     * Toggle .header-scrolled class on #header when page is scrolled
     */
    let selectHeader = select("#header");
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add("header-scrolled");
        } else {
          selectHeader.classList.remove("header-scrolled");
        }
      };
      window.addEventListener("load", headerScrolled);
      onscroll(document, headerScrolled);
    }

    /**
     * Back to top button visibility
     */
    let backtotop = select(".back-to-top");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      };
      window.addEventListener("load", toggleBacktotop);
      onscroll(document, toggleBacktotop);  //document.scroll listnr
    }

    /**
     * Mobile nav toggle
     */
    on("click", ".mobile-nav-toggle", function (e) {
      select("#navbar").classList.toggle("navbar-mobile");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });

    /**
     * Mobile nav dropdowns activate
     */
    on(
      "click",
      ".navbar .dropdown > a",
      function (e) {
        if (select("#navbar").classList.contains("navbar-mobile")) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle("dropdown-active");
        }
      },
      true
    );

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on(
      "click",
      ".scrollto",
      function (e) {
        if (select(this.hash)) {
          e.preventDefault();

          let navbar = select("#navbar");
          if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
            let navbarToggle = select(".mobile-nav-toggle");
            navbarToggle.classList.toggle("bi-list");
            navbarToggle.classList.toggle("bi-x");
          }
          scrollto(this.hash);
        }
      },
      true
    );

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener("load", () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });
  }, []);
 
  return (
    <div>
      <Header/>
      {/* End Header  */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="clearfix">
        <div className="container d-flex h-100">

        <div className="header-banner bg-theme-dark">
  <div className="nk-banner">
    <div className="banner banner-mask-fix banner-fs banner-single tc-light">
      <div className="banner-wrap">
        <div className="container">
          <div className="row align-items-center justify-content-center gutter-vr-30px">
            <div className="col-lg-6 order-lg-last">
              <div className="banner-gfx banner-gfx-re-s3">
                <img src={require("../assets/images/dark/gfx-d-dark.png")} alt="header" />
                {/* <img className="banner-gfx-icon banner-gfx-icon-1" src={require("../assets/images/logo.png")} alt='23' />
                <img className="banner-gfx-icon banner-gfx-icon-2" src={require("../assets/images/dai.png")} alt='2' /> */}
              </div>
            </div>
            <div className="col-lg-6 mt-5">
              <div className="banner-caption wide-auto d-flex flex-column align-items-center  text-lg-left">
                <div className="mt-0">
                  <h1 className="title title-xl-2 title-semibold">Cryptocurrency Mining Made Simple and Affordable</h1>
                </div>
                <div className="cpn-text text-muted cpn-text-s1">
                  <p className="lead">By utilizing the power of blockchain technology, LiquidNodes is able to offer a large variety of high yielding cryptocurrency mining rigs without the need of having it within your home.</p>

                  <div className="cpn-btns">
                  <ul className="btn-grp d-flex float-left justify-content-start">
                    <li><Link to="#" className="btn btn-md btn-grad btn-round">Dashboard</Link></li>
                    <li><Link to="https://mac-eth.gitbook.io/liquidnodes/" target="_blank" className="btn btn-md btn-grad btn-grad-alternet btn-round">Documentation</Link></li>
                  </ul>
                </div>

                <div className="cpn-social">
                  <ul className="social">
                    <li><a href="https://discord.gg/S2z22bpMsk"><em className="social-icon bi bi-discord" /></a></li>
                    <li><a href="https://twitter.com/LiquidNodes"><em className="social-icon bi bi-twitter" /></a></li>
                    <li><a href="https://github.com/LiquidNodes"><em className="social-icon bi bi-github" /></a></li>
                   
                  </ul>
                </div>


                </div>

                
               
                
              </div>
            </div>{/* .col */}
          </div>{/* .row */}
        </div>
      </div>
    </div>
  </div>{/* .nk-banner */}
  <div className="nk-ovm mask-c-dark shape-v mask-contain-bottom" />
  {/* Place Particle Js */}
  <div id="particles-bg" className="particles-container particles-bg" data-pt-base="#00c0fa" data-pt-base-op=".3" data-pt-line="#2b56f5" data-pt-line-op=".5" data-pt-shape="#00c0fa" data-pt-shape-op=".2" />
</div>

        </div>
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= offer Section ======= --> */}
       

        <section id="offer" className="">
          
            <OfferSection/>
          
        </section>

        {/* <!-- End offer Section --> */}

        {/* Roadmap section */}

        <section className="section bg-theme  tc-light section-connect" id="roadmap">
  <div className="container ov-h">
    <div className="section-head text-center wide-auto-sm">
      <h2 className="title title-s4" title="Roadmap">LiquidNodes Roadmap</h2>
    </div>
  </div>
     
     <Roadmap/>
</section>

        {/* FAQ section */}
        <section class="section bg-theme-dark tc-light pb-0" id="faqs">
          <Faq/>
        </section>
        <section style={{height: 120}} />

        {/* <!-- ======= Footer ======= --> */}
        <Footer/>
        {/* <!-- End  Footer --> */}
      </main>
    </div>
  );
}

export default Home;
