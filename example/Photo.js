import React, {
  Component,
  PropTypes,
} from 'react';

class Photo extends Component {
  render () {
    return (
      <div
        style={{backgroundImage: `url(${this.props.thumbnailUrl})`, width: '200px', height: '200px'}}
      />
    );
  }
}

Photo.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
};

export default Photo;
