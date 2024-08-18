import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const PageHeader = (props) => {
  const { headerText, icon } = props;
  return (
    <div className="wrapper">
      <h2>
        {headerText}
      </h2>
      <span>
        {icon}
      </span>
    </div>
  );
};

// Define the prop types
PageHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default PageHeader;
