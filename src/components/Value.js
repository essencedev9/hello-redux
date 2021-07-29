import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  number: PropTypes.number,
};

const defaultProps = {
  number: -1,
};

class Value extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { number } = this.props;

    return (
      <div>
        <h1>{number}</h1>
      </div>
    );
  }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;
