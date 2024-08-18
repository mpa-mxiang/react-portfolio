import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Popup({ trigger, setTrigger, children }) {
  return trigger ? (
    <div className="popup">
      <div className="popup__inner">
        <button
          className="popup__inner__btn"
          onClick={() => setTrigger(false)}
          type="button"
        >
          X
        </button>
        {children}
      </div>
    </div>
  ) : '';
}

// Define prop types for validation
Popup.propTypes = {
  trigger: PropTypes.bool.isRequired,
  setTrigger: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popup;
