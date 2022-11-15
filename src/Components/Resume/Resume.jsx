/** @format */
import React from "react";
import styled from "styled-components";
import Github from "./Github";

export const Resume = () => {
  return (
    <>
      <Main id="resume">
        <h1 className="heading">
          {" "}
          <span>my</span> skills{" "}
        </h1>

        <Skills>
          <Card>
            <Image>
              <img src="/Images/html.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                HTML
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/css.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                CSS
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/js.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading">
                JAVASCRIPT
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/react.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                REACT
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/redux.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                REDUX
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/mongo.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                MONGODB
              </span>
            </Text>
          </Card>

          <Card>
            <Image>
              <img src="/Images/nodejs.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                Node.js
              </span>
            </Text>
          </Card>

          <Card>
            <Image>
              <img src="/Images/expressjs.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                Express.js
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/dsa.jpg" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                DSA
              </span>
            </Text>
          </Card>
        </Skills>
        <h1 className="heading">
          {" "}
          <span> </span> Tools{" "}
        </h1>

        <Skills>
          <Card>
            <Image>
              <img src="/Images/vs.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                VS CODE
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/postman.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                POSTMAN
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/github-brands.svg" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                GIT
              </span>
            </Text>
          </Card>
        </Skills>
      </Main>
      
      <Gitbox>
      <Text  className="heading ">
              <span id="span" >
              <p>git stats 💻</p>
              </span>
            </Text>
        <Github />
      </Gitbox>
    </>
  );
};

const Main = styled.div`
  padding: 5rem 0px;
`;

const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 5rem 0;
  margin: 0 30px;
`;

const Gitbox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  color: gray;
  position: relative;
  border: 1rem solid transparent;
  margin: auto;
  padding: 10px 0;
  border-radius: 4px;
  justify-content: space-around;

  &:hover {
    transform: scale(1.09);
  }
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
  & img {
    width: 24%;
    height: 89%;
  }
`;

const Card = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
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

const Text = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-align-items: none !important;
  display: -webkit-box !important;
  & #span {
    font-size: 17px !important;
  }

  @media (max-width: 600px) {
    #span {
      font-size: 13px !important;
    }
  }
`;
