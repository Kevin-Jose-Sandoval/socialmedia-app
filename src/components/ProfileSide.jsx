import LogoSearch from './LogoSearch'
import ProfileCard from './ProfileCard'
import FollowersCard from './FollowersCard'

import '../styles/profileside.css'

const ProfileSide = () => {
  return (
    <div className='profile-side'>
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileSide
