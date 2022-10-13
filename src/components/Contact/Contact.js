import React from 'react'
import Address from './Address'
import Form from './Form'

export default function Contact() {
    return (
      <div className='about'>
          <div className='intro'>
            <h2>Contact Us</h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
            </p>
          </div>
          <div className='contact'>
            <Address/>
            <Form/>
          </div>
      </div>
    )
}
