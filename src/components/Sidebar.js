import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { links } from "../utils/constants";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

import {
  FaTimes,
  FaShoppingCart,
  FaUserPlus,
  FaUserMinus,
} from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="comfy sloth" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>

        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout" onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        </ul>
        <div className="cart-buttons-container">
          <Link to="/cart" className="cart-btn2">
            Cart
            <span className="cart-container2">
              <FaShoppingCart />
              <span className="cart-value2">{total_items}</span>
            </span>
          </Link>
          <button className="auth-btn2">
            Login <FaUserPlus />
          </button>
        </div>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: #ab7a5f;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: #e66b6b;
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: #324d67;
    transition: all 0.3s linear;
    letter-spacing: 0.1rem;
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }

    .links {
      display: none;
    }
    .cart-buttons-container {
      display: none;
    }
  }
`;
export default Sidebar;
