import React from 'react';

const OfferSection = () => {
    return (
        <>
            <section className="section mask-c-blend-dark bg-theme-dark-alt tc-light ov-h" id="ico">
  <div className="container">
    {/* Block @s */}
    <div className="nk-block nk-block-text-wrap">
      <div className="row align-items-center justify-content-center justify-content-md-between gutter-vr-30px">
        <div className="col-mb-9 col-sm-7 col-md-6 col-lg-5 order-md-last">
          <div className="nk-block-img">
            <img src={require("../assets/images/networking.png")} alt="app" />
          </div>
        </div>
        <div className="col-sm-10 col-md-6  text-md-left">
          <div className="nk-block-text">
            <h2 className="title mb-3">What We Offer</h2>
            <p className="lead">By utilizing the power of blockchain technology, LiquidNodes is able to offer a large variety of high yielding cryptocurrency mining rigs without to have it within your home. In addition, we are able to offer long-term, sustainable yields from personalized financial plans which range as low as $70 USD.  </p>
            <a href="https://www.youtube.com/watch?v=SSo_EIwHSd4" className="video-popup btn-play-wrap btn-play-wrap-s1 mt-3">
              <div className="btn-play btn-play-sm btn-play-s2">
                <em className="btn-play-icon" />
              </div>
              <div className="btn-play-text">
                <span className="text-sm">Watch Video</span>
                <span className="text-xs">How it works</span>
              </div>
            </a>
          </div>
        </div>
      </div>{/* .row */}
    </div>{/* .block @e */}
  </div>
</section>

        </>
    );
};

export default OfferSection;