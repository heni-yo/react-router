import React from 'react'


export default function Home() {
  return (
    <div>
    <section id="hero">
    <div className="container">
      <div className="hero__wrapper">
        <div className="hero__left" data-aos="fade-left">
          <div className="hero__left__wrapper">

            <h1 className="hero__heading">The flavor of tradition</h1>
            <p className="hero__info">
              We are a multi-cuisine restaurant offering a wide variety of food experience in both casual and fine
              dining
              environment.
            </p>
            <div className="button__wrapper">
              <a href="./menu.html" className="btn primary-btn">Explore Menu</a>
              <a href="./booking.html" className="btn">Book Table</a>
            </div>
          </div>
        </div>
        <div className="hero__right" data-aos="fade-right">
          <div className="hero__imgWrapper">
            <img src="./images/heroImg.png"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Hero Section -->
  <!-- Store Info Section --> */}
  <section id="storeInfo" data-aos="fade-up">
    <div className="container">
      <div className="storeInfo__wrapper">
        <div className="storeInfo__item">
          <div className="storeInfo__icon">
            <img src="./images/wall-clock-icon.svg" alt="clock icon"/>
          </div>
          <h3 className="storeInfo__title">
            10 AM - 7 PM
          </h3>
          <p className="storeInfo__text">
            Opening Hour
          </p>
        </div>
        <div className="storeInfo__item">
          <div className="storeInfo__icon">
            <img src="./images/address-icon.svg" alt="clock icon"/>
          </div>
          <h3 className="storeInfo__title">
            GEC, Chittagong
          </h3>
          <p className="storeInfo__text">
            Address
          </p>
        </div>
        <div className="storeInfo__item">
          <div className="storeInfo__icon">
            <img src="./images/phone-icon.svg" alt="clock icon"/>
          </div>
          <h3 className="storeInfo__title">
            +880123443
          </h3>
          <p className="storeInfo__text">
            Call Now
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Store Info Section -->
  <!-- Our Specials Section --> */}
  <section id="ourSpecials" data-aos="fade-up">
    <div className="container">
      <div className="ourSpecials__wrapper">
        <div className="ourSpecials__left">
          <div className="ourSpecials__item">
            <div className="ourSpecials__item__img">
              <img src="./images/food-3.png" alt="food img"/>
            </div>
            <h2 className="ourSpecials__item__title">
              Sweet Potato Fries Bowl
            </h2>
            <h3 className="ourSpecials__item__price">
              $18
            </h3>
            <div className="ourSpecials__item__stars">
              <img src="./images/3star.png" alt="3 stars"/>
            </div>
            <p className="ourSpecials__item__text">
              These Sweet Potato Fries bowl are a glorious, messy plate of goodness. Crispy sweet potato fries loaded
              with lots of fresh summer vegetables and a lime ranch. By adding a seasoning blend with chipotle powder,
              garlic, and onion, these spicy sweet potato fries are full of flavor.
            </p>
          </div>
          <div className="ourSpecials__item">
            <div className="ourSpecials__item__img">
              <img src="./images/food-1.png" alt="food img"/>
            </div>
            <h2 className="ourSpecials__item__title">
              Vegan Salad bowl
            </h2>
            <h3 className="ourSpecials__item__price">
              $18
            </h3>
            <div className="ourSpecials__item__stars">
              <img src="./images/3star.png" alt="3 stars"/>
            </div>
            <p className="ourSpecials__item__text">
              Vegan salad bowl are immensely satisfying with any combination of whole grains, pulses, noodles, raw or
              cooked fruits, and veggies all topped off with a delicious sauce or dressing – each bite is an explosion
              of flavors and textures.
            </p>
          </div>
        </div>
        <div className="ourSpecials__right">
          <h2 className="ourSpecials__title">
            Our Specials
          </h2>
          <p className="ourSpecials__text">
            All of our food is prepared daily at our restaurants to ensure the highest quality, freshest meals are
            delivered to our customers
          </p>
          <a href="./booking.html" className="btn primary-btn">Book Table</a>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Our Specials Section -->
  <!-- Top Dishes --> */}
  <section id="dishGrid" data-aos="fade-up">
    <div className="container">
      <h2 className="dishGrid__title">
        Top Dishes
      </h2>
      <div className="dishGrid__wrapper">
        <div className="dishGrid__item">
          <div className="dishGrid__item__img">
            <img src="./images/food-1.png" alt="food img"/>
          </div>
          <div className="dishGrid__item__info">
            <h3 className="dishGrid__item__title">
              Vegan Salad bowl
            </h3>
            <h3 className="dishGrid__item__price">$12</h3>
            <div className="dishGrid__item__stars">
              <img src="./images/3star.png" alt="3 star"/>
            </div>
          </div>
        </div>
        <div className="dishGrid__item">
          <div className="dishGrid__item__img">
            <img src="./images/food-2.png" alt="food img"/>
          </div>
          <div className="dishGrid__item__info">
            <h3 className="dishGrid__item__title">
              Vegan Pesto Zoodles
            </h3>
            <h3 className="dishGrid__item__price">$12</h3>
            <div className="dishGrid__item__stars">
              <img src="./images/3star.png" alt="3 star"/>
            </div>
          </div>
        </div>
        <div className="dishGrid__item">
          <div className="dishGrid__item__img">
            <img src="./images/food-7.png" alt="food img"/>
          </div>
          <div className="dishGrid__item__info">
            <h3 className="dishGrid__item__title">
              Hot Green Bowl
            </h3>
            <h3 className="dishGrid__item__price">$12</h3>
            <div className="dishGrid__item__stars">
              <img src="./images/3star.png" alt="3 star"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Top Dishes -->
  <!-- Discount Section --> */}
  <section id="discount" data-aos="fade-up">
    <div className="container">
      <div className="discount__wrapper">
        <div className="discount__images">
          <div className="discount__img1">
            <img src="./images/food-5.png" alt="Food img"/>
          </div>
          <div className="discount__img2">
            <img src="./images/food-4.png" alt="Food img"/>
          </div>
          <div className="discount__img3">
            <img src="./images/food-3.png" alt="Food img"/>
          </div>
        </div>
        <div className="discount__info">
          <h3 className="discount__text">20% OFF</h3>
          <h3 className="discount__title">Demo Dish For Discount</h3>
          <h3 className="discount__price">
            <span className="discount__oldPrice">$45</span>
            <span className="discount__newPrice">$35</span>
          </h3>
          <div className="discount__stars">
            <img src="./images/3star.png" alt="3 stars"/>
          </div>
          <a className="btn primary-btn" href="./booking.html">Book Table</a>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Discount Section -->
  <!-- Events Media --> */}
  <section id="eventsMedia" data-aos="fade-up">
    <div className="container">
      <div className="eventsMedia__wrapper">
        <div className="eventsMedia__1">
          <img src="./images/eventsMedia1.png" alt="events"/>
          <a href="#" className="eventsMedia__1__playButton">
            <img src="./images/playIcon.svg" alt="play button"/>
          </a>
        </div>
        <div className="eventMedia__2">
          <img src="./images/eventsMedia2.png" alt="events"/>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Events Media -->
  <!-- Events Info --> */}
  <section id="eventsInfo" data-aos="fade-up">
    <div className="container">
      <div className="eventsInfo__wrapper">
        <div className="eventsInfo__left">
          <div className="eventsInfo__item">
            <div className="eventsInfo__item__img">
              <img src="./images/event-corporate.png" alt="corporate events"/>
            </div>
            <div className="eventsInfo__item__info">
              <h2 className="eventsInfo__item__title">Corporate Events</h2>
              <p className="eventsInfo__item__text">
                Shaif's Cuisine is the perfect venue for your corporate events. We specialize in private parties.
              </p>
            </div>
          </div>
          <div className="eventsInfo__item">
            <div className="eventsInfo__item__img">
              <img src="./images/event-weedings.png" alt="wedding events"/>
            </div>
            <div className="eventsInfo__item__info">
              <h2 className="eventsInfo__item__title">Weddings</h2>
              <p className="eventsInfo__item__text">
                Shaif's Cuisine offers an intimately unique wedding experience set in a spectacular setting that is
                sophisticated and comfortable.
              </p>
            </div>
          </div>
        </div>
        <div className="eventsInfo__right">
          <h2 className="eventsInfo__title">Book For Events</h2>
          <p className="eventsInfo__text">Book your private event or corporate function at Shaif's cuisine to experience a
            truly unique experience.</p>
          <a href="./contact.html" className="btn primary-btn">Contact Now</a>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Events Info -->
  <!-- Why Us section --> */}
  <section id="whyUs">
    <div className="container">
      <div className="whyUs__wrapper">
        <div className="whyUs__left" data-aos="fade-right">
          <h2 className="whyUs__title">
            Why Choose Our Food
          </h2>
          <p className="whyUs__text">
            Quality of Service, Food, Ambiance, and Value of Money are the primary elements for choosing a restaurant.
            Shaif's Cuisine is one of the most exquisite fine-dinning restaurant in Chittagong cities with a captivating
            view of GEC Hills, perfect ambiance, and scrumptious food.
          </p>
        </div>
        <div className="whyUs__right" data-aos="fade-left">
          <div className="whyUs__items__wrapper">
            <div className="whyUs__item">
              <div className="whyUs__item__icon">
                <img src="./images/whyUs-icon1.svg" alt="quality Food"/>
              </div>
              <p className="whyUs__item__text">Quality Food</p>
            </div>
            <div className="whyUs__item">
              <div className="whyUs__item__icon">
                <img src="./images/whyUs-icon2.svg" alt="classNameical taste"/>
              </div>
              <p className="whyUs__item__text">classical taste</p>
            </div>
            <div className="whyUs__item">
              <div className="whyUs__item__icon">
                <img src="./images/whyUs-icon3.svg" alt="Skilled chef"/>
              </div>
              <p className="whyUs__item__text">Skilled chef</p>
            </div>
            <div className="whyUs__item">
              <div className="whyUs__item__icon">
                <img src="./images/whyUs-icon4.svg" alt="Best service"/>
              </div>
              <p className="whyUs__item__text">Best service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Why Us section -->
  <!-- Testimonial Section --> */}
  <section id="testimonial">
    <div className="container">
      <div className="testimonial__wrapper" data-aos="fade-up">
        <h2 className="testimonial__title">What Our Customers Say</h2>
        <div className="testimonial__items__wrapper">
          <div className="testimonial__item">
            <div className="testimonial__item__img">
              <img src="./images/testimonial_img1.png" alt="Sayed Ahmed"/>
            </div>
            <div className="testimonial__item__info">
              <h3 className="testimonial__item__name">Sayed Ahmed</h3>
              <div className="testimonial__item__stars">
                <img src="./images/3star.png" alt="3 star"/>
              </div>
              <p className="testimonial__item__text">
                “Visited Shaif’s Cuisine with friends last Sunday. Really lovely meal and very warm welcome – we would
                recommend this lovely restaurant and will try to go back again”
              </p>
            </div>
          </div>
          <div className="testimonial__item">
            <div className="testimonial__item__img">
              <img src="./images/testimonial_img1.png" alt="Sayed Ahmed"/>
            </div>
            <div className="testimonial__item__info">
              <h3 className="testimonial__item__name">Arfan</h3>
              <div className="testimonial__item__stars">
                <img src="./images/3star.png" alt="3 star"/>
              </div>
              <p className="testimonial__item__text">
                "from start to finish, lovely experience. Hostess very pleasant, wait staff john was wonderful and
                attentive, food plentiful and delicious, desserts out of this world"
              </p>
            </div>
          </div>
          <div className="testimonial__item">
            <div className="testimonial__item__img">
              <img src="./images/testimonial_img1.png" alt="Sayed Ahmed"/>
            </div>
            <div className="testimonial__item__info">
              <h3 className="testimonial__item__name">Fahim & Nishat</h3>
              <div className="testimonial__item__stars">
                <img src="./images/3star.png" alt="3 star"/>
              </div>
              <p className="testimonial__item__text">
                “A warm and friendly welcome with fantastic customer service. Always great, tasty food served piping
                hot- just the way we love it . Would definitely recommend. We have been repeatedly and it's consistently
                exceeded our expectations"
              </p>
            </div>
          </div>
          <div className="testimonial__item">
            <div className="testimonial__item__img">
              <img src="./images/testimonial_img1.png" alt="Sayed Ahmed"/>
            </div>
            <div className="testimonial__item__info">
              <h3 className="testimonial__item__name">Hussain</h3>
              <div className="testimonial__item__stars">
                <img src="./images/3star.png" alt="3 star"/>
              </div>
              <p className="testimonial__item__text">
                “I would just like to say thank you for the excellent service we received in your restaurant last night.
                Although the place was very busy we still had an excellent time and really appreciated the live
                entertainment too!“
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Testimonial Section -->
  <!-- Newsletter Section --> */}
  <section id="newsletter" data-aos="fade-up">
    <div className="container">
      <div className="newsletter__wrapper">
        <div className="newsletter__info">
          <h3 className="newsletter__title">Join Newsletter</h3>
          <p className="newsletter__text">
            Get notified with the latest news and recent offers from the “Shaif’s Cuisine”
          </p>
        </div>
        <div className="newsletter__form">
          <form action="">
            <label htmlFor="email">
              <input type="email" placeholder="Your Email Address"/>
            </label>
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Newsletter Section --> */}
    </div>
  )
}
