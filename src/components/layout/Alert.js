import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert, remove } = alertContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle">{alert.msg}</i>
        <button onClick={remove} style={{ float: "right", width: "30px" }}>
          X
        </button>
      </div>
    )
  );
};

export default Alert;

// if (alert !==null) return (
//     (<div className = {`alert alert-${alert.type}`}>
//      <i className="fas fa-info-circle">{alert.msg}</i>
//      <button onClick={remove} style={{float:'right', width:'30px'}}>X</button>
//  </div>)
//  );
