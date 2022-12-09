import { Followers } from '../data/FollwersData'

import '../styles/followerscard.css'

const FollowersCard = () => {
  return (
    <div className='follower-card'>
      <h3>Who is following you</h3>

      {Followers.map((follower, id) => {
        return (
          <div className='follower'>
            <div>
              <img className='follower__img' src={follower.img} alt='' />
              <div className='name'>
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className='button fc-button'>Follow</button>
          </div>
        )
      })}
    </div>
  )
}

export default FollowersCard
