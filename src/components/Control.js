import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomizeColor: PropTypes.func,
};

function createWarning(funcName) {
  return () => console.warn(`${funcName} is not defined`);
}

const defaultProps = {
  onPlus: () => createWarning('onPlus'),
  onSubtract: () => createWarning('onSubtract'),
  onRandomizeColor: () => createWarning('onRandomizeColor'),
};

class Control extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onPlus } = this.props;
    const { onSubtract } = this.props;
    const { onRandomizeColor } = this.props;
    return (
      <div>
        <button type="button" onClick={onPlus}>
          +
        </button>
        <button type="button" onClick={onSubtract}>
          -
        </button>
        <button type="button" onClick={onRandomizeColor}>
          Randomize Color
        </button>
      </div>
    );
  }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
