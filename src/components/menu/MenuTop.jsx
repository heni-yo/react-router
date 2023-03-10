import React from "react";

export default function MenuTop() {
  return (
    <div>
      {/* <!-- page Title --> */}
      <section id="page__title" data-aos="fade-up">
        <div className="container">
          <h2 className="page__title__text">Explore Our Menu</h2>
        </div>
      </section>
      {/* <!-- Our Specials --> */}
      <section id="ourSpecials" data-aos="fade-up">
        <div className="container">
          <h3 className="ourSpecials__title">Our Specials</h3>
          <div className="ourSpecials__wrapper">
            <div className="ourSpecials__item">
              <div className="ourSpecials__item__img">
                <img src="./images/food-3.png" alt="food img" />
              </div>
              <div className="ourSpecials__item__info">
                <h3 className="ourSpecials__item__title">
                  Sweet Potato Fries Bowl
                </h3>
                <h4 className="ourSpecials__item__price">$12</h4>
                <div className="ourSpecials__item__stars">
                  <img src="./images/3star.png" alt="3 stars" />
                </div>
              </div>
            </div>
            <div className="ourSpecials__item">
              <div className="ourSpecials__item__img">
                <img src="./images/food-1.png" alt="food img" />
              </div>
              <div className="ourSpecials__item__info">
                <h3 className="ourSpecials__item__title">Vegan Salad bowl</h3>
                <h4 className="ourSpecials__item__price">$12</h4>
                <div className="ourSpecials__item__stars">
                  <img src="./images/3star.png" alt="3 stars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
