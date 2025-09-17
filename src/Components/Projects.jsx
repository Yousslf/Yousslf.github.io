import React from "react";
import coffeeScreen from "../assets/Screenshots/coffeScreen.png";
import shoppingProduct from "../assets/Screenshots/shoppingProducts.png";
import cart from "../assets/Screenshots/cart.png";
import about from "../assets/Screenshots/About.png";
import dashboard from "../assets/Screenshots/dashboard.png";

const Projects = () => {
  return (
    <section id="projects" className="products">
      <div className="container">
        <h1 className="section-title">Latest Projects</h1>

        <div className="products__grid">
          <article className="product-card">
            <header className="product-card__header">
              <h2 className="product-card__title">Coffee Shop</h2>
              <p className="product-card__subtitle">
                Responsive Coffee Shop built with React
              </p>
            </header>
            <div className="product-card__media">
              <img src={coffeeScreen} alt="Coffee Shop" />
            </div>
            <footer className="product-card__footer">
              <a
                className="btn btn--primary"
                href="https://coffe-shop-ashy.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Live Demo
              </a>
            </footer>
          </article>

          <article className="product-card">
            <header className="product-card__header">
              <h2 className="product-card__title">E‑commerce Website</h2>
              <p className="product-card__subtitle">
                Responsive Shopping Website
              </p>
            </header>
            <div className="product-card__media gallery">
              <img src={shoppingProduct} alt="Products page" />
              <img src={cart} alt="Cart page" />
              <img src={about} alt="About page" />
              <img src={dashboard} alt="Dashboard page" />
            </div>
            <footer className="product-card__footer">
              <a
                className="btn btn--primary"
                href="https://shopping-website-psi-nine.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Live Demo
              </a>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
