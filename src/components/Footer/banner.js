import React from "react";
import styled from "styled-components";
import img1 from "../../assets/avatar-1.jpg";
import img2 from "../../assets/avatar-2.jpg";
import img3 from "../../assets/avatar-3.jpg";
import img4 from "../../assets/avatar-4.jpg";
import Button from "./button";

const Section = styled.section`
  width: 100vw;
  height: 25rem;
  position: relative;
  border-top: 2px solid var(--text);
  background-color: rgba(32, 32, 32, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 48em) {
    height: 15rem;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;
  img {
    width: 15rem;
    height: 15rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
  @media (max-width: 48em) {
    img {
      width: 10rem;
      height: auto;
    }
  }
`;

const Title = styled.h1`
  font-size: var(--fontxxxl);
  color: var(--body);

  padding: 1rem 2rem;
  z-index: 10;
  width: 45%;
  text-shadow: 1px 1px 2px var(--body);
  @media (max-width: 64em) {
    font-size: var(--fontxxl);
    text-align: center;
    width: 40%;
  }
  @media (max-width: 48em) {
    font-size: var(--fontxl);
    padding: 2rem 0;
    width: 100%;
  }
`;
const BtnContainer = styled.div`
  font-size: var(--fontxl);
  /* color: white; */
  /* background-color: var(black); */
  width: 35%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;
const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img1} alt="bighead" />
        <img src={img2} alt="bighead" />
        <img src={img3} alt="bighead" />
        <img src={img4} alt="bighead" />
        {/* <img src={img5} alt="bighead" /> */}
      </ImgContainer>
      <Title>Join The ReeMaN Team</Title>
      <BtnContainer
        onClick={() => (window.location = "mailto:basnetmanish089@gmail.com")}
      >
        <Button text="Join Us" />
      </BtnContainer>
    </Section>
  );
};

export default Banner;
