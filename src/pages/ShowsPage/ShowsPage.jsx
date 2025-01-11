import { useState, useEffect } from "react";
import { BandSiteApi } from "../../utils/utils";
import './ShowsPage.scss'

function ShowsPage() {
  const [shows, setShows] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      let BandSiteGet = new BandSiteApi();
      let showDates = await BandSiteGet.getShows();
      setShows(showDates);
    }
    fetchShows();
  },[])
  console.log(shows)
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

      <article className="shows">
        <h1 className="shows__title">Shows</h1>
        <table className="shows__table">
          <tbody>
            <tr>
              <th id="header1" className="head">DATE</th>
              <th id="header2">VENUE</th>
              <th id="header3">LOCATION</th>
            </tr>
            {
              shows ? (
                shows.map((show) => (
                  <tr key={show.id} id={show.id} className='table-cursor'>
                    <th className='shows__table__header--first'>DATE</th>
                    <td className='shows__table__data--first'>{new Date(show.date).toDateString()}</td>
                    
                    <th className='shows__table__header'>VENUE</th>
                    <td className='shows__table__data'>{show.place}</td>

                    <th className='shows__table__header'>LOCATION</th>
                    <td className='shows__table__data'>{show.location}</td>

                    <td className='shows__table__data--last'>
                      <button type='button' className='shows__table__data__button'>BUY TICKETS</button>
                    </td>
                  </tr>
                ))
              ) : null
            }
          </tbody>
        </table>
      </article>
    </section>
  )
}

export default ShowsPage