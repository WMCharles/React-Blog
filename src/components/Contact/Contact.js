import React from 'react'

export default function Contact() {
    return (
      <div className='about'>
          <h2>Contact Us</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
          </p>
          <div>
            <div className="address">

              <div className='pobox'>
                <div>
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4>Address</h4>
                  <p>P.O Box 364, Kitale, Sabwani Road </p>
                </div>
              </div>

              <div>
                <div>
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+254 795 289 737</p>
                </div>
              </div>

              <div>
                <div>
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>wafulacharles47@gmail.com</p>
                </div>
              </div>

            </div>

            <div>
              <form>
                <h2>Send Message</h2>
                <div className='input-group'>
                  <label>Name</label>
                  <input type="text" />
                </div>
                <div className='input-group'>
                  <label>Email</label>
                  <input type="text" />
                </div>
                <div className='input-group'>
                  <label>Type your message...</label>
                  <textarea rows="5"></textarea>
                </div>
              </form>
            </div>
          </div>
      </div>
    )
}
