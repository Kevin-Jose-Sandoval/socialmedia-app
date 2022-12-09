import Cover from '../img/cover.jpg'
import Profile from '../img/profileImg.jpg'
import '../styles/profilecard.css'

const ProfileCard = () => {
  return (
    <div className='profile-card'>
      <div className='profile-images'>
        <img className='profile-images__cover' src={Cover} alt='' />
        <img className='profile-images__profile' src={Profile} alt='' />
      </div>

      <div className='profile-name'>
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className='follow-status'>
        <hr />
        <div>
          <div className='follow'>
            <span>6,890</span>
            <span>Following</span>
          </div>
          <div className='vertical-line'></div>
          <div className='follow'>
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>

      <span>My Profile</span>
    </div>
  )
}

export default ProfileCard
