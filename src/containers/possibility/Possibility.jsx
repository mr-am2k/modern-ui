import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibilityImage.png'

const Possibility = () => {
  const titleContent = 'The possibilities are beyond your imagination'
  const paragraphContent = 'Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.'

  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img  src={possibilityImage} alt='Possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>{titleContent}</h1>
        <p>{paragraphContent}</p>
        <h4>Request Early Access to get Started</h4>
      </div>
    </div>
  )
}

export default Possibility