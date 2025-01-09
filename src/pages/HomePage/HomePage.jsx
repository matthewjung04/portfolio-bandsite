import { useState, useEffect } from "react";
import { BandSiteApi } from "../../utils/utils";
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
import avatarPhoto from '../../assets/Images/Mohan-muruge.jpg'
import Comments from '../../components/Comments/Comments'
import './HomePage.scss'

function HomePage() {
  const [commentsList, setCommentsList] = useState(null)

  useEffect(() => {
    const fetchComments = async () => {
      let BandSiteGet = new BandSiteApi();
      let commentlist = await BandSiteGet.getComments();
      setCommentsList(commentlist);
    }
    fetchComments();
  },[])

  console.log(commentsList)

  return (
    <section>
      <div className="hero">
        <h1 className="hero__title">The Bees Knees</h1>
      </div>

      <article className="about">
        <div className="about__header">
          <h2 className="about__header__title">About the Musicians</h2>
          <img src={bandImage} alt="band photo" className="about__header__photo"/>
          <h3 className="about__header__subtext">
            “We push each other to be the best. It’s not uncommon for
            one of us to say ‘this needs to be better, back to the drawing board’”
          </h3>
          <h3 className="about__header__subtext--quote">- Lead vocalist of The Bees Knees</h3>
        </div>

        <div className="about__content">
          <h3 className="about__content__title">The Bees Knees</h3>
          <div className="about__content__notes">
            <p className="about__content__notes__desc">
              The Bees Knees is a pop rock band originating from San Francisco, California. The band
              consists a dynamic lineup featuring two lead vocalists, two guitarists, a bassist,
              a keyboardist and a drummer. The band achieved its first commercial success as an unsigned
              act, drawing attention from their future manager. Having extensive experience working
              with both new and seasoned acts, the manager was confident the band could succeed even
              further with more support, pushing The Bees Knees to sign with a well known record label.
            </p>
            <p className="about__content__notes__desc--second">
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

      <article className="photo-gallery">
      <h2 className="photo-gallery__title">Photo Gallery</h2>
        <div className="photo-gallery__box">
          <img src={photo1} alt="photo gallery 1" className="photo-gallery__box__image"/>
          <img src={photo2} alt="photo gallery 2" className="photo-gallery__box__image"/>
          <img src={photo3} alt="photo gallery 3" className="photo-gallery__box__image"/>
          <img src={photo4} alt="photo gallery 4" className="photo-gallery__box__image"/>
          <img src={photo5} alt="photo gallery 5" className="photo-gallery__box__image"/>
          <img src={photo9} alt="photo gallery 6" className="photo-gallery__box__image"/>
          <img src={photo7} alt="photo gallery 7" className="photo-gallery__box__image"/>
          <img src={photo8} alt="photo gallery 8" className="photo-gallery__box__image"/>
          <img src={photo6} alt="photo gallery 9" className="photo-gallery__box__image"/>
        </div>
      </article>

      <article className="comments">
        <h1 className="comments__title">Join The Conversation</h1>
        <div className="comments__main">
          <img className="comments__main__photo" src={avatarPhoto} alt="avatar-photo"/>
          <form className="comments__main__form" id="myForm">
            <label className="comments__main__form__label" htmlFor="name">NAME</label>
            <input type="text" className="comments__main__form__input" name="name" placeholder="Enter your name" required/>

            <label className="comments__main__form__label--text" htmlFor="message">COMMENT</label>
            <textarea className="comments__main__form__input--text" name="message" rows="4" placeholder="Add a new comment" required></textarea>

            <button type="submit" className="comments__main__form__button" id="submit-btn">COMMENT</button>
          </form>
        </div>
      </article>

      <article className='comment-list'>
        {
          commentsList ? (
              commentsList.map((comment) => (
                <Comments
                  key={comment.id}
                  name={comment.name}
                  message={comment.comment}
                  date={comment.timestamp}
                  likes={comment.likes}
                />
              ))
          ) : null
        }
      </article>
    </section>
  )
}

export default HomePage