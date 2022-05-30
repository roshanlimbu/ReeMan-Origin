import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoItem = styled.h1`
  font-family: "Poppins", cursive;
  font-size: var(--fontxxxl);
  color: var(--text);
  transition: all 0.2s ease;
  /* transform: rotate(-180deg); */
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 64em) {
    font-size: var(--fontxxl);
  }
`;

const Logo = () => {
  return (
    <LogoItem>
      <a href="#header" style={{ color: "var(--purple)" }}>
        ReeMan.
      </a>
      {/* <p>Since 2022</p> */}
      {/* <Link to="/"></Link> */}
    </LogoItem>
  );
};

export default Logo;
