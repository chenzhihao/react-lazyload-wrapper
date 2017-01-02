# react-lazyload-wrapper

> React higher order component which is used to make any another component become lazyload.

### Install
```sh
npm i --save react-lazyload-wrapper
```
### Demo
<video autoplay="" loop="" style="max-width: 100%; min-height: 573.806px;"><source type="video/mp4" src="//i.imgur.com/62gEOog.mp4"></video>

### Usage

```javascript
import LazyLoadHOC from 'react-lazyload-wrapper';
import Photo from './Photo';

let LazyLoadPhoto = LazyLoadHOC(Photo);
ReactDOM.render(
  <div>
    <div style={{height: '2000px'}}> scroll</div>
    <LazyLoadPhoto
      thumbnailUrl={'ImagePath'}
    />
  </div>
  , document.getElementById('app'));
```
