import { useState, useEffect } from "react";
import bandImage from '../../assets/Images/band.jpg'
import photo1 from '../../assets/Images/Photo-gallery-1.jpg'
import photo2 from '../../assets/Images/Photo-gallery-2.jpg'
import photo3 from '../../assets/Images/Photo-gallery-3.jpg'
import photo4 from '../../assets/Images/Photo-gallery-4.jpg'
import photo5 from '../../assets/Images/Photo-gallery-5.jpg'
import photo6 from '../../assets/Images/Photo-gallery-6.jpg'
import photo7 from '../../assets/Images/Photo-gallery-7.jpg'
import photo8 from '../../assets/Images/Photo-gallery-8.jpg'
import photo9 from '../../assets/Images/Photo-gallery-9.jpg'
import Comments from '../../components/Comments/Comments'
import './HomePage.scss'

function HomePage() {
  return (
    <section>
      <div class="hero">
        <h1 class="hero__title">The Bees Knees</h1>
      </div>

      <article class="about">
        <div class="about__header">
          <h2 class="about__header__title">About the Musicians</h2>
          <img src={bandImage} alt="band photo" class="about__header__photo"/>
          <h3 class="about__header__subtext">
            “We push each other to be the best. It’s not uncommon for
            one of us to say ‘this needs to be better, back to the drawing board’”
          </h3>
          <h3 class="about__header__subtext--quote">- Lead vocalist of The Bees Knees</h3>
        </div>

        <div class="about__content">
          <h3 class="about__content__title">The Bees Knees</h3>
          <div class="about__content__notes">
            <p class="about__content__notes__desc">
              The Bees Knees is a pop rock band originating from San Francisco, California. The band
              consists a dynamic lineup featuring two lead vocalists, two guitarists, a bassist,
              a keyboardist and a drummer. The band achieved its first commercial success as an unsigned
              act, drawing attention from their future manager. Having extensive experience working
              with both new and seasoned acts, the manager was confident the band could succeed even
              further with more support, pushing The Bees Knees to sign with a well known record label.
            </p>
            <p class="about__content__notes__desc--second">
              From there, the band has soared, gaining international recognition and ranking in the top
              10 on the Poster Charts. New fans immediately fell in love with the band’s original and
              organic attitude, solidifying their place as one of the hottest and fastest up and coming
              acts of this century. Fans affectionately refer to themselves as “The Hive” and are drawn
              to their candid and authentic performances on stage. The Bees Knees are currently recording
              their second studio album, looking to be released in early 2024.
            </p>
          </div>
        </div>
      </article>

      <article class="photo-gallery">
      <h2 class="photo-gallery__title">Photo Gallery</h2>
        <div class="photo-gallery__box">
          <img src={photo1} alt="photo gallery 1" class="photo-gallery__box__image"/>
          <img src={photo2} alt="photo gallery 2" class="photo-gallery__box__image"/>
          <img src={photo3} alt="photo gallery 3" class="photo-gallery__box__image"/>
          <img src={photo4} alt="photo gallery 4" class="photo-gallery__box__image"/>
          <img src={photo5} alt="photo gallery 5" class="photo-gallery__box__image"/>
          <img src={photo9} alt="photo gallery 6" class="photo-gallery__box__image"/>
          <img src={photo7} alt="photo gallery 7" class="photo-gallery__box__image"/>
          <img src={photo8} alt="photo gallery 8" class="photo-gallery__box__image"/>
          <img src={photo6} alt="photo gallery 9" class="photo-gallery__box__image"/>
        </div>
      </article>
    </section>
  )
}

export default HomePage