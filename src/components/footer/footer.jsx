import React from "react";
const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="d-sm-flex justify-content-center justify-content-sm-between">
        <span className="text-muted1 d-block text-center text-sm-left d-sm-inline-block ">
          Copyright ©2024
        </span>
        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
          {" "}
          Plateforme{" "}
          <a className="txt" href="" target="_blank">
            Visto Rh{" "}
          </a>{" "}
          from visto-consulting.com
        </span>
      </div>
    </footer>
  </div>
  );
};

export default Footer;
