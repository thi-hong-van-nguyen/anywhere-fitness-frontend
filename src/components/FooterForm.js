import React from 'react'

export default function FooterForm() {
    return (
        <form className='footer-form'>
            <div className='input-col input-col-1'>
                <label>
                    Name
                </label>
                <input />
            </div>
            <div className='input-col input-col-2'>
                <label>
                    Email
                </label>
                <input />
            </div>
            <div className='input-col input-col-3'>
                <label>
                    Message
                </label>
                <input />
            </div>
            <div className='input-col input-col-4'>
                <button
                    className='btn'
                >
                    Send
                </button>
                <button
                    className='btn'
                >
                    Clear
                </button>
            </div>
        </form>
    )
}

