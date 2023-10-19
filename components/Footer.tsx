import React from "react";

const Footer = () => {
  return (
    <div className="py-8 w-full xl:px-16 md:px-8 px-4 bg-primary text-white ">
      <div className="xl:flex space-y-4 xl:space-y-0">
        <div className="xl:w-1/4  ">
          <div>
            <h5 className="font-bold text-xl uppercase">O8 Tyres</h5>
            <p>
              4/18 NH 47, near KSRTC Garage, Aluva,
              <br /> Kerala 683106
            </p>
          </div>
        </div>
        <div className="xl:w-1/4 ">
          <div>
            <h5 className=" text-base ">Support</h5>
            <p>
              support@o8tyres.com
              <br /> +91 9446821100
            </p>
          </div>
        </div>
        <div className="xl:w-1/4 ">
          <div>
            <h5 className=" text-base ">Pages</h5>
            <p>
              About
              <br /> Contact
            </p>
          </div>
        </div>
        <div className="xl:w-1/4 ">
          <div>
            <h5 className=" text-base ">Social</h5>
            <p>
              Facebook
              <br /> Instagram
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
