import React from "react";
import "../../styles/footer.css";
import discord from "../../assets/image/discord.png";
import mode from "../../assets/image/emailLogo.png";
import volusion from "../../assets/image/volusion.png";

const Footer = () => {
  return (
    <div className="footerBody">
      <div className="footerContainer">
        <div className="links">
          <h3>Links</h3>
          <div className="linkContainer">
            <p>About</p>
            <p>Guidelins</p>
            <p>Help</p>
            <p>Shop</p>
            <p>Contact</p>
            <p>Testimonials</p>
            <p>Terms</p>
            <p>Media Kit</p>
            <p>Careers</p>
            <p>Advertise</p>
            <p>Privacy</p>
            <p>Apps</p>
          </div>
        </div>
        <div className="jobs">
          <h3>Jobs</h3>
          <div className="jobsContainer">
            <div className="imageCont">
              <img src={discord} alt="" />
            </div>
            <div className="jobText">
              <h5>Discord</h5>
              <p>Senior Graphic Designer</p>
            </div>
          </div>

          <div className="jobsContainer">
            <div className="imageCont">
              <img src={mode} alt="" />
            </div>
            <div className="jobText">
              <h5>Mode</h5>
              <p>Senior Product Designer</p>
            </div>
          </div>

          <div className="jobsContainer">
            <div className="imageCont">
              <img src={volusion} alt="" />
            </div>
            <div className="jobText">
              <h5>Volusion</h5>
              <p>Senior Experience Designner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
