import React from "react";
import "./styles.scss";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup__inner">
        <button className="popup__inner__btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
