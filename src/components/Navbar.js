import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="comfy sloth" />
        </Link>
        <button type="button" className="nav-toggle">
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
      <CartButtons />
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 100%;
    margin: 0 auto;
    max-width: 100%;
    margin-left: 1%;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: hsl(22, 31%, 52%);
    margin-left: 18%;
    /* width: 100%; */
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      margin-right: 30%;
      text-decoration: none;
      list-style: none;

      li {
        margin: 0 1.8rem;
      }
      a {
        color: grey;
        font-size: 1.5rem;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        padding: 0.5rem;
        text-decoration: none;
        &:hover {
          border-bottom: 2px solid #c5a491;
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
