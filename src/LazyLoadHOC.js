import React, {
  Component,
} from 'react';
import throttle from 'lodash.throttle';
import {isElementCloseToViewport, isElementPartInViewport} from 'viewport-overlap-checker';

/**
 *
 * @param WrappedComponent
 * @param options = {
 *   initialPositionCheckDeviation: {top, bottom, left, right},
 *   scrollPositionCheckDeviation: {top, bottom, left, right},
 * }
 * @constructor
 */

const LazyLoadHOC = (WrappedComponent, options = {
  initialPositionCheckDeviation: {
    top: 30,
    bottom: 30,
  },
  scrollPositionCheckDeviation: {
    top: 300, bottom: 200
  },
}) => class extends Component {
  constructor (props) {
    super(props);
    this.state = {shouldRender: false, appeared: false};

    this._load = throttle(() => {
      if (isElementCloseToViewport(this._node, options.scrollPositionCheckDeviation) && !this.state.shouldRender) {
        this.setState({shouldRender: true});
      }

      if (isElementPartInViewport(this._node)) {
        this.setState({appeared: true});
      }

      if (this.state.shouldRender === true) {
        document.removeEventListener('scroll', this._load);
      }
    }, 300);
  }

  componentDidMount () {
    if (isElementCloseToViewport(this._node, options.initialPositionCheckDeviation)) {
      this.setState({shouldRender: true, appeared: true}); //eslint-disable-line
      return;
    }

    document.addEventListener('scroll', this._load);
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this._loadImage);
  }

  render () {
    return (
      <div
        ref={(ref) => {
          this._node = ref;
        }}
      >
        {(() => {
          if (this.state.shouldRender) {
            return <WrappedComponent {...this.props} className={this.state.appeared ? 'appeared' : 'not-appeared'}/>;
          } else {
            return null;
          }
        })()}
      </div>
    );
  }
};

export default LazyLoadHOC;
