import { useState, useEffect } from "react";

import './ShowsPage.scss'

function ShowsPage() {

  
  return (
    <section>
      <article className="shows-hero">
        <div className="shows-hero__content">
          <div>
            <p className="shows-hero__content__desc">Beautiful Beasts Album</p>
            <h1 className="shows-hero__content__title"> Stripes of Yellow x For The Stings</h1>
          </div>
          <div className="shows-hero__content__music">
            <iframe
              width="100%" height="166"
              scrolling="no" frameBorder="no" allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1937452967&color=%23f0678c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
            <div className="music-player">
              <a href="https://soundcloud.com/rose-music-official" title="ROSÉ" target="_blank" className='music-player__link-one'>ROSÉ</a>
              ·
              <a href="https://soundcloud.com/rose-music-official/apt" title="APT." target="_blank" className="music-player__link-two">APT.</a>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default ShowsPage