import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="nk-footer bg-theme-alt section-connect">
  <div className="section section-m pb-0 tc-light ov-h">
    <div className="container py-4">
      {/* Block @s */}
      {/* .block @e */}
    </div>
    <div className="nk-ovm shape-contain shape-center-top shape-p" />
  </div>
  <div className="section section-footer section-s tc-light bg-transparent">
    <div className="container">
      {/* Block @s */}
      <div className="nk-block block-footer">
        <div className="row">
          <div className="col">
            <div className="wgs wgs-text text-center me-4 mb-3">
              <ul className="social pdb-m justify-content-center">
                <li><Link to="https://discord.gg/S2z22bpMsk"><i className="social-icon bi bi-discord" /></Link></li>
                <li><a href="http://twitter.com/LiquidNodes"><em className="social-icon bi bi-twitter" /></a></li>
                <li><a href="https://github.com/LiquidNodes"><em className="social-icon bi bi-github" /></a></li>
              </ul>
              <div className="copyright-text copyright-text-s3 pdt-m">
                <p><span className="d-sm-block">Copyright © 2022, LiquidNodes LLC. </span></p>
              </div>
            </div>

            
          </div>
        </div>
      </div>{/* .block @e */}
    </div>
  </div>
</footer>

  );
}

export default Footer;
