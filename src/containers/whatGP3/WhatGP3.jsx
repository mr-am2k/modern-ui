import React from 'react'
import { Feature } from '../../components'
import './whatGP3.css'

const WhatGP3 = () => {

  const whatIsGPT3Content = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
  const chatbotsContent = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
  const knowledgebaseContent = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments '
  const educationContent = 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments '
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feture'>
        <Feature
          title='What is GPT-3'
          text={whatIsGPT3Content}
        />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p className='gradient-text'>
          Explore The Library
        </p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature
          title='Chatbots'
          text={chatbotsContent}
        />
        <Feature
          title='Knowledgebase'
          text={knowledgebaseContent}
        />
        <Feature
          title='Education'
          text={educationContent}
        />
      </div>
    </div>
  )
}

export default WhatGP3