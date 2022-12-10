import { useState, useRef } from 'react'

import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

import ProfileImage from '../img/profileImg.jpg'

import '../styles/postshare.css'

const PostShare = () => {
  const [image, setImage] = useState(null)
  const imageRef = useRef()

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage({ image: URL.createObjectURL(img) })
    }
  }

  return (
    <div className='post-share'>
      <img src={ProfileImage} alt='' />
      <div>
        <input type='text' placeholder='What is happening' />
        <div className='post-options'>
          <div className='option option--photo' onClick={() => imageRef.current.click()}>
            <UilScenery />
            Photo
          </div>
          <div className='option option--video'>
            <UilPlayCircle />
            Video
          </div>
          <div className='option option--location'>
            <UilLocationPoint />
            Location
          </div>
          <div className='option option--schedule'>
            <UilSchedule />
            Schedule
          </div>

          <button className='button button-share'>Share</button>
          <div className='file-input'>
            <input type='file' name='miImage' ref={imageRef} onChange={onImageChange} />
          </div>
        </div>

        {image && (
          <div className='preview-image'>
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt='' />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare
