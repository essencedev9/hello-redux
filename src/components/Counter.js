import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Value from './Value';
import Control from './Control';

import * as actions from '../actions';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.setRandomColor = this.setRandomColor.bind(this);
  }

  setRandomColor() {
    const { handleSetColor } = this.props;

    const color = [
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
    ];

    handleSetColor(color);
  }

  render() {
    const { number } = this.props;
    const { handleIncrement } = this.props;
    const { handleDecrement } = this.props;
    const { handleSetColor } = this.props;
    const { color } = this.props;
    const style = {
      background: `rgb(${color[0]},${color[1]},${color[2]})`,
    };

    return (
      <div style={style}>
        <Value number={number} />
        <Control
          onPlus={handleIncrement}
          onSubtract={handleDecrement}
          onRandomizeColor={this.setRandomColor}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
  color: state.ui.color,
});

const mapDispatchToProps = (dispatch) => ({
  handleIncrement: () => {
    dispatch(actions.increment());
  },
  handleDecrement: () => {
    dispatch(actions.decrement());
  },
  handleSetColor: (color) => {
    dispatch(actions.setColor(color));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
