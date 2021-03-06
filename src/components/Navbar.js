import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="comfy sloth" className="logo" />
        </Link>
        <button type="button" className="nav-toggle" onClick={openSidebar}>
          <FaBars />
        </button>
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
        {myUser && (
          <li>
            <Link to="/checkout">checkout</Link>
          </li>
        )}

        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-links {
    position: relative;
  }

  .nav-center {
    width: 100%;
    margin: 0 auto;
    max-width: 100%;
    margin-left: 7%;
    margin-top: 1.2%;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: hsl(22, 31%, 52%);
    margin-left: 18%;
    /* width: 100%; */
    cursor: pointer;
    position: absolute;
    top: 7%;
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
        margin: 0 0.5rem;
      }
      a {
        color: #102a42;
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: 0.1rem;
        padding: 0.8rem;
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
