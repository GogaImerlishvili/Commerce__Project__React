import React, { useState } from "react";
import styled from "styled-components";

const ProductsImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  console.log(main);
  return (
    <Wrapper>
      <img src={main.url} alt="main imag" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? "active" : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    display: block;
    border-radius: 0.25rem;
    /* object-fit: cover; */
    /* margin-top: -20%; */
    /* margin-left: 1%; */
  }
  .gallery {
    margin-top: 1rem;

    display: grid;
    grid-template-columns: repeat(5, 1fr 1fr);
    column-gap: 2rem;
    margin-left: 2.5%;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px #ab7a5f;
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;
export default ProductsImages;
