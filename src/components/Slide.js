import React, { useState, useEffect } from 'react';
import '../css/slide.css';
import FoodList from './FoodList';

const slides = [
  {
    title: "Introducing the Autumn Harvest Bowl",
    subtitle: "Brussels Are Back",
    image: "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Taste the Summer Sunshine Salad",
    subtitle: "Fresh, Zesty, and Light",
    image: "https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Warm Up with Our Winter Stew",
    subtitle: "Comfort Food at Its Best",
    image: "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
];

function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <section className="featured">
        <div className="content">
          <h3>{slides[currentSlide].subtitle}</h3>
          <h1>{slides[currentSlide].title}</h1>
        </div>
        <div className="featured-image">
          <img src={slides[currentSlide].image} alt="Featured Dish" />
        </div>
      </section>
      <section>
        <FoodList />
      </section>
    </>
  );
}

export default Slides;
