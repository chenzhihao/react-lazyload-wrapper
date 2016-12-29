# react-lazyload-wrapper

> React higher order component which is used to make any another component become lazyload.

### Install
```sh
npm i --save react-lazyload-wrapper
```

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
