import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Feeling cold during the freezing winter? Can't wait for the hot
          summer? However don't fancy too hot weather? Solve this dilemma -
          create the accurate space around yourself! Feel comfortable in Brno!
          We'll show you how to make an ambient environment according to your
          visions.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="nice table" className="main-img" />
        <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45rem;
    margin-bottom: 2rem;
    color: #617d98;
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 250px;
      position: relative;
      border-radius: 0.25rem;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: 0.25rem;
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: #decbc0;
      bottom: 0%;
      left: -8%;
      border-radius: 0.25%;
    }
  }
`;

export default Hero;
