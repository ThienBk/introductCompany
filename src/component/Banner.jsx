import React from "react";
import banner from "../assets/img/banner-img-left.png"
import banner1 from "../assets/img/banner-img-left1.png"
import banner2 from "../assets/img/banner-img-left2.png"
import banner3 from "../assets/img/banner-img-left3.png"
import banner4 from "../assets/img/banner-img-left4.png"

export default function Banner() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide mt-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={3}
          aria-label="Slide 4"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={4}
          aria-label="Slide 5"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={banner4} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
