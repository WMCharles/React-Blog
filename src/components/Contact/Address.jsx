import React from 'react'

export default function Address() {
    return (
        <div className="address">
            <div className='box'>
                <div className='icon'>
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4>Address</h4>
                  <p>P.O Box 364, Kitale, Sabwani Road </p>
                </div>
            </div>
            <div className='phone'>
                <div className='icon'>
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+254 795 2x9 xxx</p>
                </div>
            </div>
            <div className='envelope'>
                <div className='icon'>
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>wafulacharles4x@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
