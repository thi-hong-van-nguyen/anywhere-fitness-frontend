import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getClasses } from '../actions'
import ClassComp from './ClassComp'
import ClassForm from './ClassForm'

function Classes(props) {
    const [
        displayClassForm,
        setDisplayClassForm
    ] = useState(false)
    const [classToEdit, setClassToEdit] = useState({})


    useEffect(() => {
        props.getClasses()
    }, [])
    console.log('classes renders')

    const addClassBtn =
        localStorage.getItem('role') === 'instructor'
            && props.login === true
            ? <div className='add-class'>
                <button className='btn'
                    onClick={() => setDisplayClassForm(!displayClassForm)}
                >add class
                </button>
            </div>
            : <></>

    if (props.isFetching) {
        return (<div>Fetching Classes...</div>)
    }

    return (
        <div className='classes'>
            <div className='classes-wrap'>
                <div className='classes-title'>
                    <h2>Available Classes</h2>
                </div>

                {addClassBtn}

                <div className='classes-cards'>
                    {props.classes.map(item =>
                        <ClassComp
                            cl={item}
                            key={item.class_id}
                            setDisplayClassForm={setDisplayClassForm}
                            setClassToEdit={setClassToEdit}
                        />
                    )}
                </div>
            </div>

            {displayClassForm && <ClassForm
                setDisplayClassForm={setDisplayClassForm}
                classToEdit={classToEdit}
                setClassToEdit={setClassToEdit}
            />}
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        login: state.login.login,
        classes: state.classes.classes,
        isFetching: state.classes.isFetching
    })
}

export default connect(mapStateToProps, { getClasses })(Classes)
