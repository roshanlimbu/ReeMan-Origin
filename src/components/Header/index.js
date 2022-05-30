// This is Header component /Navigation Component
import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  background-color: var(--nav);
  position: relative;
  z-index: 500;
  color: var(--white);
`;
const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
    /* margin-left: -4rem; */

    @media (max-width: 40em) {
      margin-left: -4rem;
    }
  }
`;
const Nav = styled.nav`
  width: 55rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 960px) {
    display: none;
  }
  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);

    &::after {
      content: "";
      display: block;
      width: 3px;
      height: 3px;
      background-color: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      background-color: var(--purple);
      width: 100%;
    }
  }
`;

const Button = styled.button`
  background-color: var(--purple);
  color: var(--white);
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 600;
  border-radius: 20px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
`;
const HamBurgerBtn = styled.button`
  position: relative;
  cursor: pointer;
  background-color: transparent;
  height: 2px;
  width: 2rem;
  display: none;

  @media only Screen and (max-width: 960px) {
    display: inline-block;
  }
  @media only Screen and (max-width: 40em) {
    position: absolute;
    right: 1rem;
  }

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1rem" : "0.9rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1rem" : "1.6rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  background: rgba(53, 53, 63, 0.95);
  margin: 0.5rem;
  border-radius: 20px;
  overflow-x: hidden;
  a {
    color: white;
    margin: 1rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Headers id="header">
      <Logo>
        {/* <span style={{ display: "flex",alignItems:'center' }}> */}
        <img src={logo} alt="CompanyName" />
        <h3>ReeMan</h3>
        {/* </span> */}
      </Logo>
      <Nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#roadmap">RoadMap</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">
          <Button>Contact Us</Button>
        </a>
      </Nav>
      <HamBurgerBtn onClick={() => handleClick()} clicked={click}>
        <span />
      </HamBurgerBtn>
      <MobileMenu clicked={click}>
        <a href="#home" onClick={() => handleClick()}>
          Home
        </a>
        <a href="#about" onClick={() => handleClick()}>
          About Us
        </a>
        <a href="#services" onClick={() => handleClick()}>
          Services
        </a>
        <a href="#roadmap" onClick={() => handleClick()}>
          RoadMap
        </a>
        <a href="#testimonials" onClick={() => handleClick()}>
          Testomonials
        </a>
        <a href="#faq" onClick={() => handleClick()}>
          FAQ
        </a>
        <a href="#contact" onClick={() => handleClick()}>
          <Button>Contact Us</Button>
        </a>
      </MobileMenu>
    </Headers>
  );
};

export default Header;
