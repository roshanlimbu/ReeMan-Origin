import React from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

const Section = styled.section`
  min-height: 100vh;
  position: relative;
  height: auto;
  width: 100vw;
  background-color: var(--black);
  color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* margin-bottom: 50rem; */
`;

const Title = styled.h1`
  color: var(--white);
  display: flex;
  justify-content: center;
  font-size: var(--fontxxl);
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid var(--white);
  width: fit-content;

  @media (max-width: 48em) {
    font-size: var(--fontxl);
  }
`;
const Container = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem auto;
  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;
const Faq = () => {
  return (
    <Section id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
          <Accordion title="WHERE ARE WE LOCATED?">
            We are located at Itahari, Sunsari which is situated at province no.
            1 of Nepal.
          </Accordion>
          <Accordion title="WHAT IS THE HIPHOP & MORE?">
            We are the dedicated youth of Nepal trying to promote local rappers
            all over Nepal and the world.
          </Accordion>{' '}
          <Accordion
            title="WHAT IS THE BENEFIT OF PROMOTING UNDERATED RAPPERS?
"
          >
            Many great talents don't get exposure to perform their talents. So
            H&M tries to provide the platform for the all the underated rappers
            in the global exposure.
          </Accordion>
        </Box>
        <Box>
          <Accordion
            title="HOW CAN I HELP YOU?
"
          >
            If you have seen any rappers who can sing great songs , but haven't
            got any platform. Then, you can send his/her videos to us! If you
            are willing to donate for the management of this organisation, feel
            free to donate at:98********
          </Accordion>
          <Accordion
            title="HOW CAN I CONNECT TO YOU?
"
          >
            You can connect to us by discord, tiktok,facebook. All the
            respective official links are provided below.Feel free to follow us
            !
          </Accordion>
          <Accordion title="WHO IS THE RUNNER OR ORGANIZER OF H&M?">
            Our respective anup sir is the runner and plus he is the social
            activist too.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
