/** @format */

import React from "react";
import "./About.css";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>about</span> me{" "}
        </h1>

        <div className="row">
          <div className="content">
            <h3>
              I am <span> Prabhat Bhardwaj</span>
            </h3>
            <p>
              Hi Everyone, My name is Prabhat Bhardwaj and I am from Samastipur,
              Bihar (India). I have completed my graduation in B.A. (Eng. &
              Lit.) from L.N.M. University, Darbhanga (Bihar). Then I joined
              full stack development course by Masai School a military type
              coding school.
            </p>
          </div>
        </div>

        <div className="diffrent">
        <h4>Apart from coding, some other activities that I love to do!</h4>
              <p >
                <span className="icons">
                  <ExitToAppIcon />
                </span>
               Watching & Playing Video Games & Cricket{" "}
              </p>
              <p >
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reading Tech Blogs{" "}
              </p>
              <p >
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Social 
                involvance{" "}
              </p>
        </div>

        <a className="btn"  href="https://drive.google.com/file/d/1nZcHIPSBobplKs1Jr5VUX6fAcZQOatfc/view?usp=sharing" target="_blank">
          Download Resume
        </a>
      </section>
    </>
  );
};
