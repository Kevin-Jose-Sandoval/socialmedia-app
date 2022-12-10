import PostSide from '../components/PostSide'
import ProfileSide from '../components/ProfileSide'

import '../styles/homepage.css'

const HomePage = () => {
  return (
    <div className='home'>
      <ProfileSide />
      <PostSide />
      <div className='home__right-side'>RightSide</div>
    </div>
  )
}

export default HomePage
