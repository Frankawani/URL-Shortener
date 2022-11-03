import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pintrest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import logo from "../images/footer-logo.svg";

function Footer() {
  return (
    <>
      <footer className="bg-slate-900 py-10 lg:py-20 ">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
          <article>
            <img src={logo} alt="" />
          </article>
          <article>
            <h3 className=" text-white text-lg font-bold tracking-wide">
              Features
            </h3>
            <ul>
              <li>
                <buttons className="text-slate-200 text-sm mt-1">
                  Link Shortening
                </buttons>
              </li>
              <li>
                <buttons className="text-slate-200 text-sm mt-1">
                  Branded Links
                </buttons>
              </li>
              <li>
                <buttons className="text-slate-200 text-sm mt-1">
                  Analytics
                </buttons>
              </li>
            </ul>
          </article>

          <article>
            <h3 className=" text-white text-lg font-bold tracking-wide">
              Resources
            </h3>
            <ul>
              <li>
                <buttons className="text-slate-200 text-sm mt-1">Blog</buttons>
              </li>
              <li>
                <buttons className="text-slate-200 text-sm mt-1">
                  Developer
                </buttons>
              </li>
              <li>
                <buttons className="text-slate-200 text-sm mt-1">
                  Support
                </buttons>
              </li>
            </ul>
          </article>

          <article>
            <h3 className=" text-white text-lg font-bold tracking-wide">
              Company
            </h3>
            <ul>
              <li>
                <buttons className="text-slate-200 text-sm mt-1">About</buttons>
              </li>
              <li>
                <buttons className="text-slate-200 text-sm mt-1">
                  Our Team
                </buttons>
              </li>
              <li>
                <buttons className="text-slate-200 text-sm mt-1">
                  Careers
                </buttons>
              </li>
              <li>
                <buttons className="text-slate-200 text-sm mt-1">
                  Contact
                </buttons>
              </li>
            </ul>
          </article>
          <article>
            <ul className=" flex items-center">
              <li>
                <img src={facebook} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" className="ml-4" />
              </li>
              <li>
                <img src={pintrest} alt="" className="mx-5" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  );
}

export default Footer;
