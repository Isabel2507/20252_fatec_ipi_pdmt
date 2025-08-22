import React from 'react'

const Feedback = props => {
  return (
    <div className='d-flex justify-content-evenly'>
        <button className="btn btn-primary" 
        onClick={props.funcaoOK}>
            {props.textoOK}
        </button>
        <button className="btn btn-danger"
        onClick={props.funcaoNOK}>
            {props.textoNOK}
        </button>
    </div>
  )
}

export default Feedback