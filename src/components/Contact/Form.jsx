import React from 'react'

export default function Form() {
    return (
        <div className='form'>
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
                  <textarea rows="3"></textarea>
                </div>
                <div className='input-group'>
                    <button className='send-btn'>Send</button>
                </div>
              </form>
        </div>
    )
}
