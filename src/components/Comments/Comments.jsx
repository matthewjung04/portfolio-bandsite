import moment from 'moment'
import avatarPhoto from '../../assets/Images/Mohan-muruge.jpg'
import deleteIcon from '../../assets/Icons/SVG/icon-delete.svg'
import likeIcon from '../../assets/Icons/SVG/icon-like.svg'
import './Comments.scss'

function Comments({ id, name, message, date, likes, incrementLikes, deleteComment }) {

  const dynamicTime = (time) => {
    return moment(new Date(date)).fromNow();
  }

  return (
    <div className='posted-comment'>
      <img className='posted-comment__image' src={avatarPhoto} alt='avatar photo'/>
      <div className='posted-comment__text'>
        <div className='posted-comment__text__head'>
          <h2 className='posted-comment__text__head--name'>{name}</h2>
          <h2 className='posted-comment__text__head--date'>{dynamicTime()}</h2>
        </div>
        <span>{message}</span>
        <div className='posted-comment__text__container'>
          <button type='button' className='posted-comment__text__container__button' id={id} onClick={incrementLikes}>
            <img src={likeIcon} alt='like icon' id={id}/>
            <span className='posted-comment__text__container__button__counter' id={id}>{likes}</span>
          </button>
          <button type='button' className='posted-comment__text__container__button' id={id} onClick={deleteComment}>
            <img src={deleteIcon} alt='delete icon' id={id}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Comments