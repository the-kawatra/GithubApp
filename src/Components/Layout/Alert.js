import React, { useContext } from "react";
import AlertContext from "../../Context/Alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i class="fa-solid fa-circle-info"></i>
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
