import { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import bandLogo from '../../assets/Logo/Logo-bandsite.svg'
import './Header.scss'

function Header() {
  const location = useLocation();
  const homePath = location.pathname === '/';
  const showsPath = location.pathname === '/shows';

  const homePageState = () => {
    if(homePath && !showsPath) {
      return '--active';
    }else if(showsPath && !homePath) {
      return '--inactive'
    }
  }

  const showsPageState = () => {
    if(homePath && !showsPath) {
      return '--inactive';
    }else if(showsPath && !homePath) {
      return '--active'
    }
  }

  const linkHover = (e) => {
    let hoverElement = document.getElementById(e.target.id);
    hoverElement.classList.add('link-hover')

    const linkClass = hoverElement.classList.value;
    if(linkClass.includes('--inactive') && hoverElement.id == 'home-link') {
      let activeClass = document.getElementById('shows-link');
      activeClass.classList.remove('header__nav__link--active')
      activeClass.classList.add('header__nav__link--inactive')

    } else if(linkClass.includes('--inactive') && hoverElement.id == 'shows-link') {
      let activeClass = document.getElementById('home-link');
      activeClass.classList.remove('header__nav__link--active')
      activeClass.classList.add('header__nav__link--inactive')

    }
  }

  const linkHoverExit = (e) => {
    let hoverElement = document.getElementById(e.target.id);
    hoverElement.classList.remove('link-hover')

    const linkClass = hoverElement.classList.value;
    if(linkClass.includes('--inactive') && hoverElement.id == 'home-link') {
      let activeClass = document.getElementById('shows-link');
      activeClass.classList.remove('header__nav__link--inactive')
      activeClass.classList.add('header__nav__link--active')

    } else if(linkClass.includes('--inactive') && hoverElement.id == 'shows-link') {
      let activeClass = document.getElementById('home-link');
      activeClass.classList.remove('header__nav__link--inactive')
      activeClass.classList.add('header__nav__link--active')

    }
  }

  return (
    <header className='header'>
      <Link to='/'>
        <img src={bandLogo} alt='band logo' className='header__logo'/>
      </Link>
      
      <div className='header__nav'>
        <Link 
          to='/'
          className={`header__nav__link${homePageState()}`}
          id='home-link'
          onMouseOver={linkHover}
          onMouseOut={linkHoverExit}
        >Biography</Link>
        <Link 
          to='/shows'
          className={`header__nav__link${showsPageState()}`}
          id='shows-link'
          onMouseOver={linkHover}
          onMouseOut={linkHoverExit}
        >Shows</Link>
      </div>
    </header>
  )
}

export default Header