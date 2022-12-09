import { UilSearch } from '@iconscout/react-unicons'

import Logo from '../img/logo.png'
import '../styles/logosearch.css'

const LogoSearch = () => {
  return (
    <div className='logo-search'>
      <img src={Logo} alt='Logo' />
      <div className='search'>
        <input type='text' placeholder='Search' />
        <div className='search-icon'>
          <UilSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
