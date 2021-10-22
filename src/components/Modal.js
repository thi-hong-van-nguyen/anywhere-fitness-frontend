import React from 'react'

export default function Modal(props) {
    const {
        setModal,
        class_id,
        del
    } = props

    return (
        <div className='modal'>
            <h3>Are you sure you want to remove this item?</h3>
            <div>You will not be able to undo it</div>
            <div>
                <button onClick={() => del(class_id)}>Yes</button>
                <button onClick={() => setModal(false)}>No</button>
            </div>
        </div>

    )
}
