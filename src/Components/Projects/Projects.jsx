/** @format */

import React from "react";
import "./Portfolio.css";

import styled from "styled-components";

export const Projects = () => {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <h1 className="heading">
          {" "}
          my <span>projects</span>{" "}
        </h1>

        <div className="box-container">
          {/* 1--------------------------------------------------- */}
          <div className="box">
            <img
              src="https://images.squarespace-cdn.com/content/v1/57981c77cd0f68be0b7e4664/1559190662617-O1H7SFIPXNU666VPX4LE/18_CONV_Scoops.gif?format=1500w"
              alt=""
            />
            <div className="content">
              <h3>Rodan + Fields clone</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  href="https://github.com/AWMprabhat/Rodanandfields"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://rodanfields.netlify.app/"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <Card>
                <Image>
                  <img src="/Images/html.png" alt="" />
                  <Text>
                    <span id="span" className="heading ">
                      HTML
                    </span>
                  </Text>
                </Image>
                <Image>
                  <img src="/Images/css.png" alt="" />
                  <Text>
                    <span id="span" className="heading ">
                      CSS
                    </span>
                  </Text>
                </Image>
                <Image>
                  <img src="/Images/js.png" alt="" />
                  <Text>
                    <span id="span" className="heading ">
                      JS
                    </span>
                  </Text>
                </Image>
              </Card>
              <h3>
                <br />A team project to clone Rodan + Fields bulit during the
                contruct week of unit-2 at Masai. Here we can purchase skincare
                Related Products.{" "}
              </h3>
            </NewDiv>
          </div>
          {/* 2 ----------------------------------------------------------*/}
          <div className="box">
            <img
              src="https://github.com/AWMprabhat/shiny-hydrant-7464/raw/master/src/utils/jobpage.PNG"
              alt=""
            />
            <div className="content">
              <h3>Naukri.com Clone</h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AWMprabhat/shiny-hydrant-7464"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://awmnaukri.netlify.app/"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <h3>
                <Card>
                  <Image>
                    <img src="/Images/react.png" alt="" />
                    <Text>
                      <span id="span" className="heading ">
                        REACT
                      </span>
                    </Text>
                  </Image>
                  <Image>
                    <img src="/Images/redux.png" alt="" />
                    <Text>
                      <span id="span" className="heading ">
                        REDUX
                      </span>
                    </Text>
                  </Image>
                  <Image>
                    <img
                      src="https://e7.pngegg.com/pngimages/735/462/png-clipart-heroku-computer-icons-computer-servers-catalog-server-cloud-storage-24-computer-network-text.png"
                      alt=""
                    />
                    <Text>
                      <span id="span" className="heading ">
                        HEROKU
                      </span>
                    </Text>
                  </Image>
                  <Image>
                    <img
                      src="https://www.coffeeclass.io/logos/chakra-ui.png"
                      alt=""
                    />
                    <Text>
                      <span id="span" className="heading ">
                        CHAKRA
                      </span>
                    </Text>
                  </Image>
                </Card>
                A clone of naukri.com website, It isan Indian employment website
                operating in India and Middle East. This project is done in
                unit-5 at Masai School.
              </h3>
            </NewDiv>
          </div>
          {/* 3 ------------------------------------------------------------*/}
          <div className="box">
            <img
              src="https://media3.giphy.com/media/kEbPufAQAhh6FaFlFt/giphy.gif?cid=790b7611f158933bfd1a076ff53d2af44af3c806d80a4788&rid=giphy.gif&ct=s"
              alt=""
            />
            <div className="content">
              <h3>Sugar Cosmetics Clone</h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AWMprabhat/SugarCosmetic"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://sigarmehnat.netlify.app/"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <NewDiv>
              <Card>
                <Image>
                  <img src="/Images/react.png" alt="" />
                  <Text>
                    <span id="span" className="heading ">
                      REACT
                    </span>
                  </Text>
                </Image>
                <Image>
                  <img
                    src="https://icons.getbootstrap.com/assets/img/icons-hero.png"
                    alt=""
                  />
                  <Text>
                    <span id="span" className="heading ">
                      BOOTSTRAP
                    </span>
                  </Text>
                </Image>
                <Image>
                  <img src="https://mui.com/static/logo.png" alt="" />
                  <Text>
                    <span id="span" className="heading ">
                      MATERIAL UI
                    </span>
                  </Text>
                </Image>
              </Card>
              <h3>
                A team project to clone “Sugar Cosmetics” bulit during the
                contruct week of unit-4 at Masai School Trying to clone “Sugar
                Cosmetics”. Here you can purchase Buauty Related Products
              </h3>
            </NewDiv>
          </div>

          {/* 4--------------------------------------------------------- */}
          <div className="box">
            <img
              src=" https://dineshbisht.vercel.app/project_img/kfc.png "
              alt=""
            />
            <div className="content">
              <h3>KFC</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "40%",
                }}
              >
                <a
                  className="icons-git"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/AWMprabhat/KFC-.-COM___Clone"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/github-brands.svg"
                    alt=""
                  />
                </a>
                <a
                  className="icons-git"
                  href="https://rococo-sunburst-64227a.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src="/Images/globe-solid.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <NewDiv>
              <Card>
                <Image>
                  <img src="/Images/react.png" alt="" />
                  <Text>
                    <span id="span" className="heading ">
                      REACT
                    </span>
                  </Text>
                </Image>
                <Image>
                  <img src="/Images/html.png" alt="" />
                  <Text>
                    <span id="span" className="heading ">
                      HTML
                    </span>
                  </Text>
                </Image>
                <Image>
                  <img src="/Images/css.png" alt="" />
                  <Text>
                    <span id="span" className="heading ">
                      CSS
                    </span>
                  </Text>
                </Image>
                <Image>
                  <img src="/Images/js.png" alt="" />
                  <Text>
                    <span id="span" className="heading ">
                      JS
                    </span>
                  </Text>
                </Image>
              </Card>
              <h3>
                This is a frontend clone of KFC.com. Which is a food delivery
                company. We used html, css, javascript to bulid to this project.
              </h3>
            </NewDiv>
          </div>
          {/* other link */}
          
          <div className="box">
            <NewDiv>
              <Card><h1 style={{"color":"green", fontSize:"22px"}}>Some other works....👇</h1></Card>
              <Card style={{"color":"green", fontSize:"22px"}}> <a href="https://awm-timer-stopwatch.netlify.app" target="_blank">1. Timmer & StopWatch⌛⏱</a> </Card>
              <Card style={{"color":"green", fontSize:"22px"}}><a href="https://awm-tic-tac-toe-game.netlify.app" target="_blank">2. Game ❌ or ⭕ 🀄</a></Card>
              <Card style={{"color":"green", fontSize:"22px"}}><a href="https://awm-weather.netlify.app/" target="_blank" >3. Weather by city 🌦</a>
              </Card>
              <Card style={{"color":"green", fontSize:"22px"}}><a href="https://awm-sneha-calculator.netlify.app" target="_blank">4. Calculator 🧮</a>
              </Card>
            </NewDiv>
          </div>

        </div>
      </section>
    </>
  );
};

const NewDiv = styled.div`
  height: 15rem;
  width: 100%;
  & h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--black);
    text-transform: uppercase;
    padding: 1rem 1rem;
  }
`;
// ..........................
const Image = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 0px;
  & img {
    width: 50%;
    height: 50%;
  }
`;

const Card = styled.div`
  height: 80px;
  weidth: 80px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  position: relative;
  border: 1rem solid transparent;
  margin: 10px 10px;
  padding: 10px 0;
  border-radius: 4px;
  justify-content: space-around;

  &:hover {
    transform: scale(1.04);
  }
`;

const Text = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-align-items: none !important;
  display: -webkit-box !important;
  & #span {
    font-size: 12px !important;
  }

  @media (max-width: 600px) {
    #span {
      font-size: 13px !important;
    }
  }
`;
