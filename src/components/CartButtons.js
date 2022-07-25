import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <Wrapper className="cart-btn-wrapper">
      <div className="cart">
        <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
          <span className="cart-container">
            Cart
            <FaShoppingCart />
            <span className="cart-value">{total_items}</span>
          </span>
        </Link>
        {myUser ? (
          <button
            type="button"
            className="auth-btn"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout <FaUserMinus />
          </button>
        ) : (
          <button className="auth-btn" onClick={loginWithRedirect}>
            Login <FaUserPlus />
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  /* grid-template-columns: 1fr 1fr; */
  align-items: center;
  width: 250px;

  .cart {
    display: flex;
    justify-content: space-between;
    width: 50%;
    position: relative;
    padding: 50px;
    margin-left: -50%;
  }
  .cart-btn {
    color: #102a42;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    /* margin-left: -320%; */
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 85%;
    color: #102a42;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;

    text-decoration: none;
    svg {
      height: 1.6rem;
      margin-left: 15px;
    }
  }

  .cart-value {
    position: absolute;
    top: -10px;
    right: -12px;
    background: #ab7a5f;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: white;
    padding: 12px;
  }

  .auth-btn {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    border: none;
    cursor: pointer;
    color: #102a42;
    letter-spacing: 0.1rem;
    position: absolute;
    right: 10%;
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
