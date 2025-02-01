// src/components/Testimonials.js
import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "John Doe",
      review: "The food is absolutely amazing! Best restaurant in town.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      review: "I love the variety of cuisines, especially the cakes!",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Sam Wilson",
      review: "The Indian dishes are mouthwatering and authentic!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Laura Adams",
      review: "Korean food here is top-notch, always fresh and flavorful.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Chris Evans",
      review: "Best cakes in town! Perfect for all occasions.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`fa fa-star ${index < rating ? "checked" : ""}`}
      ></span>
    ));
  };

  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Customer Testimonials</h2>
        <div className="row">
          {reviews.map((review, index) => (
            <div key={index} className="col-md-4 mb-4 text-center">
              <img
                src={review.image}
                alt={review.name}
                className="rounded-circle"
                width="100"
                height="100"
              />
              <h4 className="mt-3">{review.name}</h4>
              <p>{review.review}</p>
              <div className="stars">{renderStars(review.rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
