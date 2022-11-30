/** @format */

import React from "react";
import "./Home.css";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            <span>Hi, I'm </span>
            <span>Prabhat Bhardwaj</span>
          </h3>
          {/* <h3></h3> */}
          <p>
            <Typewriter
              options={{
                strings: ["Full Stack Web Developer", "MERN Stack Developer",  "Open Source Contributor", ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </p>
          <a className="btn" href="https://drive.google.com/file/d/1pq5EVATIFo9s1z8viJIF1kZtS9NapjDB/view" target="_blank"  >
            Download Resume
          </a>
        </div>

        <div className="share">
          <a href="https://github.com/AWMprabhat"
            target="_blank"
            rel="noreferrer"
            className="fab fa-github" />
          <a target="_blank"
            href="https://www.linkedin.com/in/prabhat-bhardwaj-598419233/"
            rel="noreferrer"
            className="fab fa-linkedin" />

          <a  target="_blank"
            href="mailto:prabhatbhardwajjuly18@gmail.com"
            rel="noreferrer"
            className="fa fa-envelope" />
        </div>
      </section>
    </>
  );
};

export const Party = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -9999;
`;
