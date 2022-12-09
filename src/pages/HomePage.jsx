import ProfileSide from '../components/ProfileSide'

import '../styles/homepage.css'

const HomePage = () => {
  return (
    <div className='home'>
      <ProfileSide />
      <div className='home__post-side'>Posts</div>
      <div className='home__right-side'>RightSide</div>
    </div>
  )
}

export default HomePage
