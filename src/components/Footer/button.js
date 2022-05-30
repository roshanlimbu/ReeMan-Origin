import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: inline-block;
  color: var(--body);
  background-color: var(text);
  font-size: var(--fontsm);
  color: white;
  border: none;
  outline: none;
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    transform: scale(0.9);
    cursor: pointer;
  }

  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid var(--text);
    height: 100%;
    width: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`;

const Button = ({ text }) => {
  return (
    <Btn>
      <a
        href="#home"
        style={{ color: "black" }}
        aria-label={text}
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    </Btn>
  );
};

export default Button;
