import './index.scss'

import * as React from 'react';
import * as ReactDOM from 'react-dom';

init()

async function init() {
  const element = (
    <div class="container-fluid">
      <h1>xkb</h1>
      <hr />
    </div>
  );
  ReactDOM.render(element, document.getElementById('app-root'));
}
