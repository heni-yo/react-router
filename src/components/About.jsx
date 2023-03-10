import React from 'react'

export default function About() {
  
  return (
<div>
  <section id="ourStory" data-aos="fade-up">
    <div className="container">
      <div className="ourStory__wrapper">

        <div className="ourStory__img">
          <img src="./images/ourStoryImg.png" alt="shaif's cuisine"/>
        </div>
        <div className="ourStory__info">
          <h3 className="ourStory__title">
            Our Story
          </h3>
          <p className="ourStory__subtitle">
            It's all started since 1998
          </p>
          <p className="ourStory__text">
            Welcome to Shaif's Cuisine. We take pride in delivering warm, friendly service and creating mouth-watering
            culinary delights for all. Using only the freshest locally sourced ingredients, we’ll ensure you have a
            dining
            experience to remember.
            <br /><br />
            Since 1998, we are the perfect place for a romantic meal for two, a catch-up with friends, family parties,
            business meetings, and bringing loved ones together. With comfortable surroundings, affordable prices, and
            seating for up to 65 guests, we can cater for all occasions.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="ourGoals" data-aos="fade-down">
    <div className="container">
      <div className="ourGoals__info">
        <h3 className="ourGoals__title">
          Our Goals
        </h3>
        <p className="ourGoals__text">
          We shall sell delicious and remarkable food and beverages that meet the highest quality, freshness, and
          seasonality criteria while combining modern-creative and classic cooking traditions. By showcasing warmth,
          graciousness, efficiency, skill, professionalism, and integrity in our work, we will continually serve our
          consumers with exceptional service. To have every customer who comes through our doors leave impressed by
          their experience at Shaif's Cuisine and excited to come back again.
        </p>
      </div>
      <div className="ourGoals__imgs__wrapper" data-aos="fade-up">
        <div className="ourGoals__img1">
          <img src="./images/ourGoals_img1.png" alt="kitchen img"/>
        </div>
        <div className="ourGoals__img2">
          <img src="./images/ourGoals_img2.png" alt="kitchen img"/>
        </div>
        <div className="ourGoals__img3">
          <img src="./images/ourGoals_img3.png" alt="kitchen img"/>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}