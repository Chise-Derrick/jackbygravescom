import * as React from "react";
import "./Home.css";
import Product from "./Product";
import displayCar from "./img/display-car.jpg";
import carOne from "./img/cars/one.jpg";
import carTwo from "./img/cars/two.jpg";
import carThree from "./img/cars/three.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={displayCar} alt="" />

        <div className="home__rowContainer">
          <div className="home__row">
            <Product
              id="4903850"
              key="12541"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image={carOne}
            />
            <Product
              id="23445930"
              key="1131"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image={carTwo}
            />
            <Product
              id="3254354345"
              key="121"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image={carThree}
            />
          </div>

          <div className="home__row">
            <Product
              id="90829332"
              key="11"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
