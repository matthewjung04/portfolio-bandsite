import moment from 'moment'
import avatarPhoto from '../../assets/Images/Mohan-muruge.jpg'
import deleteIcon from '../../assets/Icons/SVG/icon-delete.svg'
import likeIcon from '../../assets/Icons/SVG/icon-like.svg'
import './Comments.scss'

function Comments({ name, message, date, likes }) {

  const dynamicTime = (time) => {
    return moment(date).fromNow();
  }

  return (
    <div className='posted-comment'>
      <img className='posted-comment__image' src={avatarPhoto} alt='avatar photo'/>
      <div className='posted-comment__text'>
        <div className='posted-comment__text__head'>
          <h2 className='posted-comment__text__head--name'>{name}</h2>
          <h2 className='posted-comment__text__head--date'></h2>
        </div>
        <span>{message}</span>
        <div className='posted-comment__text__container'>
          <button className='posted-comment__text__container__button'>
            <img src={likeIcon} alt='like icon'/>
            <span className='posted-comment__text__container__button__counter'>{likes}</span>
          </button>
          <button className='posted-comment__text__container__button'>
            <img src={deleteIcon} alt='delete icon'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Comments