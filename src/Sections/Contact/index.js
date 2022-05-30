// This is Contact component, it will contain contact form.
import React, { useLayoutEffect, useRef } from 'react';

import facebook from '../../assets/facebook-square-brands.svg';
import linkedin from '../../assets/linkedin-brands.svg';
import instagram from '../../assets/instagram-square-brands.svg';
import twitter from '../../assets/twitter-square-brands.svg';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ContactSection = styled.div`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1rem;
  position: relative;
  color: var(--black);
  margin-bottom: 3rem;
  &::before {
    content: ' ';
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    border-bottom: 2px solid var(--pink);
    transform: translate(-50%);
  }
`;
const Icons = styled.div`
  display: inline;
  margin-bottom: 3rem;
  a {
    &:not(last-child) {
      margin-right: 2rem;
    }
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(300%) hue-rotate(580deg);
      }
    }
  }
  img {
    /* margin-top: 0.5rem; */
    width: 3rem;
    height: 3rem;
    background-color: var(--black);
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 0.5vw);
    margin-bottom: 1rem;
    background-color: var(--nav);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      outline: none;
      border: none;
      background-color: var(--nav2);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.8;
    }
    &[name='name'] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 0.5vw);
    margin-bottom: 1rem;
    background-color: var(--nav);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      outline: none;
      border: none;
      background-color: var(--nav2);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.8;
    }
  }
  button {
    /* display: flex;
    justify-content: center; */
    padding: 0.8rem 2rem;
    background-color: var(--black);
    border-radius: 20px;
    font-size: 1.2rem;
    cursor: pointer;
    color: #eff7f8;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }
  @media only screen and (max-width: 40em) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

const Row = styled.div`
  @media only screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name='name'] {
        margin-right: 0;
      }
    }
  }
`;
const Contact = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;
    ScrollTrigger.create({
      trigger: element,
      start: 'top top ',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    });
    return () => {
      ScrollTrigger.kill();
    };
  }, []);
  return (
    <ContactSection id="contact" ref={ref}>
      <Title>Get In Touch</Title>
      <Icons>
        <a href="https://facebook.com">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://linkedin.com">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://instagram.com">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://twitter.com">
          <img src={twitter} alt="twitter" />
        </a>
      </Icons>
      <Form action="https://usebasin.com/f/641b9180a985" method="POST">
        <Row>
          <input type="text" name="name" placeholder="Your Name" />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Id"
            required
          />
        </Row>
        <textarea
          name="message"
          placeholder="Your Message"
          cols="30"
          rows="2"
        ></textarea>
        <div style={{ margin: '0 auto' }}>
          <button type="submit"> Submit</button>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;
