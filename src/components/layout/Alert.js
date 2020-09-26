import React from 'react'

const Alert = (props) => {
   return (
       props.alert !== null && (
    <div className = {`alert alert-${props.alert.type}`}>
        <i className="fas fa-info-circle">{props.alert.msg}</i>
        <button onClick={props.remove} style={{float:'right', width:'30px'}}>X</button>
    </div>
    )
       )
}


export default Alert;