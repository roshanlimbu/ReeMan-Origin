import React from "react";
import styled from "styled-components";
// import Facebook from "../Icons/Facebook";
// import Twitter from "../Icons/Twitter";
// import LinkedIn from "../Icons/LinkedIn";
// import Instagram from "../Icons/Instagram";
import Banner from "./banner";
import Logo from "./logo";

const Section = styled.section`
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  position: relative;

  background-color: var(--body);
  color: var(--text);

  display: flex;
  /* justify-content: center; */
  /* align-items: center; */

  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--text);
  /* background-color: red !important; */
  @media (max-width: 48em) {
    width: 90%;
  }
  h1 {
    font-size: var(--fontxxxl);
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 48em) {
    width: 100%;
  }
`;
// const IconList = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 1rem auto;

//   & > * {
//     padding-right: 0.5rem;
//     transition: all 0.2s ease;
//   }
//   &:hover {
//     transform: scale(1.2);
//   }
// `;
const MenuItem = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 48em) {
    display: none;
  }
`;
const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background-color: var(--text);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    width: 100%;
    flex-direction: column;
    span {
      margin-bottom: 1rem;
    }
  }
`;

const Footer = () => {
  const ScrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <Section id="footer">
      <Banner />
      <Container>
        <Left>
          <Logo />
          {/* <IconList>
            <a
              href="https://facebook.com"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </IconList> */}
        </Left>
        <MenuItem>
          <Item onClick={() => ScrollTo("hero")}>Home</Item>
          <Item onClick={() => ScrollTo("about")}>About</Item>
          <Item onClick={() => ScrollTo("roadmap")}>Roadmap</Item>
          <Item onClick={() => ScrollTo("services")}>Services</Item>
          <Item onClick={() => ScrollTo("testimonials")}>Testimonials</Item>
          <Item onClick={() => ScrollTo("faq")}>Faq</Item>
          {/* <Item onClick={() => ScrollTo("contact")}>Contact</Item> */}
          {/* <Item onClick={() => ScrollTo("faq")}>Faq</Item> */}
        </MenuItem>
      </Container>
      <Bottom>
        <span style={{ margin: "0 auto" }}>
          &copy;{new Date().getFullYear()} ReeMan Technology.All rights
          reserved.
        </span>
        {/* <span>
          Made with &#10084;by{" "}
          <a
            href="https://maheshbasnet.info.np/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Mahesh
          </a>
        </span> */}
      </Bottom>
    </Section>
  );
};

export default Footer;
