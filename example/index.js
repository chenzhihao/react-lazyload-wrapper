import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './Photo';
import LazyLoadHOC from '../src/index';

function ready (fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function () {
  let LazyLoadPhoto = LazyLoadHOC(Photo);
  ReactDOM.render(
    <div>
      <div style={{height: '2000px'}}> scroll</div>
      <LazyLoadPhoto
        thumbnailUrl={'https://camo.githubusercontent.com/69027e96f1d25d50ee9c26a1634d6a72d6ab830a/687474703a2f2f692e696d6775722e636f6d2f4a4d5437414359672e706e67'}
      />
    </div>
    , document.getElementById('app'));
});
