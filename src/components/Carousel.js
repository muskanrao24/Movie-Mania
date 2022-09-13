import React from 'react'

export const Carousel = () => {
  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ width: 800, height: 450, margin: "auto" }}>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://source.unsplash.com/800x450/?spiderman" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Spiderman</h5>
            <p>Spider-Man is a superhero appearing in American comic books published by Marvel Comics</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://source.unsplash.com/800x450/?cinema" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Cinema</h5>
            <p>Cinematography, the art of motion-picture photography. Film or movie, a series of still images that create the illusion of a moving image</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://source.unsplash.com/800x450/?batman" class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Batman</h5>
            <p>The Batman is a 2022 American superhero film based on the DC Comics character Batman</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}
