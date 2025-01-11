import facebookIcon from '../../assets/Icons/SVG/Icon-facebook.svg'
import instagramIcon from '../../assets/Icons/SVG/icon-Instagram.svg'
import twitterIcon from '../../assets/Icons/SVG/Icon-twitter.svg'
import bandLogo from '../../assets/Logo/Logo-bandsite.svg'
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <section className='footer-tablet-desktop'>
        <article>
          <div className="footer__header">
            <h2 className="footer__header__title">Get in Touch</h2>
            <div className="footer__header__icons">
              <a href="https://www.instagram.com">
                <img src={instagramIcon} alt="instagram icon" />
              </a>
              <a href="https://www.facebook.com">
                <img src={facebookIcon} alt="facebook icon" />
              </a>
              <a href="https://x.com">
                <img src={twitterIcon} alt="twitter icon" />
              </a>
            </div>
          </div>

          <div className="footer__info">
            <div className="footer__info__sub">
              <h3 className="footer__info__sub__head">The Bees Knees Management</h3>
              <p className="footer__info__sub__desc">503 Broadway Penthouse,</p>
              <p className="footer__info__sub__desc--bottom">New York, NY 10012, USA</p>
              <a href="mailto:info@thebeesknees.com" className="footer__info__sub__link">
                info@thebeesknees.com
              </a>
            </div>

            <div className="footer__info__sub">
              <h3 className="footer__info__sub__head">Limitless Artist Group</h3>
              <p className="footer__info__sub__desc">Booking Agent for</p>
              <p className="footer__info__sub__desc--bottom">US / South America / Japan</p>
              <a href="mailto:bookings@limitlessag.com" className="footer__info__sub__link">
                bookings@limitlessag.com
              </a>
            </div>

            <div className="footer__info__sub">
              <h3 className="footer__info__sub__head">ARCH Entertainment</h3>
              <p className="footer__info__sub__desc">Booking Agent for</p>
              <p className="footer__info__sub__desc--bottom">UK / EU / AU</p>
              <a href="mailto:bookings@archentertainment.com" className="footer__info__sub__link">
                bookings@archentertainment.com
              </a>
            </div>
          </div>
        </article>
        <img src={bandLogo} alt="bandsite watermark" className="footer__watermark" />
      </section>
      <p className="footer__copyright">Copyright The Bees Knees @ 2023 All Rights Reserved</p>
    </footer>
  )
}

export default Footer