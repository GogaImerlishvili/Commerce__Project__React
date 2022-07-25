import React from "react";
import styled from "styled-components";
import { socialIcons } from "../utils/socials";

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span>ComfySloth</span>
      </h5>
      <h5>
        All rights reserved by<span>Goga Imerlishvili</span>
      </h5>
      {
        <ul className="nav-links">
          {socialIcons.map((item) => {
            const { id, icon, url } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      }
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  text-align: center;
  span {
    color: #ab7a5f;
  }
  h5 {
    color: white;
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .nav-links {
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
  }

  .nav-links li {
    padding: 12px;
    cursor: pointer;
  }
  .nav-links li a {
    color: white;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;
export default Footer;
