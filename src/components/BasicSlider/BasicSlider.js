import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";
import Navbar from "..//UI/Navbar/Navbar";

// Images
const bogliasco = "https://www.w3schools.com/howto/img_woods_wide.jpg";
const countyClare = "https://www.w3schools.com/howto/img_5terre_wide.jpg";
const craterRock = "https://www.w3schools.com/howto/img_mountains_wide.jpg";
const giauPass = "https://www.w3schools.com/howto/img_nature_wide.jpg";

const app = () => {
  return (
    <HeroSlider
      slidingAnimation="fade"
      orientation="fade"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 1500,
        slidingDelay: 2000,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 100,
        height: "100vh"
      }}
    >
      <OverlayContainer>
        <Navbar />
        <Wrapper>
          <Title>Hero Slider</Title>
          <Subtitle>Hero auto slide with top navbar</Subtitle>
        </Wrapper>
      </OverlayContainer>

      <Slide
        background={{
          backgroundImage: giauPass,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: bogliasco,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: countyClare,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: craterRock,
          backgroundAttachment: "fixed"
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default app;
