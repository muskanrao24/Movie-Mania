import React from 'react'

export const Gallery = () => {
  return (
    <div className='gallery'>
      <header>
        <h1>Top Charted Movies</h1>
        <p> Movie Maniac's All-Time 12 Best Movies were selected by respected movie critics, Arpita Jena and Umm E Kulsum in mid-2005. Their unranked list comprised the 100 most influential movies of the past 82 years (since 1923, Movie-Maniac's first year of publication).</p>
      </header>

      <div class="image-gal">

        <div class="gallery-item">
          <div class="image-thumb" tabindex="1">
            <img alt="" src={require("../images/gallery/titanic.jpg")} height="300" width="300" />
          </div>
          <div class="image-big">
            <img alt="" src={require("../images/gallery/titanic.jpg")} height="600" width="600" />
          </div>
        </div>

        <div class="gallery-item">
          <div class="image-thumb" tabindex="1">
            <img alt="" src={require("../images/gallery/squidGame.jpg")} height="300" width="300" />
          </div>
          <div class="image-big">
            <img alt="" src={require("../images/gallery/squidGame.jpg")} height="600" width="600" />
          </div>
        </div>

        <div class="gallery-item">
          <div class="image-thumb" tabindex="1">
            <img alt="" src={require("../images/gallery/slumDog.jpg")} height="300" width="300" />
          </div>
          <div class="image-big">
            <img alt="" src={require("../images/gallery/slumDog.jpg")} height="600" width="600" />
          </div>
        </div>

        <div class="gallery-item">
          <div class="image-thumb" tabindex="1">
            <img alt="" src={require("../images/gallery/SchindlerList.jpg")} height="300" width="300" />
          </div>
          <div class="image-big">
            <img alt="" src={require("../images/gallery/SchindlerList.jpg")} height="600" width="600" />
          </div>
        </div>

        <div class="gallery-item">
          <div class="image-thumb" tabindex="1">
            <img alt="" src={require("../images/gallery/parasite.jpg")} height="300" width="300" />
          </div>
          <div class="image-big">
            <img alt="" src={require("../images/gallery/parasite.jpg")} height="600" width="600" />
          </div>
        </div>

        <div class="gallery-item">
          <div class="image-thumb" tabindex="1">
            <img alt="" src={require("../images/gallery/Gandhi.jpg")} height="300" width="300" />
          </div>
          <div class="image-big">
            <img alt="" src={require("../images/gallery/Gandhi.jpg")} height="600" width="600" />
          </div>
        </div>

        <div class="gallery-item">
          <div class="image-thumb" tabindex="1">
            <img alt="" src={require("../images/gallery/departed.jpg")} height="300" width="300" />
          </div>
          <div class="image-big">
            <img alt="" src={require("../images/gallery/departed.jpg")} height="600" width="600" />
          </div>
        </div>

        <div class="gallery-item">
          <div class="image-thumb" tabindex="1">
            <img alt="" src={require("../images/gallery/LaLaLand.jpg")} height="300" width="300" />
          </div>
          <div class="image-big">
            <img alt="" src={require("../images/gallery/LaLaLand.jpg")} height="600" width="600" />
          </div>
        </div>

        <div class="gallery-item">
          <div class="image-thumb" tabindex="1">
            <img alt="" src={require("../images/gallery/Joker.jpg")} height="300" width="300" />
          </div>
          <div class="image-big">
            <img alt="" src={require("../images/gallery/Joker.jpg")} height="600" width="600" />
          </div>
        </div>

        <div class="gallery-item">
          <div class="image-thumb" tabindex="1">
            <img alt="" src={require("../images/gallery/ShakespeareInLove.jpg")} height="300" width="300" />
          </div>
          <div class="image-big">
            <img alt="" src={require("../images/gallery/ShakespeareInLove.jpg")} height="600" width="600" />
          </div>
        </div>

        <div class="gallery-item">
          <div class="image-thumb" tabindex="1">
            <img alt="" src={require("../images/gallery/thePowerOfTheDog.jpg")} height="300" width="300" />
          </div>
          <div class="image-big">
            <img alt="" src={require("../images/gallery/thePowerOfTheDog.jpg")} height="600" width="600" />
          </div>
        </div>

        <div class="gallery-item">
          <div class="image-thumb" tabindex="1">
            <img alt="" src={require("../images/gallery/GreenBook.jpg")} height="300" width="300" />
          </div>
          <div class="image-big">
            <img alt="" src={require("../images/gallery/GreenBook.jpg")} height="600" width="600" />
          </div>
        </div>

      </div>
    </div>
  )
}
