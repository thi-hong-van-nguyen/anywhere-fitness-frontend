import React from 'react'

export default function Modal(props) {
    const {
        setModal,
        id,
        handleYes,
        err
    } = props

    const handleClick = (id, display) => {
        handleYes(id)
        setModal(display)
    }

    return (
        <div className='modal'>
            <h3>Are you sure you want to remove this item?</h3>
            <div>You will not be able to undo it</div>
            <div>
                <button className='btn' onClick={() => handleClick(id, false)} > Yes</button>
                <button className='btn' onClick={() => setModal(false)}>No</button>
            </div>
            {err ? <div className='err'>{err}</div> : <></>}
        </div >

    )
}
